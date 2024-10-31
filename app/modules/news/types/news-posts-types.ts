import { User } from "@/modules/user/types/user-types";
import { PostComment } from "./comments-post-types";

export type PostMedia = {
  url: string;
  is_img: boolean;
};

export type PostLike = {
  id: number;
  userId: number;
};

export type NewsPost = {
  id: number;
  userId: number;
  categoryId: number;
  post: string;
  is_delete: boolean;
  created_date: string;
  deleted_date: string;
  user: User;
  comments: PostComment[];
  likes: PostLike[];
  post_media: PostMedia[];
};

export type AddPost = {
  post: string;
  categoryId: number;
  imagePost: File | null;
};

export type NewsPostsPagination = {
  page: number;
  size: number;
  count: number;
};

export type GetNewsPostsPort = () => Promise<{
  data: NewsPost[];
  pagination: NewsPostsPagination;
}>;
