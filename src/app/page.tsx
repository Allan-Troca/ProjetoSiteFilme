"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Usuario = {
  id?: number,
  name: string
}

export default function Home() {
  const router = useRouter()
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    buscarUsuarios()
  }, []);

  const buscarUsuarios = async () => {
    setIsLoading(true)
    const response = await fetch('/api/usuarios')

    const resultado = await response.json()
    setUsuarios(resultado as any)
    setIsLoading(false)
  }
  return (
    <div>
      <h1>Usuários</h1>
      {isLoading && 'carregando...'}
      <ul>
        {
          usuarios?.map((usuario) => {
            return <li key={usuario.id} onClick={() => router.push(`/usuarios/${usuario.id}`)}>{usuario.name}</li>
          })
        }
      </ul>
    </div>
  );
}
