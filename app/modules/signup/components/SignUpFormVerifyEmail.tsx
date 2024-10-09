import React from "react";
import { useForm } from "react-hook-form";
import { verifyEmailFormData, verifyEmailSchema } from "@/modules/signup/domain";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shared/ui/form";
import { Input } from "@/components/shared/ui/input";
import { Button } from "@/components/shared/ui/button";
import { validateEmailService } from "@/modules/signup/services";

export const SignUpFormVerifyEmail = () => {
  const form = useForm<verifyEmailFormData>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: {
      code: "",
      email: "",
    },
  });

  const onSubmit = async (data: verifyEmailFormData) => {
    const response = await validateEmailService(data);
    console.log(response);
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>code</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Get start</Button>
      </form>
    </Form>
  );
};
