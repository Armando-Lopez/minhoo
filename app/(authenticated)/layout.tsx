import Footer from "@/components/layout/Footer";
import AuthNav from "@/components/layout/AuthNav";
import React from "react";

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-dvh overflow-hidden bg-gray-170">
      <div className="container flex-grow grid grid-cols-12">
        <div className="col-span-3 h-full flex flex-col items-cnter">
          <header className="mb-8 pt-4">
            <img src="/minhoo-logo.svg" alt="minhoo-logo" />
          </header>
          <AuthNav />
        </div>
        <main className="col-span-5 border-x border-x-gray-1/50 pt-4">
          {children}
        </main>
        <div className="col-span-4 pt-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}
