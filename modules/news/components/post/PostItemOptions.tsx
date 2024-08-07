import AppButton from "@components/shared/AppButton";
import React from "react";

export default function PostItemOptions() {
  return (
    <div className="w-96 p-8 rounded-xl">
      <p className="mb-4 text-center font-semibold">Options</p>
      <div className="flex flex-col gap-3">
        <AppButton title="report post" className="w-fit">Report</AppButton>
        <AppButton title="block post" className="w-fit text-red-1">Block</AppButton>
      </div>
    </div>
  );
}
