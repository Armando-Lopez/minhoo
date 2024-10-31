"use client";

import React from "react";
import AppIcon from "@/components/shared/AppIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AuthNavOptions } from "@/components/layout/AuthNavOptions";
import { AddPostModal } from "@/modules/news/components/post/AddPost";

export default function AuthNav() {
  const pathname = usePathname();

  const getPathColor = (path: string) =>
    pathname.includes(path)
      ? "text-primary-1 fill-primary-1"
      : "text-gray-1 fill-gray-1";

  return (
    <nav className="flex-grow flex flex-col pb-5">
      <ul className="flex-grow flex flex-col gap-7 text-gray-1">
        <li>
          <Link
            href="/app/news"
            className={`flex items-center gap-4 ${
              getPathColor("/app/news") || getPathColor("/app/directory")
            }`}
          >
            <AppIcon icon="home" width="23" />
            <span className="text-gray-1"> Home </span>
          </Link>
        </li>
        <li>
          <Link
            href="/app/request-a-service"
            className={`flex items-center gap-4 ${getPathColor(
              "/app/request-a-service"
            )}`}
          >
            <AppIcon icon="handshake" width="29" />
            <span className="text-gray-1"> Request services </span>
          </Link>
        </li>
        <li>
          <Link href="/app/offer-services" className="flex items-center gap-4">
            <AppIcon
              icon="minhoo"
              width="29"
              className={getPathColor("/app/offer-services")}
            />
            <span className="text-gray-1"> Offer services </span>
          </Link>
        </li>
        <li>
          <Link href="/app/chat" className="flex items-center gap-4">
            <AppIcon
              icon="chat"
              width="25"
              height="30"
              className={getPathColor("/app/chat")}
            />
            <span className="text-gray-1"> Chat </span>
          </Link>
        </li>
        <li>
          <Link href="/app/notifications" className="flex items-center gap-4">
            <AppIcon
              icon="notification"
              width="25"
              className={getPathColor("/app/notifications")}
            />
            <span className="text-gray-1"> Notifications </span>
          </Link>
        </li>
        <li>
          <Link href="/app/profile" className="flex items-center gap-4">
            <AppIcon
              icon="minhoo-profile"
              className={getPathColor("/app/profile")}
              width="30"
            />
            <span className="text-gray-1"> Profile </span>
          </Link>
        </li>
        <li>
          <AddPostModal />
        </li>
      </ul>
      <div className="mt-auto">
        <AuthNavOptions />
      </div>
    </nav>
  );
}
