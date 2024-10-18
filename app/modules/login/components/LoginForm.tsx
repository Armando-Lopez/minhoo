"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/shared/ui/input";
import { loginFormData, loginSchema } from "@/modules/login/domain/login";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shared/ui/form";
import { Button } from "@/components/shared/ui/button";
import { loginUserService } from "@/modules/login/services";
import { setAuthCookies } from "@/modules/login/server-actions";

export default function LoginForm() {
  const form = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: loginFormData) {
    const { data: response, error } = await loginUserService(data);
    if (error) {
      form.setError("email", { message: error[0] });
      form.setError("password", { message: error[0] });
      return;
    }
    setAuthCookies([
      {
        name: "auth_token",
        value: response.body.user.auth_token,
      },
    ]);
  }

  return (
    <Form {...form}>
      <form
        className="space-y-4"
        autoComplete="off"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          id="login"
          title="login"
          className="w-full py-3 rounded-xl bg-primary-1 text-white font-bold"
          type="submit"
          // disabled={isSubmitting}
        >
          Login
        </Button>
      </form>
    </Form>
  );
}
