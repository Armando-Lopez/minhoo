"use client";
import React from "react";
import AppIcon from "@/components/shared/AppIcon";
import { initFlowbite } from "flowbite";

export default function OnboardingNav() {
  if (typeof document !== "undefined") {
    initFlowbite();
  }
  return (
    <div
      id="drawer-navigation"
      className="fixed top-0 right-0 z-40 h-screen pt-8 overflow-y-auto transition-transform translate-x-full bg-gray-150 w-11/12 md:w-[29%] xl:w-3/12 dark:bg-gray-800"
      tabIndex={-1}
      aria-hidden
      aria-labelledby="drawer-right-label"
    >
      <button
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        className="absolute top-5 end-[27px] inline-flex items-center justify-center"
      >
        <AppIcon icon="close" width="35" className="translate-y-1" />
      </button>
      <span className="[&_path]:stroke-primary-1">
        <img
          src="/onboarding-nav/icon.png"
          alt="minhoo-logo"
          className="pl-11 w-20 -mt-0.5"
        />
      </span>
      <div className="pt-8 lg:pt-14 pb-14 overflow-y-auto">
        <ul className="space-y-2">
          <li>
            <a href="/" className="py-2.5 px-11 hover:bg-white w-full block">
              Home
            </a>
          </li>
          <li>
            <a
              href="/we"
              className="py-2.5 px-11 hover:bg-white w-full block"
            >
              We
            </a>
          </li>
          <li>
            <a
              href="/team"
              className="py-2.5 px-11 hover:bg-white w-full block"
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="/community"
              className="py-2.5 px-11 hover:bg-white w-full block"
            >
              Community
            </a>
          </li>
          <li>
            <a
              href="/subscription"
              className="py-2.5 px-11 hover:bg-white w-full block"
            >
              Pre-Sell
            </a>
          </li>
          <li>
            <a
              href="/advertising-with-us"
              className="py-2.5 px-11 hover:bg-white w-full block"
            >
              Advertising with us
            </a>
          </li>
          <li>
            <a
              href="/be-part-of-our-team"
              className="py-2.5 px-11 hover:bg-white w-full block"
            >
              Be part of our team
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="py-2.5 px-11 hover:bg-white w-full block"
            >
              Contact us
            </a>
          </li>
          <li>
            <a href="/api" className="py-2.5 px-11 hover:bg-white w-full block">
              API
            </a>
          </li>
          <li>
            <a
              href="/terms-and-conditions"
              className="py-2.5 px-11 hover:bg-white w-full block"
            >
              Privacy, terms and conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
