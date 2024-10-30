import AppIcon from "@/components/shared/AppIcon";
import { Button } from "@/components/shared/ui/button";
import React, { useState } from "react";
import { addPostComment } from "../../services/comment-post-service";

export const PostItemAddComment = ({ postId }: { postId: number }) => {
  const [comment, setComment] = useState("");

  const handleComment = () => {
    console.log(comment);
    addPostComment({
      postId,
      comment,
      media_url: null,
    })
  };
  return (
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
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <Button onClick={handleComment}>
        <AppIcon icon="play" className="cursor-pointer" />
      </Button>
    </div>
  );
};
