import useSWR from "swr";
import { fetchApi } from "@/lib/api";

export function useProductSearch({
  search,
  limit,
  offset,
}: {
  search: string;
  limit: number;
  offset: number;
}) {
  const searchParams = search ? `&search=${encodeURIComponent(search)}` : "";
  const endpoint = `/search?limit=${limit}&offset=${offset}${searchParams}`;
  const { data, error, isLoading, mutate } = useSWR(
    search && search.trim() ? endpoint : null,
    fetchApi
  );

  //   if (error) return <div>failed to load</div>;
  //   if (isLoading) return <div>loading...</div>;

  //   // render data
  return {
    products: data?.results || [],
    total: data?.pagination.total || 0,
    isLoading,
    isError: error,
    mutate,
  };
}
