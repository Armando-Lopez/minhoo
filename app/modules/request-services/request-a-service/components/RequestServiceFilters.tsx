import AppIcon from "@/components/shared/AppIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/shared/ui/dropdown-menu";
import Link from "next/link";
import React from "react";

export const RequestServiceFilters = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2">
        <AppIcon icon="menu" width="30" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 rounded-xl px-5 py-10" align="end">
        <DropdownMenuLabel className="mb-2 text-gray-1 text-sm font-normal">
          Filter by
        </DropdownMenuLabel>
        <ul className="text-sm space-y-4">
          <li>
            <Link href="/request-a-service" className="flex gap-2 items-center">
              <AppIcon icon="gears" width="24" className="text-primary-1" />
              Request a service
            </Link>
          </li>
          <li>
            <Link href="/ongoing-services" className="flex gap-2 items-center">
              <AppIcon icon="clock" width="24" className="text-primary-1" />
              Ongoing service
              <span className="text-gray-1">(3)</span>
            </Link>
          </li>
          <li>
            <Link href="/services-history" className="flex gap-2 items-center">
              <AppIcon icon="history" width="24" className="text-primary-1" />
              History
            </Link>
          </li>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
