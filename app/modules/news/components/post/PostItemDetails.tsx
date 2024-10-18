import React from "react";
import PostItemHeader from "./PostItemHeader";
import PostItemFooter from "./PostItemFooter";
import PostItemComments from "./PostItemComments";
import Image from "next/image";

export default function PostItemDetails() {
  return (
    <div className="grid grid-cols-2 h-full">
      <Image
        src="/api/img.png"
        alt=""
        className="object-cover"
        width={466}
        height={500}
        loading="lazy"
      />
      <div className="flex flex-col ml-7 pt-1">
        <PostItemHeader />
        <p>
          We are a branding, design and creative agency. As a branding
          specialist, we transform creative lorem ipsum imdor amet setor.
        </p>
        <div className="my-5">
          <PostItemFooter saveOption />
        </div>
        <PostItemComments />
      </div>
    </div>
  );
}
