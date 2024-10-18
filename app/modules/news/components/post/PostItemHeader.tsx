import { Root as VisuallyHidden } from "@radix-ui/react-visually-hidden";
import AppButton from "@/components/shared/AppButton";
import AppIcon from "@/components/shared/AppIcon";
import React from "react";
import Link from "next/link";
import PostItemOptions from "./PostItemOptions";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/ui/dialog";

export default function PostItemHeader() {
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
        <span className="text-gray-1">2 hours ago</span>
        <AppButton
          title="follow"
          className="w-fit px-3 rounded-md bg-primary-1 text-sm text-white"
        >
          Follow
        </AppButton>
      </div>
      <div className="ml-auto">
        <Dialog>
          <DialogTrigger>
            <AppIcon icon="vertical-dots" width="30" />
          </DialogTrigger>
          <DialogContent className="w-fit p-0 rounded-xl">
            <VisuallyHidden>
              <DialogTitle>Post Options</DialogTitle>
              <DialogDescription>Post Options</DialogDescription>
            </VisuallyHidden>
            <PostItemOptions />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
