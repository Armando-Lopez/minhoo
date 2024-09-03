import React from "react";
import AppIcon from "@/components/shared/AppIcon";
import { Textarea } from "@/components/shared/ui/textarea";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/shared/ui/toggle-group";
import { Input } from "@/components/shared/ui/AppInput";
import { Button } from "@/components/shared/ui/button";
import { RequestServiceFormRequestCategories } from "./RequestServiceFormRequestCategories";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shared/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/shared/ui/radio-group";
import { Label } from "@/components/shared/ui/label";

export const RequestServiceForm = () => {
  return (
    <div className="grid gap-6 px-14 pt-5 mx-auto mb-12">
      <div>
        <p className="mb-4">What type of service is it?</p>
        <ToggleGroup type="single" defaultValue="freelance">
          <ToggleGroupItem value="freelance" className="w-44 py-7 flex gap-2">
            <AppIcon icon="laptop" className="text-2xl" />
            Freelance
          </ToggleGroupItem>
          <ToggleGroupItem value="onSite" className="w-44 py-7 flex gap-2">
            <AppIcon icon="building" className="text-2xl" />
            On-site
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>
        <RequestServiceFormRequestCategories />
      </div>
      <div>
        <div className="flex justify-between mb-3">
          <p>Add details of your order</p>
          <span>0/900</span>
        </div>
        <div className="flex gap-2 items-center">
          <Textarea placeholder="Detail your request here" />
          <span className="flex-shrink-0 w-10 h-10 grid place-items-center rounded-full bg-gray-2">
            <AppIcon
              icon="picture"
              flip="horizontal"
              className="text-2xl text-gray-3"
            />
          </span>
        </div>
      </div>
      <div>
        <p className="mb-3">Number of positions available</p>
        <div className="flex gap-2">
          <span className="flex-shrink-0 w-10 h-10 grid place-items-center rounded-full bg-gray-2">
            <AppIcon icon="user-plus" className="text-2xl text-gray-3" />
          </span>
          <Input type="number" min="1" defaultValue="1" variant="underline" className="px-0" />
        </div>
      </div>
      <div>
        <p className="mb-3">How much do you wish to pay?</p>
        <div className="flex gap-2">
          <span className="flex-shrink-0 w-10 h-10 grid place-items-center rounded-full bg-gray-2">
            <AppIcon icon="dollar" className="text-2xl text-gray-3" />
          </span>
          <div className="flex w-full gap-2">
            <Input type="number" placeholder="$0.00" variant="underline" className="px-0" />
            <Popover>
              <PopoverTrigger asChild>
                <Button className="rounded-full" variant="black">
                  Per hour
                  <AppIcon icon="arrow-down" className="ml-1 text-white" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="rounded-2xl p-5">
                <p className="mb-4 font-semibold">How do you want to pay?</p>
                <RadioGroup className="space-y-2">
                  <Label
                    htmlFor="per-hour"
                    className="flex justify-between font-normal cursor-pointer"
                  >
                    Per hour
                    <RadioGroupItem
                      id="per-hour"
                      value="per-hour"
                      className="w-6 h-6"
                    />
                  </Label>
                  <Label
                    htmlFor="per-service"
                    className="flex justify-between font-normal cursor-pointer"
                  >
                    Per service
                    <RadioGroupItem
                      id="per-service"
                      value="per-service"
                      className="w-6 h-6"
                    />
                  </Label>
                </RadioGroup>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <Button className="w-full rounded-lg py-6 font-bold">Send request</Button>
    </div>
  );
};
