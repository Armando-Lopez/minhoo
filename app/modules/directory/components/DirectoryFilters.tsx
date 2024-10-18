"use client";
import AppIcon from "@/components/shared/AppIcon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shared/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/shared/ui/radio-group";
import React from "react";
import { Label } from "@/components/shared/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shared/ui/accordion";
import { useCategories } from "@/modules/categories/hooks/useCategories";

export const DirectoryFilters = ({ activator }: Props) => {
  const { data } = useCategories();

  return (
    <div className="flex items-center justify-between pb-3 overflow-auto">
      <Popover>
        <PopoverTrigger asChild>{activator}</PopoverTrigger>
        <PopoverContent align="end" className="rounded-2xl">
          <>
            <p className="mb-4 text-gray-3">Filter by</p>
            <Accordion type="multiple">
              <AccordionItem value="item-1" className="rounded-lg border-0">
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
              <AccordionItem value="item-2" className="rounded-lg border-0">
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
                  {data?.categories.map((category) => (
                    <RadioGroup key={category.name}>
                      <Label
                        htmlFor="per-hour"
                        className="flex justify-between items-center font-normal cursor-pointer"
                      >
                        <p>
                          {category.name}{" "}
                          <span>
                            {category.available && `(${category.available})`}
                          </span>
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
  );
};

type Props = {
  activator?: React.ReactNode;
};
