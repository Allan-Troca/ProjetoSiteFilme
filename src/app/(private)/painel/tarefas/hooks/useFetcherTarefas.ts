import { useQuery } from "@tanstack/react-query";

async function getTarefas() {
  const response = await fetch("/api/tarefas");
  const data = await response.json();
  return data;
}

export function useFetcherTarefas() {
  return useQuery({
    queryKey: ["tarefas"],
    queryFn: getTarefas,
    refetchOnMount: false
  });
}


