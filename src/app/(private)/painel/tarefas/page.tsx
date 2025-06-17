"use client";
import { useCreateTarefa } from "./hooks/useCreateTarefa";
import { useFetcherTarefas } from "./hooks/useFetcherTarefas";

export default function PageTarefas() {
  const { data, isLoading } = useFetcherTarefas();
  const { mutateAsync: createTarefa } = useCreateTarefa();
  const { mutateAsync: deletaTarefa } = useDeleteTarefa();
  const { mutateAsync: toogleTarefa } = useToogleTarefa();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            createTarefa({
              conteudo: form.get("conteudo"),
            });
          }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2">
            <input
              name="conteudo"
              type="text"
              placeholder="Digite a tarefa..."
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Adicionar
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-2 mt-3">
          {isLoading
            ? "carregando ...."
            : data.map((item) => {
                return (
                  <div className="border rounded-md border-gray-400 px-2 py-2">
                    <span className="text-gray-900">
                      {item.conteudo} <small>{item.usuario.name}</small>
                    </span>
                    <input
                      type="radio"
                      checked={item.concluido}
                      onClick={() => {
                        toogleTarefa(item.id);
                      }}
                    />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
