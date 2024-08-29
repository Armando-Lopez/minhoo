import React from "react";
import PostItemHeader from "./PostItemHeader";
import PostItemFooter from "./PostItemFooter";
import AppModal from "@/components/shared/AppModal";
import PostItemDetails from "./PostItemDetails";
import Image from "next/image";
import AppShowMoreToggle from "@/components/shared/AppShowMoreToggle";

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
          <AppModal
            activator={
              <Image
                src="/api/img.png"
                className="w-full rounded-2xl cursor-pointer"
                width="300"
                height="400"
                alt="post-name"
              />
            }
            keepAlive
          >
            <PostItemDetails />
          </AppModal>
        </div>
        <div className="mt-5">
          <PostItemFooter />
        </div>
      </div>
    </div>
  );
}
