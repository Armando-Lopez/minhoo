"use client";

import { useForm } from "react-hook-form";
import AppTextField from "@/components/shared/ui/AppTextField";
import AppButton from "@/components/shared/AppButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { TSignInSchema, signInSchema } from "@/modules/login/domain/login";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  async function onSubmit(data: TSignInSchema) {
    const response = await fetch("api/signin", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }).then((r) => r.json());
    if (response.errors) {
      const errors = response.errors;
      for (const error in errors) {
        setError(error as any, {
          message: errors[error],
        });
      }
      return;
    }
    router.push("/home/news");
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <AppTextField
          id="email"
          placeholder="Phone, user or email"
          {...register("email")}
          errorsMessage={errors.email?.message}
        />
      </div>
      <div className="mb-5">
        <AppTextField
          id="password"
          placeholder="Password"
          {...register("password")}
          errorsMessage={errors.password?.message}
        />
      </div>
      <AppButton
        id="login"
        title="login"
        className="w-full py-3 rounded-xl bg-primary-1 text-white font-bold"
        type="submit"
        disabled={isSubmitting}
      >
        Login
      </AppButton>
    </form>
  );
}
