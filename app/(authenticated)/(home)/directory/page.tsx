import AppIcon from "@/components/shared/AppIcon";
import { Card, CardContent } from "@/components/shared/ui/AppCard";
import { Input } from "@/components/shared/ui/AppInput";
import { Avatar, AvatarImage } from "@/components/shared/ui/avatar";
import { DirectoryFilters } from "@/modules/directory/components/DirectoryFilters";
import { redirect } from "next/navigation";
import React from "react";

export default function DirectoryPage() {
  redirect("/newsletter");
  return (
    <section>
      <div className="sticky top-0 flex justify-between items-center px-5 mb-10">
        <div className="w-1/2 py-3">
          <Input className="bg-gray-150 rounded-full" placeholder="search" />
        </div>
        <div className="w-1/2 flex justify-end">
          <DirectoryFilters />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Card key={item} className="max-w-96 pt-5">
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
        ))}
      </div>
    </section>
  );
}
