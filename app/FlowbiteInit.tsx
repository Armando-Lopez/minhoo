"use client";
import React, { useEffect } from "react";
import { initFlowbite } from "flowbite";

export default function FlowbiteInit() {
  useEffect(() => {
    initFlowbite();
  }, []);
  return <span></span>;
}
