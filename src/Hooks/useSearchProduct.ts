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
  const { data, error, isLoading } = useSWR(
    `/search?search=${search}&limit=${limit}&offset=${offset}`,
    fetchApi
  );

  //   if (error) return <div>failed to load</div>;
  //   if (isLoading) return <div>loading...</div>;

  //   // render data
  return { data, error, isLoading };
}
