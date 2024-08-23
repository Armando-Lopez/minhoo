import { RequestServiceForm } from "@/modules/request-services/components/RequestServiceForm";
import { redirect } from "next/navigation";
import React from "react";

export default function RequestServicesPage() {
  redirect("/newsletter");
  return (
    <section>
      <div className="px-6 mt-5 pb-3 border-b border-b-gray-1/50">
        <h2 className="text-lg font-medium">Request a service</h2>
      </div>
      <RequestServiceForm />
    </section>
  );
}
