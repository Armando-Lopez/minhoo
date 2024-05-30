"use client";
import React from "react";
import { Icon } from "@iconify/react";

type AppIconProps = {
  icon: string;
  height?: string | number;
  width?: string | number;
  flip?: string;
  className?: string;
}

export default function AppIcon({
  icon,
  width,
  height,
  flip,
  className,
}: AppIconProps) {
  const renderIcon = {
    "book-mark": "mynaui:bookmark",
    "book-mark-fill": "radix-icons:bookmark-filled",
    chat: "tabler:message-circle",
    "comments-dots": "iconamoon:comment-dots-light",
    cross: "maki:cross",
    dots: "arcticons:dots",
    handshake: "fa6-regular:handshake",
    home: "teenyicons:home-solid",
    menu: "ic:round-menu",
    close: "iconamoon:close-duotone",
    notification: "pajamas:notifications",
    facebook: "bxl:facebook",
    instagram: "bi:instagram",
    twitter: "pajamas:twitter",
    tiktok: "ic:outline-tiktok",
    youtube: "mdi:youtube",
    plus: "clarity:plus-line",
    profile: "gg:profile",
    search: "octicon:search-16",
    settings: "eva:settings-2-outline",
    share: "ph:share-fat-bold",
    "share-box": "fluent:share-16-regular",
    "star-outline": "solar:star-outline",
    "vertical-dots": "tabler:dots-vertical",
    play: "solar:play-bold",
    "greater-than": "hugeicons:greater-than",
    "shield": "ic:sharp-shield",
    lock: "mingcute:lock-fill",
  }[icon] as string;

  return (
    <Icon
      icon={renderIcon}
      width={width}
      height={height}
      flip={flip}
      className={className}
    />
  );
}
