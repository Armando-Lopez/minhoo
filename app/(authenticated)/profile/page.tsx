import React from "react";
import { ProfileUser } from "@/modules/profile/components/ProfileUser";
import { redirect } from "next/navigation";

export default function Profile() {
  redirect("newsletter");
  return (
    <div className="h-dvh hide-scroll-bar overflow-auto">
      <ProfileUser />
    </div>
  );
}
