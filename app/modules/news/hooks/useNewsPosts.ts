import useSWR from "swr";
import { NEWS_POSTS_API_URL } from "@/modules/news/constants";
import { getNewsPostsService } from "@/modules/news/services/news-post-service";

export const useNewsPosts = () => {
  const { data, error, isLoading, mutate } = useSWR(
    NEWS_POSTS_API_URL,
    () => getNewsPostsService(),
    {
      revalidateIfStale: false,
    }
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
