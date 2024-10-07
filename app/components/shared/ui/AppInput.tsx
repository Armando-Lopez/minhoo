import * as React from "react";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import AppIcon from "../AppIcon";

const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-gray-3 bg-transparent px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        underline: "rounded-none border-0 border-b",
        search:
          "border-0 pl-2 focus-visible:ring-offset-transparent focus-visible:ring-transparent",
        "no-border": "border-0",
      },
    },
  }
);

console.error("NO USAR ESTE COMPONENTE. USER /shared/ui/inpput.tsx");

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <div className="flex items-center flex-grow">
        {type === "search" && (
          <AppIcon icon="search" className="text-gray-500" />
        )}
        <input
          type={type}
          className={cn(inputVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
