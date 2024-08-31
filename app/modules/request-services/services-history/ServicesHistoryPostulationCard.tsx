import AppIcon from "@/components/shared/AppIcon";
import { Card, CardContent } from "@/components/shared/ui/AppCard";
import { Avatar, AvatarImage } from "@/components/shared/ui/avatar";
import React from "react";

export const ServicesHistoryPostulationCard = () => {
  return (
    <Card className="pt-5">
      <CardContent className="flex gap-3 items-center">
        <div>
          <Avatar>
            <AvatarImage src="https://placehold.co/50"></AvatarImage>
          </Avatar>
        </div>
        <div className="grid">
          <strong>Andrew Mattie</strong>
          <div>
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
