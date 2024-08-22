import React from 'react'
import AppIcon from "@/components/shared/AppIcon";
import { Textarea } from "@/components/shared/ui/textarea";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/shared/ui/toggle-group";

export const RequestServiceForm = () => {
  return (
    <div className="grid gap-10 max-w-sm pt-5 mx-auto">
        <div>
          <p className="mb-4">What type of service is it?</p>
          <ToggleGroup type="single">
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
          <div className="flex justify-between">
            <p>Add details of your order</p>
            <span>0/900</span>
          </div>
          <div>
            <Textarea placeholder="Detail your request here" />
            <span className="w-10 h-10 grid place-items-center rounded-full bg-gray-2">
              <AppIcon
                icon="user-hand-up"
                flip="horizontal"
                className="text-2xl text-gray-1"
              />
            </span>
          </div>
        </div>
      </div>
  )
}
