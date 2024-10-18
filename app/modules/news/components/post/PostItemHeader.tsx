import React from "react";
import Link from "next/link";
import { formatDistance } from "date-fns";
import { API_BASE_URL } from "@/constants/api";
import AppIcon from "@/components/shared/AppIcon";
import AppButton from "@/components/shared/AppButton";
import { NewsPost } from "@/modules/news/types/news-posts-types";
import PostItemOptions from "@/modules/news/components/post/PostItemOptions";
import { Root as VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/ui/dialog";
type PostItemHeaderProps = {
  readonly post: NewsPost;
};
export default function PostItemHeader({ post }: PostItemHeaderProps) {
  const publicationDistance = formatDistance(post.created_date, new Date(), {
    addSuffix: true,
  });

  return (
    <div className="flex items-center w-full gap-4 mb-4">
      <Link href="/profile">
        <img
          width="48"
          height="48"
          src={API_BASE_URL + post.user.image_profil}
          className="rounded-full h-12"
          alt="user-name"
        />
      </Link>
      <div className="flex flex-col">
        <Link href="/profile">
          <h4>
            {post.user.name} {post.user.last_name}{" "}
          </h4>
        </Link>
        <span className="text-gray-1">{publicationDistance}</span>
        <AppButton
          title="follow"
          className="w-fit px-3 rounded-md bg-primary-1 text-sm text-white"
        >
          Follow
        </AppButton>
      </div>
      <div className="ml-auto">
        <Dialog>
          <DialogTrigger>
            <AppIcon icon="vertical-dots" width="30" />
          </DialogTrigger>
          <DialogContent className="w-fit p-0 rounded-xl">
            <VisuallyHidden>
              <DialogTitle>Post Options</DialogTitle>
              <DialogDescription>Post Options</DialogDescription>
            </VisuallyHidden>
            <PostItemOptions />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
