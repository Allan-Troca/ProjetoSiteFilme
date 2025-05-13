export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <h1>Tela de usuários</h1>
        {children}
      </body>
    </html>
  );
}
