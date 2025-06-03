export async function GET() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return Response.json(data);
}

export async function POST(request: Request) {
  let data = await request.json();

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
      body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  })
  if (!response.ok) {
    return Response.json({ message: "Erro ao criar postagem" }, { status: 500 });
  }
  const result = await response.json();
  return Response.json(result);
}
