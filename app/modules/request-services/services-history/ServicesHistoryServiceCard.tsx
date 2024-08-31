import AppIcon, { AppIconType } from "@/components/shared/AppIcon";
import { Card } from "@/components/shared/ui/AppCard";

import React from "react";
import { ServicesHistoryRepeatService } from "./ServicesHistoryRepeatService";

interface JobCardProps {
  icon: AppIconType;
  category: string;
  jobType: string;
  description: string;
  price: string;
  location?: string;
  time: string;
  postulates: number;
}
export const ServicesHistoryServiceCard = ({
  service,
}: {
  service: JobCardProps;
}) => {
  return (
    <Card className="mb-4 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-3">
          <AppIcon icon={service.icon} width={20} className="text-primary-1" />
          <p className="text-primary-1 text-sm">{service.category}</p>
          <p className="font-bold">{service.jobType}</p>
        </div>
        <AppIcon icon="arrow-right" width={20} className="text-gray-1" />
      </div>
      <div className="grid gap-2">
        <p>{service.description}</p>
        {service.location && (
          <div className="flex items-center text-gray-1">
            <AppIcon icon="location" width={20} className="text-gray-1" />
            <span className="text-sm">{service.location}</span>
          </div>
        )}
        <p className="text-xl font-bold text-primary-1">
          AU$ {service.price}
          <span className="text-sm font-normal text-gray-1">/per service</span>
        </p>
        <p className="text-sm text-gray-1">{service.time}</p>
      </div>
      <div className="flex items-center justify-between mt-2">
        <strong>{service.postulates} postulates</strong>
        <ServicesHistoryRepeatService />
      </div>
    </Card>
  );
};
