"use client";

import { Input } from "@/components/shared/ui/AppInput";
import React from "react";
import AppIcon from "@/components/shared/AppIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AuthNavOptions } from "@/components/layout/AuthNavOptions";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/ui/dialog";
import { Textarea } from "../shared/ui/textarea";
import { Avatar, AvatarImage } from "../shared/ui/avatar";
import { Label } from "../shared/ui/label";

export default function AuthNav() {
  const pathname = usePathname();

  const getPathColor = (path: string) =>
    pathname.includes(path) ? "text-primary-1" : "";

  return (
    <nav className="flex-grow flex flex-col pb-5">
      <ul className="flex-grow flex flex-col gap-7 text-gray-1">
        <li>
          <Link
            href="/news"
            className={`flex items-center gap-4 ${
              getPathColor("/news") || getPathColor("/directory")
            }`}
          >
            <AppIcon icon="home" width="23" />
            <span className="text-gray-1"> Home </span>
          </Link>
        </li>
        <li>
          <Link
            href="/request-a-service"
            className={`flex items-center gap-4 ${getPathColor(
              "/request-a-service"
            )}`}
          >
            <AppIcon icon="handshake" width="29" />
            <span className="text-gray-1"> Request services </span>
          </Link>
        </li>
        <li>
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/icon/minhoo.svg"
              alt="icon minhoo"
              width="27"
              height="27"
            />
            <span className="text-gray-1"> Offer services </span>
          </Link>
        </li>
        <li>
          <Link href="/chat" className="flex items-center gap-4">
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
          <Link
            href="/profile"
            className={`flex items-center gap-4 ${getPathColor("/profile")}`}
          >
            <AppIcon icon="profile" width="25" />
            <span className="text-gray-1"> Profile </span>
          </Link>
        </li>
        <li>
          <Dialog>
            <DialogTrigger>
              <div className="py-2.5 rounded-xl flex items-center justify-center gap-2 w-48 bg-primary-1 text-black-1 font-bold">
                <AppIcon icon="plus" width="20" height="20" />
                <p>Create</p>
              </div>
            </DialogTrigger>
            <DialogContent className="bg-black-1 border-radius-20 text-gray-150 p-0">
              <DialogHeader>
                <DialogTitle className="text-lg font-medium px-6 border-b border-b-gray-150 py-3">
                  New publication
                </DialogTitle>
                <DialogDescription
                  asChild
                  className="px-6 pt-3 pb-5 text-gray-150"
                >
                  <div>
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarImage src="/team/wildelmy-colina.jpg"></AvatarImage>
                      </Avatar>
                      <Textarea
                        placeholder="What do you want to show us?"
                        className="bg-black-1 border-none ring-transparent focus:ring-transparent focus:border-none"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="picture"></Label>
                      <Input id="picture" type="file" />
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </li>
      </ul>
      <div className="mt-auto">
        <AuthNavOptions />
      </div>
    </nav>
  );
}
