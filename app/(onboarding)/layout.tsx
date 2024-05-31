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
        <header className="py-3 bg-gray-150 pb-12 lg:pb-10 flex justify-between">
          <a href="/" className="mt-[12px]">
            <img src="/minhoo-logo.svg" alt="minhoo-logo" className="w-32" />
          </a>
          <OnboardingNav />
        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
