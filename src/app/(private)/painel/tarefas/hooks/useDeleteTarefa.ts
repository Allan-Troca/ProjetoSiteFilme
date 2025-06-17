import { queryClient } from "@/app/lib/reactQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function deleteTarefa(data: any) {
  const response = ;
  if (!response.ok) {
    throw new Error("Erro ao criar postagem");
  }
  return response.json();
}

export function useCreateTarefa() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => await fetch(`/api/tarefas/${id}`, {
      method: "DELETE",
    }),
    onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [ 'tarefas']
        })
    }
  });
}
