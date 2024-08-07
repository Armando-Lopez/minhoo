"use client";

import React, { useRef } from "react";
import AppIcon from "@components/shared/AppIcon";
import Link from "next/link";

export default function OnboardingNav({ isScrolled }: { isScrolled: boolean }) {
  const drawerActivator = useRef<HTMLInputElement>(null);

  function closeDrawer() {
    drawerActivator.current?.click();
  }
  return (
    <div className={`relative after:content-[''] after:absolute after:top-0 after:w-full after:h-full bg-gray-150`}>
      <label
        htmlFor="app-drawer"
        className={`fixed top-3 md:relative z-50 lg:z-10 right-4 block h-fit text-black p-2 cursor-pointer rounded-full md:rounded-none lg:pb-6 ${
          isScrolled ? `backdrop-blur-[20px] bg-gray-150/80` : "bg-gray-150"
        }`}
        title="open menu"
        tabIndex={0}
      >
        <AppIcon icon="menu" width="35" />
      </label>
      <input
        ref={drawerActivator}
        id="app-drawer"
        type="checkbox"
        className="peer hidden"
      />
      <label
        htmlFor="app-drawer"
        className="hidden peer-checked:block bg-gray-900/20 fixed inset-0 z-30"
      ></label>
      <div
        className="fixed top-0 right-0 z-50 h-screen pt-8 overflow-y-auto transition-transform translate-x-full peer-checked:translate-x-0 bg-gray-150 w-11/12 md:w-[29%] xl:w-3/12"
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
          <img
            src="/onboarding-nav/icon.png"
            alt="minhoo-logo"
            className="pl-11 w-20 -mt-0.5"
          />
        </span>
        <nav className="pt-10 pb-14 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                title="Home"
                aria-label="app-drawer"
                onClick={closeDrawer}
                className="py-2.5 px-11 hover:bg-white w-full block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/we"
                title="We"
                onClick={closeDrawer}
                className="py-2.5 px-11 hover:bg-white w-full block"
              >
                We
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                title="Team"
                onClick={closeDrawer}
                className="py-2.5 px-11 hover:bg-white w-full block"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                title="Community"
                onClick={closeDrawer}
                className="py-2.5 px-11 hover:bg-white w-full block"
              >
                Community
              </Link>
            </li>
            {/* <li>
              <Link
                href="/subscription"
                title="Pre-Sell"
                onClick={closeDrawer}
                className="py-2.5 px-11 hover:bg-white w-full block"
              >
                Pre-Sell
              </Link>
            </li> */}
            <li>
              <Link
                href="/advertising-with-us"
                title="Advertising with us"
                onClick={closeDrawer}
                className="py-2.5 px-11 hover:bg-white w-full block"
              >
                Advertising with us
              </Link>
            </li>
            <li>
              <Link
                href="/be-part-of-our-team"
                title="Be part of our team"
                onClick={closeDrawer}
                className="py-2.5 px-11 hover:bg-white w-full block"
              >
                Be part of our team
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                title="Contact us"
                onClick={closeDrawer}
                className="py-2.5 px-11 hover:bg-white w-full block"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                href="/api"
                title="API"
                onClick={closeDrawer}
                className="py-2.5 px-11 hover:bg-white w-full block"
              >
                API
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                title="Privacy, terms and conditions"
                onClick={closeDrawer}
                className="py-2.5 px-11 hover:bg-white w-full block"
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
