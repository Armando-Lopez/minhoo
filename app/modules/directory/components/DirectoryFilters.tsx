import AppIcon from "@/components/shared/AppIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shared/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/shared/ui/dropdown-menu";
import { Label } from "@/components/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/shared/ui/radio-group";
import React from "react";

export const DirectoryFilters = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2">
        Locations / Skills <AppIcon icon="arrow-down" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[344px] rounded-xl p-5" align="end">
        <DropdownMenuLabel className="text-gray-3 text-sm">
          Filter by
        </DropdownMenuLabel>
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base font-normal">
              <div className="flex items-center gap-2">
                <AppIcon icon="location" className="text-primary-1 text-2xl" />
                Countries
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="option-one">All</Label>
                  <RadioGroupItem
                    value="option-one"
                    id="option-one"
                    className="w-5 h-5"
                  />
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-base font-normal">
              <div className="flex items-center gap-2">
                <AppIcon icon="gears" className="text-primary-1 text-2xl" />
                Categories
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="option-one">All</Label>
                  <RadioGroupItem value="option-one" id="option-one" className="w-5 h-5" />
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
