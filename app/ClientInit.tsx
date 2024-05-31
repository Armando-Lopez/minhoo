"use client";

import React from "react";
// import { initFlowbite } from "flowbite";

export default function ClientIinit({ children }: { children: React.ReactNode }) {
  if (typeof document !== "undefined") {
    // initFlowbite();
  }
  return <>{children}</>;
}
