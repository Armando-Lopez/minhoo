import AppButton from "@/components/shared/AppButton";
import AppIcon from "@/components/shared/AppIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ShiftsDescription = () => {
  return (
    <div className="w-[477px] hide-scroll-bar">
      <p className="font-bold pt-4 pb-2 border-b border-gray-2 px-4">Shifts</p>
      <div className="px-4">
        <div className="flex items-center gap-5 mt-5">
          <Image
            src="/team/wildelmy-colina.jpg"
            alt=""
            width="60"
            height="60"
            className="rounded-full mb-5"
          />
          <div>
            <p className="font-bold">Mare Kosward</p>
            <p className="text-primary-1">Score 5.0</p>
          </div>
        </div>
        <p className="text-gray-3">Posted 1 hour ago</p>
        <div className="flex items-center gap-2">
          <AppIcon icon="building" className="text-primary-1 text-lg" />
          <p className="text-primary-1 my-5">On-site services</p>
        </div>
        <p>
          Category: <span className="font-bold"> Handyman</span>
        </p>
        <p className="my-5">
          I need a person with plumbing skills to fix my house. Opportunity to
          refer neighbors if the work is good. Hope to meet you soon.
        </p>
        <div className="flex items-center gap-2 mb-5">
          <AppIcon icon="location" className="text-2xl text-gray-3" />
          <p className="">Carindale QLD</p>
        </div>
        <div className="flex items-center gap-2 mb-16">
          <AppIcon icon="dollar" className="text-2xl text-gray-3" />
          <p className="text-gray-3">
            Price <span className="text-primary-1 font-bold">$35.00</span> /per
            hour
          </p>
        </div>
      </div>
      <div className="border-t border-gray-3 p-4">
        <Link href="/chat">
          <AppButton
            title="Go to chat"
            className="w-full bg-primary-1 rounded-full flex justify-center items-center py-3 text-white gap-2"
          >
            <AppIcon icon="chat" className="text-2xl" />
            <span>Go to chat</span>
          </AppButton>
        </Link>
      </div>
    </div>
  );
};
