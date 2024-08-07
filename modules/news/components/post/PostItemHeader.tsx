import AppButton from "@components/shared/AppButton";
import AppIcon from "@components/shared/AppIcon";
import React from "react";
import Link from "next/link";

export default function PostItemHeader() {
  return (
    <div className="flex items-cene gap-4 mb-6">
      <Link href="/profile">
        <img
          src="https://placehold.co/51x51"
          className="w-12 h-12 rounded-full"
          alt="user-name"
        />
      </Link>
      <div className="flex flex-col gap-1">
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
      <AppButton title="contract service" className="h-fit ml-auto">
        <AppIcon icon="handshake" width="35" className="mt-1 text-primary-1" />
      </AppButton>
    </div>
  );
}
