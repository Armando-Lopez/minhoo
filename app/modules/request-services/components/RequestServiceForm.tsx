import React from "react";
import AppIcon from "@/components/shared/AppIcon";
import { Textarea } from "@/components/shared/ui/textarea";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/shared/ui/toggle-group";
import { Input } from "@/components/shared/ui/AppInput";
import { Button } from "@/components/shared/ui/button";

export const RequestServiceForm = () => {
  return (
    <div className="grid gap-10 max-w-md pt-5 mx-auto">
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
        <p className="mb-4">What do you want to request?</p>
        <button className="flex justify-between items-center w-full">
          <span className="w-10 h-10 grid place-items-center rounded-full bg-gray-2">
            <AppIcon
              icon="user-hand-up"
              flip="horizontal"
              className="text-2xl text-gray-1"
            />
          </span>
          <p className="text-gray-1">Choose one category </p>
          <AppIcon icon="arrow-right" className="text-gray-1" />
        </button>
      </div>
      <div>
        <div className="flex justify-between mb-4">
          <p>Add details of your order</p>
          <span>0/900</span>
        </div>
        <div className="flex gap-2">
          <Textarea placeholder="Detail your request here" />
          <span className="flex-shrink-0 w-10 h-10 grid place-items-center rounded-full bg-gray-2">
            <AppIcon
              icon="picture"
              flip="horizontal"
              className="text-2xl text-gray-1"
            />
          </span>
        </div>
      </div>
      <div>
        <p className="mb-4">Number of positions available</p>
        <div className="flex gap-2">
          <span className="flex-shrink-0 w-10 h-10 grid place-items-center rounded-full bg-gray-2">
            <AppIcon icon="user-plus" className="text-2xl text-gray-1" />
          </span>
          <Input type="number" min="1" defaultValue="1" variant="underline" />
        </div>
      </div>
      <div>
        <p className="mb-4">How much do you wish to pay?</p>
        <div className="flex gap-2">
          <span className="flex-shrink-0 w-10 h-10 grid place-items-center rounded-full bg-gray-2">
            <AppIcon icon="dollar" className="text-2xl text-gray-1" />
          </span>
          <div className="flex w-full">
            <Input type="number" placeholder="$0.00" variant="underline" />
            <Button className="rounded-full" variant="black">
              Per hour
              <AppIcon icon="arrow-down" className="ml-1 text-white" />
            </Button>
          </div>
        </div>
      </div>
      <Button className="w-full rounded-lg py-6">Send request</Button>
    </div>
  );
};
