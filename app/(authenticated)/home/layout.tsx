"use client";

import React from "react";
import Footer from "@/components/layout/Footer";
import AppIcon from "@/components/shared/AppIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isInNewsPage = pathname.includes("news");
  const isInDirectoryPage = pathname.includes("directory");

  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-7 px-7 border-r border-r-gray-1/50">
        <div className="flex justify-between items-center">
          <Link href="news" className="flex items-center gap-2">
            <div
              className={`grid place-items-center w-10 h-10 rounded-full ${
                isInNewsPage ? "bg-primary-1" : ""
              } `}
            >
              <AppIcon icon="dots" width="25" className="text-black-1" />
            </div>
            <span
              className={`font-semibold ${
                isInNewsPage ? "text-primary-1" : ""
              }`}
            >
              News
            </span>
          </Link>
          <span className="block w-0.5 h-6 bg-gray-1" />
          <Link href="directory" className="flex items-center gap-2">
            <div
              className={`grid place-items-center w-10 h-10 rounded-full ${
                isInDirectoryPage ? "bg-primary-1" : ""
              } `}
            >
              <AppIcon icon="menu" width="25" className="text-black-1" />
            </div>
            <span
              className={`font-semibold ${
                isInDirectoryPage ? "text-primary-1" : ""
              }`}
            >
              Directory
            </span>
          </Link>
        </div>
        <main>{children}</main>
      </div>
      <div className="col-span-5 px-4">
        <Footer className="flex flex-wrap gap-2 pb-3 text-gray-1 text-xs" />
      </div>
    </div>
  );
}
