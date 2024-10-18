import React from "react";
import { Root as VisuallyHidden } from "@radix-ui/react-visually-hidden";
import PostItemHeader from "./PostItemHeader";
import PostItemFooter from "./PostItemFooter";
import PostItemDetails from "./PostItemDetails";
import Image from "next/image";
import AppShowMoreToggle from "@/components/shared/AppShowMoreToggle";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "@/components/shared/ui/dialog";
export default function PostItem() {
  return (
    <div>
      <PostItemHeader />
      <div>
        <AppShowMoreToggle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore natus
          odio atque dolores, facilis quibusdam eius est cum aut optio dicta.
          Quisquam praesentium consectetur architecto excepturi natus ex.
          Ducimus, quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Tempore natus odio atque dolores, facilis quibusdam eius est cum
          aut optio dicta. Quisquam praesentium consectetur architecto excepturi
          natus ex. Ducimus, quisquam.
        </AppShowMoreToggle>
        <div className="relative mt-2">
          <Dialog>
            <DialogTrigger asChild>
              <Image
                src="/api/img.png"
                className="w-full rounded-2xl cursor-pointer"
                width="300"
                height="400"
                alt="post-name"
              />
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <VisuallyHidden>
                  <DialogTitle>Post Name</DialogTitle>
                  <DialogDescription>Post Name</DialogDescription>
                </VisuallyHidden>
              </DialogHeader>
              <PostItemDetails />
            </DialogContent>
          </Dialog>
        </div>
        <div className="mt-5">
          <PostItemFooter />
        </div>
      </div>
    </div>
  );
}
