import React from "react";
import AppShowMoreToggle from "@/components/shared/AppShowMoreToggle";

export default function ProfileBasicInformation() {
  return (
    <section className="flex items-center gap-10">
      <img
        src="/team/miller-garcía.jpg"
        className="w-[233px] h-[233px] rounded-full"
        alt="user-photo"
      />
      <div className="flex flex-col">
        <strong className="mb-4 text-2xl">Miller García</strong>
        <ul className="flex gap-5 mb-4">
          <li>195 Followers</li>
          <li>360 Following</li>
          <li>4.8 Rating</li>
        </ul>
        <p className="mb-2 text-sm">🇦🇺 Brisbane, Australia</p>
        <div>
          <p className="text-lg font-medium mb-1">Skills</p>
          <ul className="flex gap-2">
            <li className="w-fit rounded-full py-1 px-2 text-sm bg-gray-2">
              Handyman
            </li>
            <li className="w-fit rounded-full py-1 px-2 text-sm bg-gray-2">
              Virtual & Online
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <AppShowMoreToggle>
            I’m graphic designer focused on UX/UI design and illustration, with
            extensive experience in Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque excepturi impedit, aperiam illum maxime quisquam, maiores vero placeat veritatis sed libero nemo perferendis cum tempore iure dicta, debitis accusantium quis.
          </AppShowMoreToggle>
        </div>
      </div>
    </section>
  );
}
