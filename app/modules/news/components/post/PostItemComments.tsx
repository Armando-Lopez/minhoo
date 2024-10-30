import AppIcon from "@/components/shared/AppIcon";
import React from "react";
import { NewsPost } from "@/modules/news/types/news-posts-types";
import { API_BASE_URL } from "@/constants/api";
import { dateDistance } from "@/lib/date";
import { PostItemAddComment } from "./PostItemAddComment";

type PostItemCommentsProps = {
  readonly post: NewsPost;
};

export default function PostItemComments({ post }: PostItemCommentsProps) {
  console.log(post.id);
  
  return (
    <div className="flex-grow flex flex-col justify-between w-full">
      <div className="overflow-auto flex flex-grow flex-col gap-6 max-h-64 mb-4 px-1">
        {post.comments.map((comment) => (
          <div key={comment.id} className="flex gap-4 text-sm">
            <img
              src={API_BASE_URL + comment.commentator.image_profil}
              alt=""
              className="rounded-full"
              width={56}
              height={56}
            />
            <div>
              <div>
                <strong>{comment.commentator.name}</strong>-
                <span className="text-gray-1">
                  {dateDistance(comment.created_date)}
                </span>
              </div>
              <p>{comment.comment}</p>
            </div>
            <button className="flex flex-col ml-auto items-center text-gray-1">
              <AppIcon icon="star-outline" width="25" />
              <span>8</span>
            </button>
          </div>
        ))}
      </div>
      <PostItemAddComment postId={post.id} />
    </div>
  );
}
