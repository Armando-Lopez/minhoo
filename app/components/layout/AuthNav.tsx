"use client";

import { Input } from "@/components/shared/ui/input";
import React, { useState } from "react";
import AppIcon from "@/components/shared/AppIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AuthNavOptions } from "@/components/layout/AuthNavOptions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/ui/dialog";
import { Textarea } from "@/components/shared/ui/textarea";
import { Avatar, AvatarImage } from "@/components/shared/ui/avatar";
import { Button } from "@/components/shared/ui/button";

export default function AuthNav() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const pathname = usePathname();

  // FIXME: ESTO NO VA A AQUI. MOVER A COMPONENTE
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.files) {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setImageLoaded(true);
      const preview = document.getElementById("preview") as HTMLImageElement;
      if (preview) {
        preview.src = url;
      }
      const deleteButton = document.getElementById("delete-button");
      if (deleteButton) {
        deleteButton.style.display = "grid";
      }
    }
  };

  // FIXME: ESTO NO VA A AQUI. MOVER A COMPONENTE
  const handleDelete = () => {
    const preview = document.getElementById("preview") as HTMLImageElement;
    if (preview) {
      preview.src = "";
    }
    const input = document.getElementById("picture") as HTMLInputElement;
    if (input) {
      input.value = "";
    }
    const deleteButton = document.getElementById("delete-button");
    if (deleteButton) {
      deleteButton.style.display = "none";
      setImageLoaded(false);
    }
  };

  const getPathColor = (path: string) =>
    pathname.includes(path) ? "text-primary-1 fill-primary-1" : "text-gray-1 fill-gray-1"; 

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
            <AppIcon icon="minhoo" width="29" className={getPathColor("/app/offer-services")} />
            <span className="text-gray-1"> Offer services </span>
          </Link>
        </li>
        <li>
          <Link href="/app/chat" className="flex items-center gap-4">
            <AppIcon icon="chat" width="25" height="30" className={getPathColor("/app/chat")}/>
            <span className="text-gray-1"> Chat </span>
          </Link>
        </li>
        <li>
          <Link href="/app/notifications" className="flex items-center gap-4">
            <AppIcon icon="notification" width="25" className={getPathColor("/app/notifications")} />
            <span className="text-gray-1"> Notifications </span>
          </Link>
        </li>
        <li>
          <Link
            href="/app/profile"
            className="flex items-center gap-4"
          >
            <AppIcon icon="minhoo-profile" className={getPathColor("/app/profile")} width="30" />
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
                        <AvatarImage src="/app/team/wildelmy-colina.jpg"></AvatarImage>
                      </Avatar>
                      <Textarea
                        placeholder="What do you want to show us?"
                        className="bg-black-1 border-none ring-transparent focus:ring-transparent focus:border-none"
                      />
                    </div>
                    <div className="grid w-full items-center overflow-hidden gap-5 mt-5 relative">
                      {imageLoaded && (
                        <img id="preview" src={imageUrl} alt="Preview" />
                      )}
                      <Input
                        type="file"
                        id="picture"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <div className="flex justify-between">
                        <Button
                          onClick={() =>
                            document.getElementById("picture")?.click()
                          }
                          className="bg-transparent text-white w-fit hover:bg-transparent"
                        >
                          <AppIcon
                            icon="picture"
                            width="20"
                            height="20"
                            className="text-primary-1"
                          />
                          <p className="pl-2">Image</p>
                        </Button>
                        <Button className="bg-transparent rounded-full text-white opacity-40">
                          Publish
                        </Button>
                      </div>
                      <div
                        id="delete-button"
                        onClick={handleDelete}
                        className="hidden absolute -top-6 -right-6 w-16 h-16 bg-black-1 rounded-full items-end p-2.5 cursor-pointer"
                      >
                        <AppIcon icon="close" width="28" className="" />
                      </div>
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
