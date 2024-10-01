import Image from "next/image";
import React from "react";

export default function ProfilePostsItem() {
  return (
    <div>
      <Image
        src="/team/wildelmy-colina.jpg"
        className=""
        alt="user-photo"
        width={202}
        height={203}
        loading="lazy"
      />
    </div>
  );
}
