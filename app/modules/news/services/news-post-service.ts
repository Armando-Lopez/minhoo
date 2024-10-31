import { apiAuth } from "@/lib/api";
import { ApiResponseHeader } from "@/types/api-response";
import { NEWS_POSTS_API_URL } from "@/modules/news/constants";
import {
  GetNewsPostsPort,
  NewsPost,
  NewsPostsPagination,
} from "@/modules/news/types/news-posts-types";

export const getNewsPostsService: GetNewsPostsPort = async () => {
  const response = await apiAuth.get(NEWS_POSTS_API_URL).json<
  ApiResponseHeader & {
    body: {
      posts: NewsPost[];
      page: NewsPostsPagination["page"];
      size: NewsPostsPagination["size"];
      count: NewsPostsPagination["count"];
    };
    }
  >();
  if (response.header.success) {
    return {
      data: response.body.posts,
      pagination: {
        count: response.body.count,
        page: response.body.page,
        size: response.body.size,
      },
    };
  }

  throw new Error(response.header.messages[0]);
};
