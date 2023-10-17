import useSwr from "swr";
import fetcher from "@/libs/fetcher";

const useBook = (id?: string) => {
  const { data, error, isLoading } = useSwr(
    id ? `/api/books/${id}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return {
    data,
    error,
    isLoading,
  };
};

export default useBook;
