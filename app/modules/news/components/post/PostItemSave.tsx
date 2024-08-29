import { Button } from "@/components/shared/ui/button";
import AppIcon from "@/components/shared/AppIcon";
import Image from "next/image";
import React from "react";

export default function PostItemSave() {
  return (
    <div className="w-96 pt-8 px-4 rounded-xl">
      <p className="mb-8 text-center text-lg font-semibold">
        Saved publication
      </p>
      <div className="flex gap-1 items-center justify-between mb-14">
        <Image
          src="/team/wildelmy-colina.jpg"
          width="64"
          height="64"
          alt="Image Post"
          className="object-cover h-16"
        />
        <p className="pl-4">
          We are a branding, design and creative agency. As a branding
          specialist
        </p>
        <Button
          title="savepost"
          className="flex items-center gap-2 text-gray-1 p-0"
          variant="ghost"
        >
          <AppIcon icon="save" className="text-gray-1" width="24" />
        </Button>
      </div>
    </div>
  );
}
