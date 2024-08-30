import { OngoingServicesServiceCard } from "@/modules/request-services/ongoing-services/components/OngoingServicesServiceCard";

export default function OngoingServicesPage() {
  return (
    <section className="py-7">
      <div className="flex flex-col items-center gap-5">
        <div className="w-[358px]">
          <OngoingServicesServiceCard
            icon="laptop"
            category="Freelance"
            description="I need to design the logo of my company, something simple but with quality. Delivery is..."
            jobType="Virtual & Online"
            price="320.00"
            time="1 hour ago"
          />
        </div>
        <div className="w-[358px]">
          <OngoingServicesServiceCard
            icon="building"
            category="On-site"
            description="I urgently need to fix a rupture in one of the pipes in my apartment."
            jobType="Handyman"
            price="150.00"
            time="12 hours ago"
            location="Brisbane, Australia"
          />
        </div>
      </div>
    </section>
  );
}
