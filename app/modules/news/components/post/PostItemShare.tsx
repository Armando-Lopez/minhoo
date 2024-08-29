import AppButton from "@/components/shared/AppButton";
import Image from "next/image";
import React from "react";

export default function PostItemShare() {
  return (
    <div className="w-96 pt-8 px-4 rounded-xl">
      <p className="mb-8 text-center text-lg font-semibold">
        Share publication
      </p>
      <div className="flex gap-3">
        <Image
          src="/team/wildelmy-colina.jpg"
          width="64"
          height="64"
          alt=""
          className="object-cover h-16"
        />
        <p>
          We are a branding, design and creative agency. As a branding
          specialist, we transform...
        </p>
      </div>
      <AppButton
        title="copyurl"
        className="py-2 border-radius-40 border border-gray-2 w-full mt-8 mb-14"
      >
        Copy Url
      </AppButton>
    </div>
  );
}
