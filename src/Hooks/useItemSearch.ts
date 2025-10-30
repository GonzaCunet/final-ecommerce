import useSWR from "swr";
import { fetchApi } from "@/lib/api";

/**
 * useItemSearch - busca un item por id usando SWR
 * - No hace fetch si id es falsy (key === null)
 */
export default function useItemSearch(id: string) {
  const endpoint = id ? `/products?productId=${encodeURIComponent(id)}` : null;

  const { data, error, isLoading, mutate } = useSWR(
    endpoint,
    // fetchApi debe aceptar (url) y devolver JSON o lanzar error
    fetchApi,
    { revalidateOnFocus: false }
  );

  return {
    product: data ?? null,
    isLoading: Boolean(isLoading || (!data && !!endpoint && !error)),
    isError: Boolean(error),
    mutate,
  };
}
