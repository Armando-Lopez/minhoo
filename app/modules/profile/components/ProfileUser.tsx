"use client";
import React, { useState } from "react";
import { ProfileInformation } from "./profile-information/ProfileInformation";
import { ProfileEdit } from "./edit-profile/ProfileEdit";

export const ProfileUser = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  return (
    <div>
      {isEditingProfile ? (
        <ProfileEdit toggleEdit={(val) => setIsEditingProfile(val)} />
      ) : (
        <ProfileInformation toggleEdit={(val) => setIsEditingProfile(val)} />
      )}
    </div>
  );
};
