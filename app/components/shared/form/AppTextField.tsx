import React, { ComponentPropsWithRef, forwardRef } from "react";

interface Props extends ComponentPropsWithRef<"input"> {
  id: string;
  name: string;
  label?: string | React.ReactNode;
  errorsMessage?: string;
}
type Ref = HTMLInputElement;

export default forwardRef<Ref, Props>(function AppTextField(
  { id, name, label, errorsMessage, ...rest },
  ref
) {
  const hasError = !!errorsMessage;
  return (
    <div>
      <div
        className={`flex px-1 items-center w-full bg-transparent rounded-lg border-2 ${
          hasError ? "border-red-1" : "border-gray-300"
        }`}
      >
        <label htmlFor={id}>{ label }</label>
        <input
          className="block p-3 w-full bg-transparent border-none appearance-none focus:outline-none focus:ring-0"
          ref={ref}
          name={name}
          id={id}
          {...rest}
        />
      </div>
      <span className="ml-2 text-red-1">{errorsMessage}</span>
    </div>
  );
});
