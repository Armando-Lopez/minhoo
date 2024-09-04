"use client";
import { Button } from "@components/shared/ui/Button";
import { Input } from "@components/shared/ui/AppInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signUpFormSchema } from "@modules/signup/domain/sign-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/shared/ui/form";
import { signUpService } from "@modules/signup/services/sign-up";
import { useState } from "react";
import { SignUpSuccess } from "@/modules/signup/components/SignUpSuccess";

export const NewsLetterSubscribeFrom = () => {
  const [hasSubmit, setHasSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    if (isLoading) return;
    setIsLoading(true);
    const { data } = await signUpService(values);
    if (data?.header?.success) {
      setHasSubmit(true);
      setIsLoading(false);
      return;
    }
    if (data?.header?.success === false) {
      form.setError("confirm_password", { message: data?.header?.messages[0] });
    }
  }

  if (hasSubmit) {
    return <SignUpSuccess />;
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-3"
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormControl>
                <Input placeholder="Name" className="py-4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormControl>
                <Input placeholder="Last name" className="py-4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormControl>
                <Input placeholder="Email" className="py-4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormControl>
                <Input placeholder="Phone" className="py-4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Password"
                  className="py-4"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Confirm password"
                  className="py-4"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-2">
          <Button type="submit" className="w-full py-4">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
