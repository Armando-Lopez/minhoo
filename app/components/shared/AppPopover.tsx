import { Popover, PopoverProps } from "flowbite-react";
import React from "react";

export default function AppPopover({
  children,
  content,
  placement,
}: PopoverProps) {
  return (
    <Popover
      placement={placement}
      arrow={false}
      aria-labelledby="options-popover"
      content={content}
    >
      {children}
    </Popover>
  );
}
