import React from "react";
import PostItemHeader from "./PostItemHeader";
import AppIcon from "@/components/shared/AppIcon";
import PostItemFooter from "./PostItemFooter";
import AppModal from "@/components/shared/AppModal";
import PostItemOptions from "./PostItemOptions";
import AppButton from "@/components/shared/AppButton";
import PostItemDetails from "./PostItemDetails";
import Image from "next/image";

export default function PostItem() {
  return (
    <div>
      <PostItemHeader />
      <div>
        <input id="hide-description" type="checkbox" className="hidden peer" />
        <p className="overflow-hidden relative max-h-12 text-ellipsis before:absolute before:bottom-0 before:w-full before:h-1/2 before:bg-gradient-to-t before:from-white before:pointer-events-none peer-checked:max-h-[500vh] peer-checked:before:opacity-0">
          post.description Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Eum veniam maiores perferendis itaque ut blanditiis accusamus,
          totam quas explicabo nostrum! Qui tempore nesciunt placeat aspernatur
          nam tempora deserunt illum quasi.
          post.description Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Eum veniam maiores perferendis itaque ut blanditiis accusamus,
          totam quas explicabo nostrum! Qui tempore nesciunt placeat aspernatur
          nam tempora deserunt illum quasi.
          post.description Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Eum veniam maiores perferendis itaque ut blanditiis accusamus,
          totam quas explicabo nostrum! Qui tempore nesciunt placeat aspernatur
          nam tempora deserunt illum quasi.
        </p>
        <label
          id="view-description"
          htmlFor="hide-description"
          className="text-gray-1 cursor-pointer [&_.less]:hidden peer-checked:[&_.less]:block peer-checked:[&_.more]:hidden"
          tabIndex={0}
        >
          <span className="more"> ...more </span>
          <span className="less"> less </span>
        </label>
        <div className="relative">
          <div className="absolute -right-3 -top-3 w-14 h-14 rounded-full bg-white">
            <div className="absolute top-1/3 left-2">
              <AppModal
                className="rounded-2xl"
                activator={
                  <AppButton title="post options">
                    <AppIcon icon="vertical-dots" rotate={90} width="30" />
                  </AppButton>
                }
                eager
                keepAlive
              >
                <PostItemOptions />
              </AppModal>
            </div>
          </div>
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
