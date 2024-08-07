import React from "react";
import ProfilePostsItem from "./ProfilePostsItem";

export default function ProfilePosts() {
  return (
    <div>
      <div className="grid grid-cols-3">
        <ProfilePostsItem />
        <ProfilePostsItem />
        <ProfilePostsItem />
      </div>
    </div>
  );
}
