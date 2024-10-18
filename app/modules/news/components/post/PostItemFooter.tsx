import AppButton from "@/components/shared/AppButton";
import AppIcon from "@/components/shared/AppIcon";
import React from "react";
import PostItemShare from "./PostItemShare";
import PostItemSave from "./PostItemSave";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/ui/dialog";
import { Root as VisuallyHidden } from "@radix-ui/react-visually-hidden";

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
        <Dialog>
          <DialogTrigger>
            <AppIcon icon="save" className="text-gray-1" width="24" />
          </DialogTrigger>
          <DialogContent className="w-fit p-0 rounded-xl">
            <VisuallyHidden>
              <DialogTitle>Save Post</DialogTitle>
              <DialogDescription>Save Post</DialogDescription>
            </VisuallyHidden>
            <PostItemSave />
          </DialogContent>
        </Dialog>
      )}
      <Dialog>
        <DialogTrigger>
          <AppIcon icon="share-box" className="text-gray-1" width="24" />
        </DialogTrigger>
        <DialogContent className="w-fit p-0 rounded-xl">
          <VisuallyHidden>
            <DialogTitle>Share Post</DialogTitle>
            <DialogDescription>Share Post</DialogDescription>
          </VisuallyHidden>
          <PostItemShare />
        </DialogContent>
      </Dialog>
    </div>
  );
}
