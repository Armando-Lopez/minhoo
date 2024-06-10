import AuthNav from "@/components/layout/AuthNav";
import React from "react";
import Image from "next/image";

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-dvh overflow-hidden bg-gray-170">
      <div className="container flex-grow grid grid-cols-12">
        <div className="col-span-3 h-full flex flex-col border-r border-r-gray-1/50">
          <header className="mb-8 pt-4">
            <Image
              width={101}
              height={24}
              src="/minhoo-horizontal-logo.png"
              alt="minhoo horizontal logo"
            />
          </header>
          <AuthNav />
        </div>
        <div className="col-span-9 pt-4">
          {children}
        </div>
      </div>
    </div>
  );
}
