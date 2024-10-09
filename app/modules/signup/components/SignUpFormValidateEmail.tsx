import React from "react";
import { useForm } from "react-hook-form";
import {
  validateEmailFormData,
  validateEmailSchema,
} from "@/modules/signup/domain/index";
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

// eslint-disable-next-line no-unused-vars
export const SignUpFormValidateEmail = ({ onSuccess }: { onSuccess: (data: any) => void }) => {
  const form = useForm<validateEmailFormData>({
    resolver: zodResolver(validateEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: validateEmailFormData) => {
    const response = await validateEmailService(data);
    console.log(onSuccess);
    
    // onSuccess(response);
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
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
        <Button type="submit">Get start</Button>
      </form>
    </Form>
  );
};
