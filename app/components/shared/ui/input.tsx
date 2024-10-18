"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import AppIcon from "../AppIcon";
import { VariantProps, cva } from "class-variance-authority";

const inputVariants = cva(
  "flex gap-2 h-10 w-full rounded-md border border-neutral-200 bg-transparent p-2 text-sm ring-offset-white focus-within:outline-none focus-within:ring-2 focus-within:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-within:ring-neutral-300",
  {
    variants: {
      variant: {
        default: "",
      },
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
      appendInner?: React.ReactNode,
      prependInner?: React.ReactNode,
    }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, appendInner, prependInner, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

    const togglePasswordVisibility = () =>
      setIsPasswordVisible(!isPasswordVisible);

    return (
      <div
        className={cn(
          inputVariants({ className, variant }),
          props["aria-invalid"] ? "ring-red-1 ring-2" : ""
        )}
      >
        {prependInner}
        <input
          type={isPasswordVisible ? "text" : type}
          className="bg-transparent outline-none w-full file:border-0 file:bg-transparent disabled:cursor-not-allowed"
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <button type="button" onClick={togglePasswordVisibility}>
            <AppIcon
              icon={isPasswordVisible ? "eye" : "eye-off"}
              width={24}
            />
          </button>
        )}
        {appendInner}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
