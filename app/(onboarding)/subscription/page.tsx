// import AppButton from "@components/shared/AppButton";
// import AppIcon from "@components/shared/AppIcon";
import React from "react";

export default function Subscription() {
  return (
    <div className="mb-24">
      <div className="lg:flex gap-5">
        <div className="relative">
          <img
            src="/subscription/visualize-project.png"
            alt=""
            className="xl:max-w-[870px] mb-10 lg:mb-0"
          />
          {/* <AppButton
            id="play-video"
            name="play video"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-max flex items-end gap-3 py-5 px-10 rounded-full bg-white text-primary-1 font-semibold"
          >
            <AppIcon icon="play" width={20} />
            Visualize project
          </AppButton> */}
        </div>
        <div className="w-full">
          <div className="flex flex-col justify-center items-center gap-5 px-3 py-7 rounded-xl bg-white h-full">
            <h3 className="text-primary-1 font-bold">New subscribers</h3>
            <ul className="w-full grid gap-4">
              <li className="py-3 px-5 rounded-md bg-gray-150">Amber Smith</li>
              <li className="py-3 px-5 rounded-md bg-gray-150">Rubi Gruber</li>
              <li className="py-3 px-5 rounded-md bg-gray-150">
                Noah Williams
              </li>
              <li className="py-3 px-5 rounded-md bg-gray-150">Cooper Brown</li>
              <li className="py-3 px-5 rounded-md bg-gray-150">
                Joshua Wilson
              </li>
              <li className="py-3 px-5 rounded-md bg-gray-150">
                Thomas Martin
              </li>
            </ul>
            {/* <button className="flex items-center gap-2 mr-auto ml-2 font-bold">
              See all
              <AppIcon icon="greater-than" width={16} className="text-black-1 font-extrabold" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
