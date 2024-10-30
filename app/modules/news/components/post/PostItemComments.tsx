import AppIcon from "@/components/shared/AppIcon";
import React from "react";
import { NewsPost } from "@/modules/news/types/news-posts-types";
import { API_BASE_URL } from "@/constants/api";
import { dateDistance } from "@/lib/date";

type PostItemCommentsProps = {
  readonly post: NewsPost;
};

export default function PostItemComments({ post }: PostItemCommentsProps) {
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
      <div className="overflow-hidden flex items-center py-1 px-2 border-2 border-grey-1 rounded-lg mb-4">
        <img
          src="/team/wildelmy-colina.jpg"
          alt=""
          className="rounded-full"
          width={32}
          height={32}
        />
        <textarea
          name="add-comment"
          rows={1}
          placeholder="Write a comment"
          className="w-full h-full border-none focus:border-none appearance-none focus:outline-transparent focus:ring-transparent resize-none placeholder:text-gray-1"
        ></textarea>
      </div>
    </div>
  );
}
