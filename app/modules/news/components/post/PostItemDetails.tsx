import React from "react";
import PostItemHeader from "./PostItemHeader";
import PostItemFooter from "./PostItemFooter";
import PostItemComments from "./PostItemComments";
import Image from "next/image";

export default function PostItemDetails() {
  return (
    <article className="flex">
      <Image
        src="/team/wildelmy-colina.jpg"
        alt=""
        className="object-cover"
        width={466}
        height={500}
        loading="lazy"
      />
      <div className="flex flex-col max-w-96 ml-7 mr-16 pt-9">
        <div className="flex">
          <PostItemHeader />
        </div>
        <p>
          We are a branding, design and creative agency. As a branding
          specialist, we transform creative lorem ipsum imdor amet setor.
        </p>
        <div className="my-5">
          <PostItemFooter saveOption />
        </div>
        <PostItemComments />
        {/* <app-post-item-comments className="flex w-full flex-grow" /> */}
      </div>
    </article>
  );
}
