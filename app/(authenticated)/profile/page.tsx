import ProfileBasicInformation from "@/components/profile/ProfileBasicInformation";
import ProfileEdit from "@/components/profile/ProfileEdit";
import ProfilePosts from "@/components/profile/ProfilePosts";
import React from "react";

export default function Profile() {
  return (
    <div className="px-14 pt-10">
      <ProfileBasicInformation />
      <ProfileEdit />
      <ProfilePosts />
    </div>
  );
}
