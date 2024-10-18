"use client";
import { Input } from "@/components/shared/ui/input";
import { Notifications } from "@/modules/notifications/components/Notifications";
import React from "react";
import { OngoingServicesServiceCard } from "@/modules/request-services/ongoing-services/components/OngoingServicesServiceCard";
import AppModal from "@/components/shared/AppModal";
import { ShiftsDescription } from "@/modules/chats/shifts/ShiftsDescription";
import { DirectoryFilters } from "@/modules/directory/components/DirectoryFilters";
import { Button } from "@/components/shared/ui/button";
import AppIcon from "@/components/shared/AppIcon";

export default function OfferServicesPage() {
  return (
    <div className="grid grid-cols-12 col-span-9 grid-rows-12 min-h-dvh">
      <div className="col-span-7 row-span-1 border-b border-gray-2 pt-9 pb-2 px-8 sticky top-0 bg-white">
        <DirectoryFilters
          activator={
            <div className="flex items-center justify-between w-full">
              <h2 className="text-lg font-medium">Offers</h2>
              <Button className="rounded-ful" variant="black">
                <p className="text-gray-3">Filter by: </p>{" "}
                <span className="text-white pl-1.5">All</span>
                <AppIcon icon="arrow-down" className="ml-1 text-white" />
              </Button>
            </div>
          }
        />
        <div className="pl-4 bg-gray-150 rounded-full">
          <Input
            type="search"
            placeholder="Search"
            className="pr-3"
          />
        </div>
      </div>
      <div className="col-span-5 row-span-12 border-l border-gray-2">
        <Notifications />
      </div>
      <div className="col-span-7 row-span-11 border-l border-gray-2">
        <div className="flex flex-col items-center mt-5">
          <AppModal
            activator={
              <div className="w-[358px] mx-auto mt-5">
                <OngoingServicesServiceCard
                  icon="building"
                  category="On-site"
                  description="I urgently need to fix a rupture in one of the pipes in my apartment."
                  jobType="Handyman"
                  price="150.00"
                  time="12 hours ago"
                  location="Brisbane, Australia"
                />
              </div>
            }
            className="rounded-2xl h-fit ml-auto hide-scroll-bar"
          >
            <ShiftsDescription />
          </AppModal>
          <div className="w-[358px]">
            <OngoingServicesServiceCard
              icon="building"
              category="On-site"
              description="I urgently need to fix a rupture in one of the pipes in my apartment."
              jobType="Handyman"
              price="150.00"
              time="12 hours ago"
              location="Brisbane, Australia"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
