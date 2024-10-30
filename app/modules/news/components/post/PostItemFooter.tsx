import React from "react";
import AppIcon from "@/components/shared/AppIcon";
import AppButton from "@/components/shared/AppButton";
import { NewsPost } from "@/modules/news/types/news-posts-types";
import PostItemSave from "@/modules/news/components/post/PostItemSave";
import { Root as VisuallyHidden } from "@radix-ui/react-visually-hidden";
import PostItemShare from "@/modules/news/components/post/PostItemShare";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/ui/dialog";

type PostItemFooterProps = {
  readonly post: NewsPost;
  readonly saveOption?: boolean;
};
export default function PostItemFooter({
  post,
  saveOption = false,
}: PostItemFooterProps) {
  const postLikes = post.likes.length;
  const totalComments = post.comments.length;

  return (
    <div className="flex justify-between">
      <AppButton
        title="post stars"
        className="flex items-center gap-2 text-gray-1"
      >
        <AppIcon icon="star-outline" className="text-gray-1" width="24" />
        {postLikes}
      </AppButton>
      <AppButton
        title="post comments"
        className="flex items-center gap-2 text-gray-1"
      >
        <AppIcon icon="comments-dots" className="text-gray-1" width="24" />
        {totalComments}
      </AppButton>
      {saveOption && (
        <Dialog>
          <DialogTrigger>
            <AppIcon icon="save" className="text-gray-1" width="24" />
          </DialogTrigger>
          <DialogContent className="w-fit p-0 rounded-xl">
            <VisuallyHidden>
              <DialogTitle>Save Post</DialogTitle>
              <DialogDescription>Save Post</DialogDescription>
            </VisuallyHidden>
            <PostItemSave />
          </DialogContent>
        </Dialog>
      )}
      <Dialog>
        <DialogTrigger>
          <AppIcon icon="share-box" className="text-gray-1" width="24" />
        </DialogTrigger>
        <DialogContent className="w-fit p-0 rounded-xl">
          <VisuallyHidden>
            <DialogTitle>Share Post</DialogTitle>
            <DialogDescription>Share Post</DialogDescription>
          </VisuallyHidden>
          <PostItemShare />
        </DialogContent>
      </Dialog>
    </div>
  );
}
