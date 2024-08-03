import AppButton from "@/components/shared/AppButton";
import AppIcon from "@/components/shared/AppIcon";
import React from "react";

export default function PostItemFooter() {
  return (
    <div className="flex justify-between">
      <AppButton title="post stars" className="flex items-center gap-2 text-gray-1">
        <AppIcon icon="star-outline" className="text-gray-1" width="24" />5
      </AppButton>
      <AppButton title="post comments" className="flex items-center gap-2 text-gray-1">
        <AppIcon icon="comments-dots" className="text-gray-1" width="24" />5
      </AppButton>
      <AppButton title="sharepost" className="flex items-center gap-2 text-gray-1">
        <AppIcon icon="share-box" className="text-gray-1" width="24" />
      </AppButton>
    </div>
  );
}
