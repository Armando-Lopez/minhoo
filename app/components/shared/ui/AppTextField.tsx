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
  console.error("NO USAR ESTE COMPONENTE. USER /shared/ui/input.tsx");
  const hasError = !!errorsMessage;
  return (
    <div>
      <label htmlFor={id} className="text-gray-1">{ label }</label>
      <div
        className={`flex px-1 items-center w-full bg-transparent border-b-2 ${
          hasError ? "border-red-1" : "border-gray-300"
        }`}
      >
        <input
          className="block py-3 w-full bg-transparent border-none appearance-none focus:outline-none focus:ring-0"
          ref={ref}
          name={name}
          id={id}
          {...rest}
        />
      </div>
      {errorsMessage && <span className="ml-2 text-red-1">{errorsMessage}</span>}
    </div>
  );
});
