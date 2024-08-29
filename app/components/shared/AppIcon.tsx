"use client";
import React from "react";
import { Icon } from "@iconify/react";

const icons = {
  "arrow-down": "oui:arrow-down",
  "arrow-right": "oui:arrow-right",
  "book-mark-fill": "radix-icons:bookmark-filled",
  "book-mark": "mynaui:bookmark",
  "check-circle": "gg:check-o",
  "comments-dots": "iconamoon:comment-dots-light",
  "dollar": "cil:dollar",
  "greater-than": "oui:arrow-up",
  "share-box": "fluent:share-16-regular",
  "star-fill": "solar:star-bold",
  "star-outline": "solar:star-outline",
  "user-hand-up": "solar:user-hand-up-bold",
  "user-plus": "uil:user-plus",
  "vertical-dots": "tabler:dots-vertical",
  back: "ic:round-arrow-back-ios",
  building: "ph:building-duotone",
  chat: "tabler:message-circle",
  close: "iconamoon:close-duotone",
  cross: "maki:cross",
  dots: "arcticons:dots",
  facebook: "bxl:facebook",
  gears: "carbon:gears",
  handshake: "fa-regular:handshake",
  home: "teenyicons:home-solid",
  instagram: "bi:instagram",
  laptop: "icon-park-twotone:laptop-computer",
  location: "ep:location",
  lock: "mingcute:lock-fill",
  menu: "ic:round-menu",
  notification: "pajamas:notifications",
  picture: "mingcute:pic-line",
  play: "solar:play-bold",
  plus: "clarity:plus-line",
  profile: "gg:profile",
  save: "material-symbols-light:sync-saved-locally-outline-rounded",
  search: "octicon:search-16",
  settings: "eva:settings-2-outline",
  share: "ph:share-fat-bold",
  shield: "material-symbols:policy",
  tiktok: "ic:outline-tiktok",
  twitter: "pajamas:twitter",
  youtube: "mdi:youtube",
  clock: "iconoir:clock",
  history: "solar:history-outline",
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
