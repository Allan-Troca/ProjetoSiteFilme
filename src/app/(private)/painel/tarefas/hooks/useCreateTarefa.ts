import { queryClient } from "@/app/lib/reactQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function createTarefa(data: any) {
  const response = await fetch("/api/tarefas", {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Erro ao criar postagem");
  }
  return response.json();
}

export function useCreateTarefa() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => {
      return createTarefa(data);
    },
    onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: [ 'tarefas']
        })
    }
  });
}
