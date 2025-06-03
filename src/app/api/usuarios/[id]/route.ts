const usuarios = [
  {
    id: 1,
    name: 'Eduardo'
  },
  {
    id: 2,
    name: 'Pedro'
  }
]

export async function GET(request, { params }) {
  console.log(params)
  const usuario = usuarios.find((item) => item.id == params.id)
  return Response.json(usuario)
}