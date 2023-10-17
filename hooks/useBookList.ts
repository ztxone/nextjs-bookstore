import useSwr from "swr";
import fetcher from "@/libs/fetcher";

const useBooks = () => {
  const { data, error, isLoading } = useSwr("/api/books", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
  };
};

export default useBooks;
