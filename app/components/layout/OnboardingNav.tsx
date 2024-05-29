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
      className="fixed top-0 right-0 z-40 h-screen px-11 pt-8 overflow-y-auto transition-transform translate-x-full bg-white w-11/12 md:w-[29%] xl:w-3/12 dark:bg-gray-800"
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
        {/* <app-minhoo-icon width="39" /> */}
      </span>
      <div className="pt-14 pb-14 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li className="py-1.5">
            <a href="/home">Home</a>
          </li>
          <li className="py-1.5">
            <a href="/we">We</a>
          </li>
          <li className="py-1.5">
            <a href="/team">Team</a>
          </li>
          <li className="py-1.5">
            <a href="/community">Community</a>
          </li>
          <li className="py-1.5">
            <a>Pre-Sell</a>
          </li>
          <li className="py-1.5">
            <a>Advertising with us</a>
          </li>
          <li className="py-1.5">
            <a>Be part of our team</a>
          </li>
          <li className="py-1.5">
            <a href="/contact">Contact us</a>
          </li>
          <li className="py-1.5">
            <a>API</a>
          </li>
          <li className="py-1.5">
            <a>Privacy, terms and conditions</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
