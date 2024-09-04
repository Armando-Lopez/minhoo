"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  activeClass?: string;
}

export const AppLink = ({ children, className, ...props}: LinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;
  
  return <Link className={cn(className, isActive ? props.activeClass : "")} {...props}>{children}</Link>;
};
