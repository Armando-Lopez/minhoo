import { apiAuth } from "@/lib/api";
import { NEWS_POSTS_API_URL } from "@/modules/news/constants";
import { AddPost } from "../types/news-posts-types";

export const addPost = async (data: AddPost) => {
  const formData = new FormData();
  formData.append("post", data.post);
  formData.append("categoryId", data.categoryId.toString());
  if (data.imagePost) {
    formData.append("image_post", data.imagePost);
  }

  const response = await apiAuth(NEWS_POSTS_API_URL, {
    method: "POST",
    body: formData,
  }).json();
  return response;
};
