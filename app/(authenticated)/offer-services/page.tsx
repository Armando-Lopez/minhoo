"use client";
import AppIcon from "@/components/shared/AppIcon";
import { Input } from "@/components/shared/ui/AppInput";
import { Button } from "@/components/shared/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shared/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/shared/ui/radio-group";
import { Notifications } from "@/modules/notifications/components/Notifications";
import React from "react";
import { Label } from "@/components/shared/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shared/ui/accordion";
import { OngoingServicesServiceCard } from "@/modules/request-services/ongoing-services/components/OngoingServicesServiceCard";
import AppModal from "@/components/shared/AppModal";
import { ShiftsDescription } from "@/modules/chats/shifts/ShiftsDescription";

export default function OfferServicesPage() {
  const categories = [
    {
      name: "All",
    },
    {
      name: "Beauty and personal care",
      request: 86,
    },
    {
      name: "Cleaning",
      request: 89,
    },
    {
      name: "Furniture Assembly",
      request: 560,
    },
    {
      name: "Handyman",
      request: 56,
    },
    {
      name: "Moving Services",
      request: 184,
    },
    {
      name: "Office Services",
      request: 8,
    },
    {
      name: "Personal Assistant",
      request: 9,
    },
    {
      name: "Smart Home Installation",
      request: 5,
    },
    {
      name: "Virtual & Online",
      request: 64,
    },
    {
      name: "Yardwork Services",
      request: 789,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-12 col-span-9 grid-rows-12 min-h-dvh">
        <div className="col-span-7 row-span-1 border-b border-gray-2 pt-9 pb-2 px-8 sticky top-0 bg-white">
          <div className="flex items-center justify-between pb-3 overflow-auto">
            <h2 className="text-lg font-medium">Offers</h2>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="rounded-ful" variant="black">
                  <p className="text-gray-3">Filter by: </p>{" "}
                  <span className="text-white pl-1.5">All</span>
                  <AppIcon icon="arrow-down" className="ml-1 text-white" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="rounded-2xl">
                <>
                  <p className="mb-4 text-gray-3">Filter by</p>
                  <Accordion type="multiple">
                    <AccordionItem
                      value="item-1"
                      className="rounded-lg border-0"
                    >
                      <AccordionTrigger className="text-base text-center font-normal hover:no-underline gap-2">
                        <div className="flex items-center gap-2">
                          <AppIcon
                            icon="location"
                            className="text-primary-1"
                            width={24}
                          />
                          <p>Countries</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4">
                        <p>Australia</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-2"
                      className="rounded-lg border-0"
                    >
                      <AccordionTrigger className="text-base text-center font-normal hover:no-underline gap-2 py-5">
                        <div className="flex items-center gap-2">
                          <AppIcon
                            icon="gears"
                            className="text-primary-1"
                            width="24"
                          />
                          <p>Categories</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-0 space-y-5 pb-10">
                        {categories.map((category, i) => (
                          <RadioGroup key={i}>
                            <Label
                              htmlFor="per-hour"
                              className="flex justify-between items-center font-normal cursor-pointer"
                            >
                              <p>
                                {category.name} <span>{category.request}</span>
                              </p>

                              <RadioGroupItem
                                id="per-hour"
                                value="per-hour"
                                className="w-4 h-4"
                              />
                            </Label>
                          </RadioGroup>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </>
              </PopoverContent>
            </Popover>
          </div>
          <div className="pl-4 bg-gray-150 rounded-full">
            <Input
              type="search"
              variant="search"
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
    </>
  );
}
