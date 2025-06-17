import { authOptions } from "@/app/lib/authOptions";
import prisma from "@/app/lib/prisma";
import { getServerSession } from "next-auth";

export async function GET() {
  const tarefas = await prisma.tarefa.findMany({
    include: {
      usuario: true,
    },
  });
  return Response.json(tarefas);
}

export async function POST(request: Request) {
  let data = await request.json();

  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new Error("Usuário precisa estar autenticado");
  }
  await prisma.tarefa.create({
    data: {
      conteudo: data.conteudo,
      usuario_id: parseInt(session.user.id),
    },
  });

  return Response.json({});
}
