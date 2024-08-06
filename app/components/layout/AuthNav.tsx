"use client";
import React from "react";
import AppIcon from "@/components/shared/AppIcon";
import AppButton from "@/components/shared/AppButton";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AuthNavOptions } from "@/components/layout/AuthNavOptions";

export default function AuthNav() {
  const pathname = usePathname();

  const isHome = pathname.includes("/home");

  return (
    <nav className="flex-grow flex flex-col pl-4 pb-5">
      <ul className="flex-grow flex flex-col gap-7 text-gray-1">
        <li>
          <Link
            href="/home/news"
            className={`flex items-center gap-4 ${
              isHome ? "text-primary-1" : ""
            }`}
          >
            <AppIcon icon="home" width="25" />
            <span className="text-gray-1"> Home </span>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex items-center gap-4">
            <AppIcon icon="handshake" width="27" height="23" className="mt-1" />
            <span className="text-gray-1"> Request services </span>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex items-center gap-4">
            {/* <app-minhoo-icon /> */}
            <span className="text-gray-1"> Offer services </span>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex items-center gap-4">
            <AppIcon icon="chat" width="25" height="30" />
            <span className="text-gray-1"> Chat </span>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex items-center gap-4">
            <AppIcon icon="notification" width="25" />
            <span className="text-gray-1"> Notifications </span>
          </Link>
        </li>
        <li>
          <Link href="/profile" className="flex items-center gap-4">
            <AppIcon icon="profile" width="25" className="translate-y-1" />
            <span className="text-gray-1"> Profile </span>
          </Link>
        </li>
        <li>
          <AppButton
            id="create-post"
            title="create post"
            className="py-2.5 rounded-xl flex items-center justify-center gap-2 w-48 bg-primary-1 text-black-1"
          >
            <AppIcon icon="plus" width="20" height="20" />
            Create
          </AppButton>
        </li>
      </ul>
      <div className="mt-auto">
        <AuthNavOptions />
      </div>
    </nav>
  );
}
