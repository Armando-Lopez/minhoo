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
          post.description Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Eum veniam maiores perferendis itaque ut blanditiis accusamus,
          totam quas explicabo nostrum! Qui tempore nesciunt placeat aspernatur
          nam tempora deserunt illum quasi. post.description Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Eum veniam maiores perferendis
          itaque ut blanditiis accusamus, totam quas explicabo nostrum! Qui
          tempore nesciunt placeat aspernatur nam tempora deserunt illum quasi.
          post.description Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Eum veniam maiores perferendis itaque ut blanditiis accusamus,
          totam quas explicabo nostrum! Qui tempore nesciunt placeat aspernatur
          nam tempora deserunt illum quasi.
        </AppShowMoreToggle>
        <div className="relative">
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
