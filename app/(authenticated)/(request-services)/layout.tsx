"use client";
import { RequestServiceFilters } from "@/modules/request-services/request-a-service/components/RequestServiceFilters";
import {  usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function RequestServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname()
  const [sectionName, setSectionName] = useState("")
  useEffect(() => {
    const sections = {
      "/request-a-service": "Request a service",
      "/ongoing-services": "Ongoing services",
      "/services-history": "History",
    }
    setSectionName(sections[pathname as keyof typeof sections])    
  }, [pathname])

  
  return (
    <div>
      <div className="flex justify-between items-center px-6 mt-5 pb-3 border-b border-b-gray-1/50">
        <h2 className="text-lg font-medium">{sectionName}</h2>
        <RequestServiceFilters />
      </div>
      {children}
    </div>
  );
}
