"use client";

import { useForm } from "react-hook-form";
import AppTextField from "@/components/shared/form/AppTextField";
import AppButton from "../shared/AppButton";

export default function LoginForm() {
  type Inputs = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>();

  function onSubmit(data: Inputs) {
    console.log(data);
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <AppTextField
          id="email"
          placeholder="Phone, user or email"
          {...register("email", {
            required: {
              value: true,
              message: "This field is required",
            },
          })}
          errorsMessage={errors.email?.message}
        />
      </div>
      <div className="mb-5">
        <AppTextField
          id="password"
          placeholder="Password"
          {...register("password", {
            required: {
              value: true,
              message: "This field is required",
            },
          })}
          errorsMessage={errors.password?.message}
        />
      </div>
      <AppButton
        id="login"
        name="login"
        className="w-full py-3 rounded-xl bg-primary-1 text-white font-bold"
        type="submit"
        disabled={!isValid}
      >
        Login
      </AppButton>
    </form>
  );
}
