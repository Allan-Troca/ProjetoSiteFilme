import { queryClient } from "@/app/lib/reactQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function createPostagem(postagem: any) {
  const response = await fetch("/api/postagens", {
    method: "POST",
    body: JSON.stringify(postagem),
  });
  if (!response.ok) {
    throw new Error("Erro ao criar postagem");
  }
  return response.json();
}

export function useCreatePostagem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (postagem: any) => {
      return createPostagem(postagem);
    },
    onSuccess: (data) => {
        console.log('teste', data);
        queryClient.setQueryData(['postagens'], (old: any) => {
            return [data, ...old];
        })  
    }
  });
}
