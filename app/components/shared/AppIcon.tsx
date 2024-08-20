"use client";
import React from "react";
import { Icon } from "@iconify/react";

const icons = {
  "arrow-right": "oui:arrow-right",
  "arrow-down": "oui:arrow-down",
  "book-mark-fill": "radix-icons:bookmark-filled",
  "book-mark": "mynaui:bookmark",
  "check-circle": "gg:check-o",
  "comments-dots": "iconamoon:comment-dots-light",
  "greater-than": "oui:arrow-up",
  "share-box": "fluent:share-16-regular",
  "star-fill": "solar:star-bold",
  "star-outline": "solar:star-outline",
  "vertical-dots": "tabler:dots-vertical",
  back: "ic:round-arrow-back-ios",
  chat: "tabler:message-circle",
  close: "iconamoon:close-duotone",
  cross: "maki:cross",
  dots: "arcticons:dots",
  facebook: "bxl:facebook",
  handshake: "fa6-regular:handshake",
  home: "teenyicons:home-solid",
  instagram: "bi:instagram",
  lock: "mingcute:lock-fill",
  menu: "ic:round-menu",
  notification: "pajamas:notifications",
  play: "solar:play-bold",
  plus: "clarity:plus-line",
  profile: "gg:profile",
  search: "octicon:search-16",
  settings: "eva:settings-2-outline",
  share: "ph:share-fat-bold",
  shield: "material-symbols:policy",
  tiktok: "ic:outline-tiktok",
  twitter: "pajamas:twitter",
  youtube: "mdi:youtube",
  location: "ep:location",
  gears: "carbon:gears",
}
export default function AppIcon({
  icon,
  width,
  height,
  flip,
  rotate,
  className,
}: Readonly<AppIconProps>) {
  return (
    <Icon
      icon={icons[icon]}
      width={width}
      height={height}
      flip={flip}
      rotate={rotate}
      className={className}
    />
  );
}


interface AppIconProps {
  icon: keyof typeof icons;
  height?: string | number;
  width?: string | number;
  flip?: string;
  rotate?: number;
  className?: string;
}
