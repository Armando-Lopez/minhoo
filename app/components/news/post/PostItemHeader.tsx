import AppButton from "@/components/shared/AppButton";
import AppIcon from "@/components/shared/AppIcon";
import React from "react";

export default function PostItemHeader() {
  return (
    <div className="flex items-cene gap-4 mb-6">
      <a href="/">
        <img className="w-12 h-12 rounded-full" alt="user-name" />
      </a>
      <div className="flex flex-col gap-1">
        <a href="/">
          <h4>post.user.name </h4>
          <span className="text-gray-1">post.user.categories</span>
        </a>
        <AppButton
          title="follow"
          className="w-fit px-3 rounded-md bg-primary-1 text-sm text-white"
        >
          Follow
        </AppButton>
      </div>
      <AppButton title="contract service" className="h-fit ml-auto">
        <AppIcon icon="handshake" width="35" className="mt-1 text-primary-1" />
      </AppButton>
    </div>
  );
}
