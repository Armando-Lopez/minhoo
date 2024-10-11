import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/shared/ui/input";
import { Button } from "@/components/shared/ui/button";
import { useSignUpStore } from "@/modules/signup/store";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shared/ui/form";
import {
  validateEmailService,
  validateEmailSchema,
  validateEmailFormData,
} from "@/modules/signup/services/validate-email-service";

export const SignUpFormValidateEmail = () => {
  const setStep = useSignUpStore((state) => state.setStep);
  const setForm = useSignUpStore((state) => state.setForm);
  const signUpForm = useSignUpStore((state) => state.form);

  const form = useForm<validateEmailFormData>({
    resolver: zodResolver(validateEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: validateEmailFormData) => {
    const { data: response, error } = await validateEmailService(data);
    if (error) {
      console.error(error);
      return;
    }
    if (response?.header.success) {
      setStep(2);
      setForm({
        ...signUpForm,
        email: data.email,
      });
    }
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
        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
};
