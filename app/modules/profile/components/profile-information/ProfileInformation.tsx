import React from "react";
import ProfileBasicInformation from "./ProfileBasicInformation";
import ProfilePosts from "./ProfilePosts";
import AppButton from "@/components/shared/AppButton";
import { AppSwitch } from "@/components/shared/ui/AppSwitch";

export const ProfileInformation = ({ toggleEdit }: Props) => {
  return (
    <div className="px-14 mt-5">
      <ProfileBasicInformation />
      <div className="flex justify-between items-center my-7">
        <p>Profile 100% complete</p>
        <AppButton
          title="edit profile"
          className="px-4 py-1 bg-black-1 text-white rounded-full"
          onClick={() => toggleEdit(true)}
        >
          Edit profile
        </AppButton>
        <div className="flex items-center gap-2">
          Available Talent
          <AppSwitch />
        </div>
      </div>
      <ProfilePosts />
    </div>
  );
};

type Props = {
  // eslint-disable-next-line no-unused-vars
  toggleEdit: (value: boolean) => void;
}