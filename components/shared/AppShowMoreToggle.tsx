import React from "react";

export default function AppShowMoreToggle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <input id="hide-description" type="checkbox" className="hidden peer" />
      <p className="overflow-hidden relative max-h-12 text-ellipsis before:absolute before:bottom-0 before:w-full before:h-1/2 before:bg-gradient-to-t before:from-white before:pointer-events-none peer-checked:max-h-[500vh] peer-checked:before:opacity-0">
        {children}
      </p>
      <label
        id="view-description"
        htmlFor="hide-description"
        className="text-gray-1 cursor-pointer [&_.less]:hidden peer-checked:[&_.less]:block peer-checked:[&_.more]:hidden"
        tabIndex={0}
      >
        <span className="more"> ...more </span>
        <span className="less"> less </span>
      </label>
    </>
  );
}
