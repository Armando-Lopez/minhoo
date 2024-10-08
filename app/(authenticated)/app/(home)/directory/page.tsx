import AppIcon from "@/components/shared/AppIcon";
import { Card, CardContent } from "@/components/shared/ui/AppCard";
import { Input } from "@/components/shared/ui/AppInput";
import { Avatar, AvatarImage } from "@/components/shared/ui/avatar";
import { DirectoryFilters } from "@/modules/directory/components/DirectoryFilters";
import React from "react";

export default function DirectoryPage() {
  return (
    <section>
      <div className="sticky top-0 flex justify-between items-center px-5 mb-10 mt-2">
        <div className="w-1/2 pl-4 bg-gray-150 rounded-full">
          <Input
            type="search"
            variant="search"
            placeholder="Search"
            className="pr-3"
          />
        </div>
        <div className="w-1/2 flex justify-end">
          <DirectoryFilters
            activator={
              <div className="flex items-center gap-2 cursor-pointer">
                All Australia / All skills
                <AppIcon icon="arrow-down" width="14" />
              </div>
            }
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-3 mb-14">
        {[1, 2, 3, 4, 5].map((item) => (
          <Card key={item} className="max-w-96 pt-5">
            <CardContent className="flex gap-3 items-center">
              <Avatar>
                <AvatarImage src="/team/wildelmy-colina.jpg"></AvatarImage>
              </Avatar>
              <div className="grid">
                <strong>Wildelmy Colina</strong>
                <div className="flex gap-3 items-center">
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
                <AppIcon
                  icon="arrow-right"
                  className="text-gray-3"
                  width="16"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
