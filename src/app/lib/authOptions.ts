import prisma from "@/app/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "E-mail", type: "email", placeholder: "seu@email.com" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.email === "admin@email.com" &&
          credentials?.password === "123456"
        ) {
          return { id: "1", name: "Admin", email: "admin@email.com" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const userExists = await prisma.usuario.findFirst({
          where: { name: user.name },
        });
        if (!userExists) {
          await prisma.usuario.create({
            data: {
              email: user.email ?? null,
              name: user.name,
              image: user.image,
            },
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;

      const user = await prisma.usuario.findUnique({
        where: { email: (token.user as any).email as string },
      });
      session.user.id = String(user!.id)
      return session;
    },
  },
};