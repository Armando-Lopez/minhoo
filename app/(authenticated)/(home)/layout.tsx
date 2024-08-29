"use client";

import React from "react";
import Footer from "@/components/layout/Footer";
import AppIcon from "@/components/shared/AppIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isInNewsPage = pathname.includes("news");
  const isInDirectoryPage = pathname.includes("directory");
  const profile = [
    {
      img: "/team/miller-garcía.jpg",
      name: "Miller García",
      profession: "Handyman, Virtual & Online",
    },
  ];
  const notifications = [
    {
      img: "/team/wildelmy-colina.jpg",
      name: "Wildelmy Colina",
      sms: "He has accepted your job offer",
    },
    {
      img: "/team/miller-garcía.jpg",
      name: "Miller García",
      sms: "has saved your post.",
    },
    {
      img: "/team/eder-oquendo.jpg",
      name: "Eder Oquendo",
      sms: "commented: I want your services, I sent you a message",
    },
    {
      img: "/team/mila.jpg",
      name: "Camila Casarri",
      sms: "He has accepted your job offer",
    },
  ];

  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-7 h-dvh hide-scroll-bar overflow-auto border-r border-r-gray-1/50">
        <div className="pt-5 sticky top-0 bg-white z-10 flex justify-between items-center px-12 pb-3 border-b border-b-gray-1/50">
          <Link href="news" className="flex items-center gap-2">
            <div
              className={`grid place-items-center w-10 h-10 rounded-full ${
                isInNewsPage ? "bg-primary-1" : ""
              } `}
            >
              <AppIcon icon="dots" width="24" className="text-black-1" />
            </div>
            <span
              className={`font-semibold ${
                isInNewsPage ? "text-primary-1" : "text-black-1"
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
              <AppIcon icon="menu" width="24" className="text-black-1" />
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
      <div className="col-span-5 px-4 pt-5">
        <div className="mb-5">
          {profile.map((e, i) => (
            <div key={i} className="flex gap-3">
              <Image
                width="40"
                height="40"
                className="h-10 rounded-full"
                src={e.img}
                alt="Photo Profile"
              />
              <div className="leading-5">
                <p className="font-bold">{e.name}</p>
                <p className="text-gray-3">{e.profession}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="font-bold text-gray-1">Latest notifications</p>
        {notifications.map((e, i) => (
          <div key={i} className="py-3">
            <div className="flex gap-3">
              <Image
                width="40"
                height="40"
                className="h-10 rounded-full"
                src={e.img}
                alt="Photo Profile"
              />
              <div className="leading-5">
                <p className="font-bold">{e.name}</p>
                <p className="text-gray-3">{e.sms}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="flex gap-3 text-gray-3 items-center">
          <p>See all</p>
          <AppIcon icon="arrow-right" width="17" className="font-bold" />
        </div>
        <Footer className="flex flex-wrap gap-2 pb-3 mt-10 text-gray-1 text-xs" />
      </div>
    </div>
  );
}
