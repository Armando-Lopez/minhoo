"use client";

import Footer from "@/components/layout/Footer";
import OnboardingNav from "@/components/layout/OnboardingNav";
import AppButton from "@/components/shared/AppButton";
import AppIcon from "@/components/shared/AppIcon";
import eventBus from "@/eventbus";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import React, { useEffect, useState } from "react";

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShowingTermItem, setIsShowingTermItem] = useState(false);
  const { lg } = useBreakpoints();

  useEffect(() => {
    setIsScrolled(document.documentElement.scrollTop > 50);
    function setHeaderScrollStyle() {
      setIsScrolled(document.documentElement.scrollTop > 50);
    }
    document.addEventListener("scroll", setHeaderScrollStyle);

    return () => document.removeEventListener("scroll", setHeaderScrollStyle);
  }, []);

  useEffect(() => {
    const unsubscribe = eventBus.subscribe("onToggleShowTermsItem", (value: boolean) => {
      setIsShowingTermItem(value);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="bg-gray-150 min-h-svh">
      <div className="min-h-svh mx-auto flex flex-col justify-between">
        <header
          className={`md:sticky z-10 top-0 py-3 bg-gray-150 mb-10 lg:mb-0 ${
            isScrolled ? `md:shadow-md` : ""
          }`}
        >
          <div className="container flex justify-between">
            {!lg && isShowingTermItem ? (
              <AppButton
                id="back"
                name="back to list"
                className="mt-4"
                onClick={() => eventBus.publish('backToTermsItems')}
              >
                <AppIcon icon="back" width={25} />
              </AppButton>
            ) : (
              <a href="/" className="mt-[19px]">
                <img
                  src="/minhoo-horizontal-logo.png"
                  alt="minhoo horizontal logo"
                  className="w-32 -mt-1.5"
                />
              </a>
            )}
            <OnboardingNav />
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
