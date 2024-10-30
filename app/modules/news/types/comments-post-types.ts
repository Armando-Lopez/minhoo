import { User } from "@/modules/user/types/user-types";

export type PostComment = {
  id: number;
  userId: number;
  comment: string;
  media_url: string | null;
  created_date: string;
  commentator: Pick<User, "id" | "name" | "last_name" | "image_profil">;
};

export type CommentToSave = {
  postId: number;
  comment: string;
  media_url: File | null;
}