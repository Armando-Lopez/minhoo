"use client";
import React from "react";


/** 
* @component **AppSwitch**: Use switch to toggle values  
* 
* @param {Props} props - Component props
* @param {string} props.id - required id
* @param {boolean} props.checked - whether checked or no
*/
export default function AppSwitch({
  id,
  checked,
  onChange,
}: Props) {
  return (
    <label
      htmlFor={id}
      tabIndex={0}
      className={`relative block flex-grow w-[51px] h-[31px] p-1 rounded-full cursor-pointer transition-all
      ${checked ? "bg-primary-1" : "bg-gray-300"}`}
    >
      <input
        type="checkbox"
        className="hidden"
        name={id}
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span
        className={`absolute block w-1/2 aspect-square rounded-full top-1/2 -translate-y-1/2 drop-shadow bg-white transition-all
        ${checked ? "right-1" : "left-1"}`}
      ></span>
    </label>
  );
}

interface Props {
  id: string;
  checked: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: boolean) => void;
}