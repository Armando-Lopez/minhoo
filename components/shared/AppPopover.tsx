import { Popover, PopoverProps } from "flowbite-react";
import React from "react";

/** 
Use the popover component to show detailed information inside a pop-up box
relative to the element that is being clicked or hovered.
@param {PopoverProps} props - Component props
@see {@link https://flowbite-react.com/docs/components/popover flowbite-react/popover}
*/
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
