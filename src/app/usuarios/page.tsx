type Usuario = {
  id?: number,
  name: string
}

export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  const usuarios: Usuario[] = await response.json()
  
  return (
    <div>
      <h1>Usuários Servidor</h1>
      <ul>
        {
          usuarios?.map((usuario) => {
            return <li>{usuario.name}</li>
          })
        }
      </ul>
    </div>
  );
}
