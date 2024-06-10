"use client";
import React, { useState } from "react";
import AppIcon from "../shared/AppIcon";
import AppPopover from "@/components/shared/AppPopover";
import AppSwitch from "@/components/shared/form/AppSwitch";
import { useNotifications } from "@/hooks/useNotifications";
import AppButton from "@/components/shared/AppButton";
import { usePathname } from "next/navigation";

export default function AuthNav() {
  const pathname = usePathname();

  const isHome = pathname.includes("/home");

  const notifications = useNotifications();

  const [allowNotifications, setAllowNotifications] = useState(
    notifications.hasPermission
  );

  function activateNotifications(value: boolean) {
    setAllowNotifications(value);
    if (value) {
      notifications.activateNotifications(true);
    }
  }

  return (
    <nav className="flex-grow flex flex-col pl-4 pb-5">
      <ul className="flex-grow flex flex-col gap-7 text-gray-1">
        <li>
          <a
            href="/"
            className={`flex items-center gap-4 ${
              isHome ? "text-primary-1" : ""
            }`}
          >
            <AppIcon icon="home" width="25" />
            <span className="text-gray-1"> Home </span>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-4">
            <AppIcon icon="handshake" width="27" height="23" className="mt-1" />
            <span className="text-gray-1"> Request services </span>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-4">
            {/* <app-minhoo-icon /> */}
            <span className="text-gray-1"> Offer services </span>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-4">
            <AppIcon icon="chat" width="25" height="30" />
            <span className="text-gray-1"> Chat </span>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-4">
            <AppIcon icon="notification" width="25" />
            <span className="text-gray-1"> Notifications </span>
          </a>
        </li>
        <li>
          <a href="/" className="flex items-center gap-4">
            <AppIcon icon="profile" width="25" className="translate-y-1" />
            <span className="text-gray-1"> Profile </span>
          </a>
        </li>
        <li>
          <AppButton
            id="create-post"
            name="create post"
            className="app-button app-button--primary flex items-center justify-center gap-2 w-48 text-black-1"
          >
            <AppIcon
              icon="plus"
              width="20"
              height="20"
              className="translate-y-1"
            />
            Create
          </AppButton>
        </li>
      </ul>
      <div className="mt-auto">
        <AppPopover
          placement="top-end"
          content={
            <div className="bg-gray-150 px-5 py-9 w-96">
              <ul className="flex gap-4 flex-col">
                <li className="flex gap-3">
                  <AppIcon
                    icon="notification"
                    className="text-primary-1"
                    width="25"
                  />
                  <div>
                    <p>Minhoo notifications</p>
                    <p className="text-xs text-gray-1">
                      Turn {allowNotifications ? "off" : "on"} incoming order
                      notifications
                    </p>
                  </div>
                  <div className="ml-auto">
                    <AppSwitch
                      id="allow-notifications-check"
                      checked={allowNotifications}
                      onChange={(val) => activateNotifications(val)}
                    />
                  </div>
                </li>
                <li className="flex gap-3">
                  <AppIcon icon="share" className="text-primary-1" width="25" />
                  <p>Share profile</p>
                </li>
                <li className="flex gap-3">
                  <AppIcon
                    icon="book-mark"
                    className="text-primary-1"
                    width="25"
                  />
                  <p>Saved</p>
                </li>
                <li className="flex gap-3">
                  <AppIcon
                    icon="settings"
                    className="text-primary-1"
                    width="25"
                  />
                  <div>
                    <p>Settings</p>
                    <p className="text-xs text-gray-1">
                      Account, wallet, help, about, language and more
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          }
        >
          <AppButton
            name="more options"
            id="more-options"
            className="app-button flex items-center gap-3 text-gray-1"
          >
            <AppIcon icon="menu" width="32" className="translate-y-1" />
            More
          </AppButton>
        </AppPopover>
      </div>
    </nav>
  );
}
