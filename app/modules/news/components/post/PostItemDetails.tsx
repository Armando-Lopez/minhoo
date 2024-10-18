import React from "react";
import PostItemHeader from "@/modules/news/components/post/PostItemHeader";
import PostItemFooter from "@/modules/news/components/post/PostItemFooter";
import PostItemComments from "@/modules/news/components/post/PostItemComments";
import { NewsPost } from "@/modules/news/types/news-posts-types";
import { API_BASE_URL } from "@/constants/api";

type PostItemDetailsProps = {
  readonly post: NewsPost;
};
export default function PostItemDetails({ post }: PostItemDetailsProps) {
  return (
    <div className="grid grid-cols-2 h-full">
      <img
        src={API_BASE_URL + post.post_media[0].url}
        alt=""
        className="object-cover"
        width={466}
        height={500}
        loading="lazy"
      />
      <div className="flex flex-col ml-7 pt-1">
        <PostItemHeader post={post} />
        <p>{post.post}</p>
        <div className="my-5">
          <PostItemFooter saveOption post={post} />
        </div>
        <PostItemComments post={post} />
      </div>
    </div>
  );
}
