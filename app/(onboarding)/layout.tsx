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
        <header className="md:sticky z-10 top-0 py-3 bg-gray-150 flex justify-between mb-10 lg:mb-0">
          <a href="/" className="mt-[19px]">
            <img src="/minhoo-horizontal-logo.png" alt="minhoo horizontal logo" className="w-32 -mt-1.5 lg:mt-0" />
          </a>
          <OnboardingNav />
        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
