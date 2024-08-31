import { ServicesHistoryServiceCard } from "@/modules/request-services/services-history/ServicesHistoryServiceCard";

export default function ServicesHistoryPage() {
  return (
    <section className="py-7">
      <div className="flex flex-col items-center gap-5">
        <div className="w-[358px]">
          <ServicesHistoryServiceCard
            service={{
              icon: "laptop",
              category: "Freelance",
              description:
                "I need a graphic designer with an emphasis on branding and branding...",
              jobType: "Others",
              price: "80.00",
              time: "1 hour ago",
              location: "125 colchester, Brisbane",
              postulates: 20,
            }}
          />
        </div>
        <div className="w-[358px]">
          <ServicesHistoryServiceCard
            service={{
              icon: "building",
              category: "On-site",
              description:
                "I urgently need to fix a rupture in one of the pipes in my apartment.",
              jobType: "Handyman",
              price: "150.00",
              time: "12 hours ago",
              location: "Brisbane, Australia",
              postulates: 20,
            }}
          />
        </div>
      </div>
    </section>
  );
}
