import { POST_ADD_COMMENT_API_URL } from "@/modules/news/constants";
import { CommentToSave } from "../types/comments-post-types";
import { apiAuth } from "@/lib/api";

export const addPostComment = async (data: CommentToSave) => {
  const formData = new FormData();

  formData.append("postId", data.postId.toString());
  formData.append("comment", data.comment);
  if (data.media_url) {
    formData.append("media_url", data.media_url);
  }
  const response = await apiAuth(POST_ADD_COMMENT_API_URL, {
    method: "POST",
    body: formData,
  }).json();
  return response;
};
