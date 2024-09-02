import AppButton from "@/components/shared/AppButton";
import AppIcon from "@/components/shared/AppIcon";
import React from "react";
import Link from "next/link";
import AppModal from "@/components/shared/AppModal";
import Image from "next/image";
import PostItemOptions from "@/modules/news/components/post/PostItemOptions";

export default function ChatHeader() {
  return (
    <div className="flex items-center w-full gap-4 mb-5">
      <Link href="/profile">
        <Image
          width="48"
          height="48"
          src="/team/wildelmy-colina.jpg"
          className="rounded-full h-12"
          alt="user-name"
        />
      </Link>
      <div className="flex flex-col">
        <Link href="/profile">
          <h4>Percept brand design </h4>
        </Link>
        <AppButton
          title="follow"
          className="w-fit mt-1 px-3 rounded-md bg-primary-1 text-sm text-white"
        >
          Follow
        </AppButton>
      </div>
      <div className="ml-auto">
        <AppModal
          activator={
            <AppButton title="post options">
              <AppIcon icon="vertical-dots" width="30" />
            </AppButton>
          }
          className="rounded-2xl h-fit ml-auto"
        >
          <PostItemOptions />
        </AppModal>
      </div>
    </div>
  );
}
