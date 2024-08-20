import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/shared/ui/toggle-group";
import React from "react";

export default function RequestServicesPage() {
  return (
    <section>
      <div className="px-6 mt-5 border-b border-b-gray-1/50">
        <h2 className="text-lg font-medium">Request a service</h2>
      </div>
      <div className="pt-5 px-10">
        <p>What type of service is it?</p>
        <div>
          <ToggleGroup type="single">
            <ToggleGroupItem value="freelance">Freelance</ToggleGroupItem>
            <ToggleGroupItem value="onSite">On-site</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </section>
  );
}
