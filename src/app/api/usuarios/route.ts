export async function GET() {
  return Response.json([
    {
      id: 1,
      name: 'Eduardo'
    },
    {
      id: 2,
      name: 'Pedro'
    }
  ])
}


export async function POST(request) {
  const data = request.body

  //insere no banco de dados
  // retorna id 
  return Response.json([{
    id: 1,
    name: 'Eduardo'
  }])
}

