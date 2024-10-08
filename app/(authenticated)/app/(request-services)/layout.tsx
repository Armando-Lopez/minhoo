"use client";
import { Notifications } from "@/modules/notifications/components/Notifications";
import { RequestServiceFilters } from "@/modules/request-services/request-a-service/components/RequestServiceFilters";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function RequestServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [sectionName, setSectionName] = useState("");
  useEffect(() => {
    const sections = {
      "/request-a-service": "Request a service",
      "/ongoing-services": "Ongoing services",
      "/find-services": "Ongoing services",
      "/services-history": "History",
    };
    setSectionName(sections[pathname as keyof typeof sections]);
  }, [pathname]);

  return (
    <>
      <div className="grid grid-cols-12 col-span-9 grid-rows-12 min-h-dvh">
        <div className="col-span-7 row-span-1 border-b border-gray-2 flex items-center pb-4 pt-9 justify-between px-8 sticky top-0 bg-white">
          <h2 className="text-lg font-medium">{sectionName}</h2>
          <RequestServiceFilters />
        </div>
        <div className="col-span-5 row-span-12 border-l border-gray-2">
          <Notifications />
        </div>
        <div className="col-span-7 row-span-11 border-l border-gray-2">
          {children}
        </div>
      </div>
    </>
  );
}
