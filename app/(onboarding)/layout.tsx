"use client";
import { initFlowbite } from "flowbite";
import AppIcon from "@/components/shared/AppIcon";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (typeof window !== "undefined") {
    document.addEventListener("load", () => {
      initFlowbite();
    });
  }

  return (
    <div className="bg-gray-150 min-h-svh">
      <div className="container min-h-svh mx-auto flex flex-col justify-between">
        <header className="py-3 bg-gray-150 pb-12 lg:pb-10 flex justify-between">
          <a href="/home" className="mt-[12px]">
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
          <div
            id="drawer-navigation"
            className="fixed top-0 right-0 z-40 h-screen px-11 pt-8 overflow-y-auto transition-transform translate-x-full bg-white w-11/12 md:w-[29%] xl:w-3/12 dark:bg-gray-800"
            tabIndex={-1}
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
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
