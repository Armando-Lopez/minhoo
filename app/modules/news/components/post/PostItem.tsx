import React from "react";
import { NewsPost } from "@/modules/news/types/news-posts-types";
// import AppShowMoreToggle from "@/components/shared/AppShowMoreToggle";
import { Root as VisuallyHidden } from "@radix-ui/react-visually-hidden";
import PostItemHeader from "@/modules/news/components/post/PostItemHeader";
import PostItemFooter from "@/modules/news/components/post/PostItemFooter";
import PostItemDetails from "@/modules/news/components/post/PostItemDetails";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "@/components/shared/ui/dialog";
import { API_BASE_URL } from "@/constants/api";

type PostItemProps = {
  readonly post: NewsPost;
};
export default function PostItem({ post }: PostItemProps) {
  return (
    <div>
      <PostItemHeader post={post} />
      <div>
        {/* <AppShowMoreToggle>
          </AppShowMoreToggle> */}
        {post.post}
        <div className="relative mt-2">
          <Dialog>
            <DialogTrigger asChild>
              {post.post_media?.[0] && (
                <img
                  src={API_BASE_URL + post.post_media[0].url}
                  className="w-full rounded-2xl cursor-pointer"
                  width="300"
                  height="400"
                  alt="post-name"
                />
              )}
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <VisuallyHidden>
                  <DialogTitle>
                    Post by {post.user.name} {post.user.last_name}
                  </DialogTitle>
                  <DialogDescription>{post.post}</DialogDescription>
                </VisuallyHidden>
              </DialogHeader>
              <PostItemDetails post={post} />
            </DialogContent>
          </Dialog>
        </div>
        <div className="mt-5">
          <PostItemFooter saveOption post={post} />
        </div>
      </div>
    </div>
  );
}
