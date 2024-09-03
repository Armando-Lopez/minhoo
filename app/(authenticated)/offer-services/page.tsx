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
          <div className="flex items-center justify-between pb-3">
            <h2 className="text-lg font-medium">Offers</h2>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="rounded-full" variant="black">
                  <p className="text-gray-3">Filter by: </p>{" "}
                  <span className="text-white pl-1.5">All</span>
                  <AppIcon icon="arrow-down" className="ml-1 text-white" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                className="rounded-2xl p-5  space-y-5"
              >
                <>
                  
                  <p className="mb-4 text-gray-3">Filter by</p>
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
        <div className="col-span-7 row-span-11 border-l border-gray-2"></div>
      </div>
    </>
  );
}
