"use client";
import AppIcon from "@/components/shared/AppIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SettingsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid grid-cols-12 col-span-9 grid-rows-12 min-h-dvh">
      <div className="col-span-6 row-span-1 border-b border-gray-2 flex items-center pb-4 pt-9 justify-between-between px-8 sticky top-0 bg-white">
        <h2 className="text-lg font-medium">Settings</h2>
      </div>
      <div className="col-span-6 row-span-12 border-l border-gray-2">
        {children}
      </div>
      <div className="col-span-6 row-span-11 border-l border-gray-2 mt-5">
        <ul className="space-y-6">
          <li>
            <Link
              href="/change-passaword"
              className="flex justify-between px-6"
            >
              <div className="flex gap-3 items-center">
                <AppIcon icon="password" className="text-2xl text-primary-1" />
                <p>Change password</p>
              </div>
              <AppIcon icon="arrow-right" width="20" className="text-gray-1" />
            </Link>
          </li>
          <li>
            <Link href="/help" className="flex justify-between px-6">
              <div className="flex gap-3 items-center">
                <AppIcon icon="help" className="text-2xl text-primary-1" />
                <p>Help</p>
              </div>
              <AppIcon icon="arrow-right" width="20" className="text-gray-1" />
            </Link>
          </li>
          <li>
            <Link href="/about-profile" className="flex justify-between px-6">
              <div className="flex gap-3 items-center">
                <AppIcon icon="about" className="text-2xl text-primary-1" />
                <p>About</p>
              </div>
              <AppIcon icon="arrow-right" width="20" className="text-gray-1" />
            </Link>
          </li>
          <li>
            <Link href="/language" className="flex justify-between px-6">
              <div className="flex gap-3 items-center">
                <AppIcon icon="languaje" className="text-2xl text-primary-1" />
                <p>Language</p>
              </div>
              <AppIcon icon="arrow-right" width="20" className="text-gray-1" />
            </Link>
          </li>
          <li>
            <Link href="/blocked" className="flex justify-between px-6">
              <div className="flex gap-3 items-center">
                <AppIcon icon="block" className="text-2xl text-primary-1" />
                <p>Blocked</p>
              </div>
              <AppIcon icon="arrow-right" width="20" className="text-gray-1" />
            </Link>
          </li>
          <li>
            <Link href="/delete-account" className="flex justify-between px-6">
              <div className="flex gap-3 items-center">
                <AppIcon icon="trash" className="text-2xl text-primary-1" />
                <p>Delete account</p>
              </div>
              <AppIcon icon="arrow-right" width="20" className="text-gray-1" />
            </Link>
          </li>
          <li>
            <Link href="/logout" className="flex justify-between px-6">
              <div className="flex gap-3 items-center">
                <AppIcon icon="logout" className="text-2xl text-primary-1" />
                <p>Log out</p>
              </div>
              <AppIcon icon="arrow-right" width="20" className="text-gray-1" />
            </Link>
          </li>
        </ul>
        <div className="flex justify-center">
          <Image
            width="101"
            height="63"
            src="/settings/logo-minhoo.png"
            alt="logo"
            className="absolute bottom-16"
          />
        </div>
      </div>
    </div>
  );
}
