"use client";
import React, { ComponentPropsWithRef, forwardRef } from "react";
import { useFormStatus } from "react-dom";

/** 
A Custom button component that supports real button attrs and loading state.
@param {Props} props - Component props
@param {boolean} loading - Indicates if the button is in a loading state
*/
export default forwardRef<Ref | null, Props>(function AppButton(
  { children, id, name, title, ...rest },
  ref
) {
  const { pending } = useFormStatus();
  return (
    <button
      ref={ref}
      id={id}
      name={name}
      disabled={pending}
      title={title}
      {...rest}
    >
      {children}
    </button>
  );
});

interface Props extends ComponentPropsWithRef<"button"> {
  id?: string;
  name?: string;
  title: string;
}
type Ref = HTMLButtonElement;
