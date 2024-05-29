import AppIcon from "@/components/shared/AppIcon";
import React from "react";

export default function Subscription() {
  return (
    <div className="mb-16">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-8 relative">
          <img
            src="/subscription/visualize-project.png"
            alt=""
            className="w-full"
          />
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-max flex items-end gap-3 py-5 px-10 rounded-full bg-white text-primary-1 font-semibold">
            <AppIcon icon="play" width={20} />
            Visualize project
          </button>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="flex flex-col justify-center items-center gap-5 px-3 py-3 rounded-xl bg-white">
            <h3 className="text-primary-1 font-bold">New subscribers</h3>
            <ul className="w-full grid gap-4">
              <li className="py-2 px-4 rounded-md bg-gray-150">
                Subscribers name
              </li>
              <li className="py-2 px-4 rounded-md bg-gray-150">
                Subscribers name
              </li>
              <li className="py-2 px-4 rounded-md bg-gray-150">
                Subscribers name
              </li>
              <li className="py-2 px-4 rounded-md bg-gray-150">
                Subscribers name
              </li>
              <li className="py-2 px-4 rounded-md bg-gray-150">
                Subscribers name
              </li>
            </ul>
            <button className="flex items-center gap-2 mr-auto ml-2 font-bold">
              See all
              <AppIcon icon="grater-than" width={10} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
