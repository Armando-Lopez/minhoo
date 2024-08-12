import React from "react";
import { ProfileUser } from "@/modules/profile/components/ProfileUser";

export default function Profile() {
  return (
    <div className="h-dvh hide-scroll-bar overflow-auto">
      <ProfileUser />
    </div>
  );
}
