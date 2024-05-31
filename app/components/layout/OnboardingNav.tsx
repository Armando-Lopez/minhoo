"use client";

import React, { useRef } from "react";
import AppIcon from "@/components/shared/AppIcon";
import Link from "next/link";

export default function OnboardingNav() {
  const drawerActivator = useRef<HTMLInputElement>(null);

  function closeDrawer() {
    drawerActivator.current?.click();
  }
  return (
    <div>
      <label
        htmlFor="app-drawer"
        className="block h-fit text-black p-3 cursor-pointer"
        title="open menu"
        tabIndex={0}
      >
        <AppIcon icon="menu" width="35" className="mt-1.5" />
      </label>
      <input
        ref={drawerActivator}
        id="app-drawer"
        type="checkbox"
        className="peer hidden"
      />
      <label
        htmlFor="app-drawer"
        className="hidden peer-checked:block bg-gray-900/50 fixed inset-0 z-30"
      ></label>
      <div
        className="fixed top-0 right-0 z-40 h-screen px-11 pt-8 overflow-y-auto transition-transform translate-x-full peer-checked:translate-x-0 bg-white w-11/12 md:w-[29%] xl:w-3/12"
        tabIndex={-1}
      >
        <label
          htmlFor="app-drawer"
          className="absolute top-5 end-[27px] inline-flex items-center justify-center cursor-pointer"
          title="close menu"
          tabIndex={0}
        >
          <AppIcon icon="close" width="35" className="translate-y-1" />
        </label>
        <span className="[&_path]:stroke-primary-1">
          {/* <app-minhoo-icon width="39" /> */}
        </span>
        <nav className="pt-14 pb-14 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li className="py-1.5">
              <Link
                href="/"
                title="Home"
                aria-label="app-drawer"
                onClick={closeDrawer}
              >
                Home
              </Link>
            </li>
            <li className="py-1.5">
              <Link href="/we" title="We" onClick={closeDrawer}>
                We
              </Link>
            </li>
            <li className="py-1.5">
              <Link href="/team" title="Team" onClick={closeDrawer}>
                Team
              </Link>
            </li>
            <li className="py-1.5">
              <Link href="/community" title="Community" onClick={closeDrawer}>
                Community
              </Link>
            </li>
            <li className="py-1.5">
              <Link href="/subscription" title="Pre-Sell" onClick={closeDrawer}>
                Pre-Sell
              </Link>
            </li>
            <li className="py-1.5">
              <Link
                href="/advertising-with-us"
                title="Advertising with us"
                onClick={closeDrawer}
              >
                Advertising with us
              </Link>
            </li>
            <li className="py-1.5">
              <Link
                href="/be-part-of-our-team"
                title="Be part of our team"
                onClick={closeDrawer}
              >
                Be part of our team
              </Link>
            </li>
            <li className="py-1.5">
              <Link href="/contact" title="Contact us" onClick={closeDrawer}>
                Contact us
              </Link>
            </li>
            <li className="py-1.5">
              <Link href="/api" title="API" onClick={closeDrawer}>
                API
              </Link>
            </li>
            <li className="py-1.5">
              <Link
                href="/terms-and-conditions"
                title="Privacy, terms and conditions"
                onClick={closeDrawer}
              >
                Privacy, terms and conditions
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
