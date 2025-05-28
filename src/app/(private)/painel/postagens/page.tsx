"use client";

import Noticia from "./components/Noticia";
import { useCreatePostagem } from "./hooks/useCreatePostagem";
import { useFetcherPostagens } from "./hooks/useFetcherPostagens";

export default function PostagensPage() {
  const { data, isLoading, isError } = useFetcherPostagens();
  const { mutateAsync: createPostagem, isPending: isCreating } = useCreatePostagem();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Página postagens
          </h2>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => {
          createPostagem({
            title: 'Nosso teste de postagem',
            body: 'Conteúdo da postagem',
            userId: 1,
          })
        }}>
          {isCreating ? 'Criando...' : 'Criar'}
        </button>
      </div>
      {isLoading ? (
        <div>Carregando...</div>
      ) : isError ? (
        <div>Erro ao carregar as postagens</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item: any) => {
            return (
              <Noticia key={item.id} title={item.title} body={item.body} />
            );
          })}
        </div>
      )}
    </div>
  );
}
