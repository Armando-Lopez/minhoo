import AppIcon from "@/components/shared/AppIcon";
import { Card, CardContent } from "@/components/shared/ui/AppCard";
import { Avatar, AvatarImage } from "@/components/shared/ui/avatar";
import React from "react";

export const ServicesHistoryPostulationCard = () => {
  return (
    <Card>
      <CardContent className="flex gap-3 pt-5 items-center">
        <Avatar>
          <AvatarImage src="/team/wildelmy-colina.jpg"></AvatarImage>
        </Avatar>
        <div className="grid gap-1">
          <strong>Andrew Mattie</strong>
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <AppIcon icon="star-fill" className="text-primary-1" />
              <AppIcon icon="star-fill" className="text-primary-1" />
              <AppIcon icon="star-fill" className="text-primary-1" />
              <AppIcon icon="star-fill" className="text-primary-1" />
              <AppIcon icon="star-fill" className="text-primary-1" />
            </div>
            5.0
          </div>
          <p className="text-gray-3">influencer, instagram, creator</p>
        </div>
        <div>
          <AppIcon icon="arrow-right" />
        </div>
      </CardContent>
    </Card>
  );
};
