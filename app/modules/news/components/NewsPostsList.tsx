"use client";
import React from "react";
import PostItem from "@/modules/news/components/post/PostItem";
import { useNewsPosts } from "@/modules/news/hooks/useNewsPosts";

export default function NewsPostsList() {
  const { data } = useNewsPosts();

  return (
    <div className="space-y-10">
      {data?.data.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
