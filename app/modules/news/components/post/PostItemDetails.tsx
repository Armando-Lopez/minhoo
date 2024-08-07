import React from "react";
import PostItemHeader from "./PostItemHeader";
import PostItemFooter from "./PostItemFooter";
import AppModal from "@/components/shared/AppModal";
import PostItemOptions from "./PostItemOptions";
import AppButton from "@/components/shared/AppButton";
import AppIcon from "@/components/shared/AppIcon";
import PostItemComments from "./PostItemComments";

export default function PostItemDetails() {
  return (
    <article className="flex">
      <img src="https://placehold.co/466x580" alt="" />
      <div className="flex flex-col max-w-96 ml-7 mr-16 py-9">
        <div className="flex">
          <PostItemHeader />
          <AppModal
            activator={
              <AppButton title="post options" className="mb-auto ml-7">
                <AppIcon icon="vertical-dots" width="30" />
              </AppButton>
            }
            className="rounded-2xl"
          >
            <PostItemOptions />
          </AppModal>
        </div>
        <p>
          We are a branding, design and creative agency. As a branding
          specialist, we transform creative lorem ipsum imdor amet setor.
        </p>
        <div className="my-5">
          <PostItemFooter />
        </div>
        <PostItemComments />
        {/* <app-post-item-comments className="flex w-full flex-grow" /> */}
      </div>
    </article>
  );
}
