"use client";
import { Notifications } from "@/modules/notifications/components/Notifications";
import React from "react";

export default function RequestServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="grid grid-cols-12 col-span-9 grid-rows-12 min-h-dvh">
        <div className="col-span-7 row-span-1 border-b border-gray-2  pb-4 pt-9  px-8 sticky top-0 bg-white">
          <h2 className="text-lg font-medium">Notifications</h2>
        </div>
        <div className="col-span-5 row-span-12 border-l border-gray-2">
          <Notifications />
        </div>
        <div className="col-span-7 row-span-11 border-l border-gray-2">
          {children}
        </div>
      </div>
    </>
  );
}
