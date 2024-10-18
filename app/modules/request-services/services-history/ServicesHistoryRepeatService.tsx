import React from "react";
import { Button } from "@/components/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/ui/dialog";
import AppIcon from "@/components/shared/AppIcon";
import { ServicesHistoryPostulationCard } from "@/modules/request-services/services-history/ServicesHistoryPostulationCard";

export const ServicesHistoryRepeatService = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="space-x-2 rounded-full text-white">
          <AppIcon icon="reload" width={20} className="text-white" />
          <span>Repeat service</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="py-10 px-14 max-h-[84dvh] hide-scroll-bar overflow-auto">
        <div className="grid mx-auto space-y-5">
          <DialogHeader>
            <p className="flex text-primary-1 items-center gap-3 mb-4">
              <AppIcon icon="building" className="text-primary-1" />
              On-site services
            </p>
            <DialogTitle>
              <p>
                <span className="font-normal">Category</span>: Handyman{" "}
              </p>
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="mt-5">
            I need a person with plumbing skills to fix my house. Opportunity to
            refer neighbors if the work is good. Hope to meet you soon.
          </DialogDescription>
          <div className="space-y-4 mb-5">
            <p className="text-sm text-gray-1">Posted 1 hour ago</p>
            <p className="flex gap-2 item">
              <AppIcon icon="location" className="text-gray-1" width={24} />
              Carindale QLD
            </p>
            <p className="flex gap-1">
              <AppIcon icon="dollar" className="text-gray-1" width={24} />
              <span className="text-gray-1">Price</span>:
              <span className="text-primary-1 font-medium">$35.00</span>
              <span className="text-gray-1">/per hour</span>
            </p>
          </div>
          <Button className="space-x-2 rounded-full text-white">
            <AppIcon icon="reload" width={20} className="text-white" />
            <span>Repeat service</span>
          </Button>
          <p>Postulates (50)</p>
          <div className="grid gap-3">
            <ServicesHistoryPostulationCard />
            <ServicesHistoryPostulationCard />
            <ServicesHistoryPostulationCard />
            <ServicesHistoryPostulationCard />
            <ServicesHistoryPostulationCard />
            <ServicesHistoryPostulationCard />
            <ServicesHistoryPostulationCard />
            <ServicesHistoryPostulationCard />
            <ServicesHistoryPostulationCard />
            <ServicesHistoryPostulationCard />
            <ServicesHistoryPostulationCard />
            <ServicesHistoryPostulationCard />
            <ServicesHistoryPostulationCard />
            <ServicesHistoryPostulationCard />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
