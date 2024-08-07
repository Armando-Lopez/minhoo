import ProfileBasicInformation from "@/modules/profile/components/ProfileBasicInformation";
import ProfilePosts from "@/modules/profile/components/ProfilePosts";
import ProfileEdit from "@/modules/profile/components/ProfileEdit";
import React from "react";

export default function Profile() {
  return (
    <div className="px-14 pt-10 h-dvh hide-scroll-bar overflow-auto">
      <ProfileBasicInformation />
      <ProfileEdit />
      <ProfilePosts />
    </div>
  );
}
