import AppIcon from "@/components/shared/AppIcon";
import AppModal from "@/components/shared/AppModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/shared/ui/dropdown-menu";
import { ShiftsDescription } from "@/modules/chats/shifts/ShiftsDescription";
import { Notifications } from "@/modules/notifications/components/Notifications";
import { OngoingServicesServiceCard } from "@/modules/request-services/ongoing-services/components/OngoingServicesServiceCard";

export default function myShiftsPage() {
  return (
    <>
      <div className="col-span-6 row-span-12 border-l border-l-gray-1/50">
        <Notifications />
      </div>
      <div className="col-span-6 row-span-11 overflow-y-auto">
        <div className="border-b border-b-gray-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 my-3 px-4 w-full justify-between">
              <p className="font-bold">Shifts accepted</p>
              <AppIcon icon="filter" width="30" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 rounded-xl p-5" align="end">
              <DropdownMenuLabel className="mb-2 text-gray-1 text-sm font-normal">
                Filter by
              </DropdownMenuLabel>
              <ul className="text-sm space-y-2">
                <li className="flex justify-between">
                  <label htmlFor="accepted">Shifts accepted</label>
                  <input
                    type="radio"
                    name="accepted"
                    id="accepted"
                    className="text-primary-1 focus:ring-primary-1"
                  />
                </li>
                <li className="flex justify-between">
                  <label htmlFor="applied">Shifts applied</label>
                  <input
                    type="radio"
                    name="applied"
                    id="applied"
                    className="text-primary-1 focus:ring-primary-1"
                  />
                </li>
                <li className="flex justify-between">
                  <label htmlFor="cancelled">Shifts cancelled</label>
                  <input
                    type="radio"
                    name="cancelled"
                    id="cancelled"
                    className="text-primary-1 focus:ring-primary-1"
                  />
                </li>
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
        <AppModal
          activator={
            <div className="w-[358px] mx-auto mt-5">
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
          }
          className="rounded-2xl h-fit ml-auto hide-scroll-bar"
        >
          <ShiftsDescription />
        </AppModal>
          
          <div className="w-[358px] mx-auto mt-5">
            <OngoingServicesServiceCard
              icon="building"
              category="On-site"
              description="I urgently need to fix a rupture in one of the pipes in my apartment."
              jobType="Handyman"
              price="50.00"
              time="2 hours ago"
              location="Brisbane, Australia"
            />
          </div>
        </div>
      </div>
    </>
  );
}
