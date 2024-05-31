import AppIcon from "@/components/shared/AppIcon";
import Footer from "@/components/layout/Footer";
import OnboardingNav from "@/components/layout/OnboardingNav";
import React from "react";

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-150 min-h-svh">
      <div className="container min-h-svh mx-auto flex flex-col justify-between">
        <header className="py-3 bg-gray-150 pb-8 flex justify-between">
          <a href="/" className="mt-[19px]">
            <img src="/minhoo-logo.svg" alt="minhoo-logo" className="w-32" />
          </a>
          <div>
            <button
              className="text-black focus:outline-none p-3"
              type="button"
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
              data-drawer-placement="right"
            >
              <AppIcon icon="menu" width="35" className="mt-1.5" />
            </button>
          </div>
          <OnboardingNav />
        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
