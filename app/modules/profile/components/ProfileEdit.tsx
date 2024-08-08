import React from "react";
import AppButton from "@/components/shared/AppButton";
import { AppSwitch } from "@/components/shared/ui/AppSwitch";

export default function ProfileEdit() {
  return (
    <div className="flex justify-between my-7">
      <p>Profile 100% complete</p>
      <AppButton
        title="edit profile"
        className="px-4 bg-black-1 text-white rounded-full"
      >
        Edit profile
      </AppButton>
      <div className="flex items-center gap-2">
        Available Talent
        <AppSwitch />
      </div>
    </div>
  );
}
