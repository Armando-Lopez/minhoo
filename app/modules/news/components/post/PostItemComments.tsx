import AppIcon from "@/components/shared/AppIcon";
import Image from "next/image";
import React from "react";

export default function PostItemComments() {
  return (
    <div className="flex flex-col w-full">
      <div className="overflow-auto flex flex-grow flex-col gap-6 max-h-52 mb-10">
        <div className="flex gap-4 text-sm">
          <Image
            src="/team/wildelmy-colina.jpg"
            alt=""
            className="rounded-full"
            width={56}
            height={56}
          />
          <div>
            <div>
              <strong>sandra delgado</strong>-
              <span className="text-gray-1">1m</span>
            </div>
            <p>I’m interested! 🤯🤯🤯</p>
          </div>
          <button className="flex flex-col ml-auto items-center text-gray-1">
            <AppIcon icon="star-outline" width="25" />
            <span>8</span>
          </button>
        </div>
        <div className="flex gap-4 text-sm">
          <Image
            src="/team/wildelmy-colina.jpg"
            alt=""
            className="rounded-full"
            width={56}
            height={56}
          />
          <div>
            <div>
              <strong>stefysorca</strong>-
              <span className="text-gray-1">1m</span>
            </div>
            <p>🚀🚀🚀🚀</p>
          </div>
          <button className="flex flex-col ml-auto items-center text-gray-1">
            <AppIcon icon="star-outline" width="25" />
            <span>3</span>
          </button>
        </div>
      </div>
      <div className="overflow-hidden flex items-center py-1 px-2 mt-auto border-2 border-grey-1 rounded-lg mb-4">
        <Image
          src="/team/wildelmy-colina.jpg"
          alt=""
          className="rounded-full"
          width={32}
          height={32}
        />
        <textarea
          name="add-comment"
          rows={1}
          placeholder="Write a comment"
          className="w-full h-full border-none focus:border-none appearance-none focus:outline-transparent focus:ring-transparent resize-none placeholder:text-gray-1"
        ></textarea>
      </div>
    </div>
  );
}
