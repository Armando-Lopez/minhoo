import AppButton from "@/components/shared/AppButton";
import AppIcon from "@/components/shared/AppIcon";
import AppModal from "@/components/shared/AppModal";
import React from "react";
import PostItemShare from "./PostItemShare";
import PostItemSave from "./PostItemSave";

export default function PostItemFooter({ saveOption = false }) {
  return (
    <div className="flex justify-between">
      <AppButton
        title="post stars"
        className="flex items-center gap-2 text-gray-1"
      >
        <AppIcon icon="star-outline" className="text-gray-1" width="24" />5
      </AppButton>
      <AppButton
        title="post comments"
        className="flex items-center gap-2 text-gray-1"
      >
        <AppIcon icon="comments-dots" className="text-gray-1" width="24" />5
      </AppButton>
      {saveOption && (
        <AppModal
          activator={
            <AppButton
              title="savepost"
              className="flex items-center gap-2 text-gray-1"
            >
              <AppIcon icon="save" className="text-gray-1" width="24" />
            </AppButton>
          }
          className="rounded-2xl h-fit ml-auto"
        >
          <PostItemSave />
        </AppModal>
      )}
      <AppModal
        activator={
          <AppButton
            title="sharepost"
            className="flex items-center gap-2 text-gray-1"
          >
            <AppIcon icon="share-box" className="text-gray-1" width="24" />
          </AppButton>
        }
        className="rounded-2xl h-fit ml-auto"
      >
        <PostItemShare />
      </AppModal>
    </div>
  );
}
