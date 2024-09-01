import Link from "next/link";
import React from "react";

export default function chatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh grid grid-cols-12 grid-rows-12">
      <div className="col-span-6 row-span-1 right-1 grid grid-cols-2 mt-12 justify-between">
        <Link href="/chat" className="mx-auto">Chat</Link>
        <Link href="/my-shifts" className="mx-auto">My shifts</Link>
      </div>
      {children}
    </div>
  );
}