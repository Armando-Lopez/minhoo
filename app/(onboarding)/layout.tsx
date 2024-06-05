"use client";

import Footer from "@/components/layout/Footer";
import OnboardingNav from "@/components/layout/OnboardingNav";
import React, { useEffect, useState } from "react";

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(document.documentElement.scrollTop > 50);
    function setHeaderScrollStyle() {
      setIsScrolled(document.documentElement.scrollTop > 50);
    }
    document.addEventListener("scroll", setHeaderScrollStyle);

    return () => document.removeEventListener("scroll", setHeaderScrollStyle);
  }, []);
  return (
    <div className="bg-gray-150 min-h-svh">
      <div className="min-h-svh flex flex-col justify-between">
        <header
          className={`md:sticky z-10 top-0 bg-gray-150 ${
            isScrolled ? `md:shadow-md` : ""
          }`}
        >
          <div className="container mx-auto flex justify-between py-3">
            <a href="/" className="mt-[19px]">
              <img
                src="/minhoo-horizontal-logo.png"
                alt="minhoo horizontal logo"
                className="w-32"
              />
            </a>
            <OnboardingNav />
          </div>
        </header>
        <main className="flex-grow container">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
