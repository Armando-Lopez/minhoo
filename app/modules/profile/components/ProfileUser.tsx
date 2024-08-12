"use client";
import React, { useState } from "react";
import { ProfileInfirmation } from "./profile-information/ProfileInfirmation";
import { ProfileEdit } from "./edit-profile/ProfileEdit";

export const ProfileUser = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  return (
    <div>
      {isEditingProfile ? (
        <ProfileEdit toggleEdit={(val) => setIsEditingProfile(val)} />
      ) : (
        <ProfileInfirmation toggleEdit={(val) => setIsEditingProfile(val)} />
      )}
    </div>
  );
};
