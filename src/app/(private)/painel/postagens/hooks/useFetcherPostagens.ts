import { useQuery } from "@tanstack/react-query";

async function getNoticias() {
  const response = await fetch("/api/postagens");
  const data = await response.json();
  return data;
}

export function useFetcherPostagens() {
  return useQuery({
    queryKey: ["postagens"],
    queryFn: getNoticias,
    refetchOnMount: false
  });
}


