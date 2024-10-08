import { AppLink } from "@/components/shared/ui/AppLink";
import React from "react";

export default function chatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh grid grid-cols-12 grid-rows-12">
      <div className="col-span-6 row-span-1 right-1 grid grid-cols-2 mt-10 justify-between">
        <AppLink
          href="/chat"
          className="w-full text-center border-b-2 border-transparent"
          activeClass="border-primary-1"
        >
          Chat
        </AppLink>
        <AppLink
          href="/my-shifts"
          className="w-full text-center border-b-2 border-transparent"
          activeClass="border-primary-1"
        >
          My shifts
        </AppLink>
      </div>
      {children}
    </div>
  );
}
