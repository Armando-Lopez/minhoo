import { RequestServiceFilters } from "@/modules/request-services/components/RequestServiceFilters";
import { RequestServiceForm } from "@/modules/request-services/components/RequestServiceForm";
import React from "react";

export default function RequestServicesPage() {
  return (
    <section>
      <div className="flex justify-between items-center px-6 mt-5 pb-3 border-b border-b-gray-1/50">
        <h2 className="text-lg font-medium">Request a service</h2>
        <RequestServiceFilters />
      </div>
      <RequestServiceForm />
    </section>
  );
}
