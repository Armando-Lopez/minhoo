import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/shared/ui/input";
import { Button } from "@/components/shared/ui/button";
import { useSignUpStore } from "@/modules/sign-up/store";
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
} from "@/modules/sign-up/services/validate-email-service";
import { useToast } from "@/components/shared/hooks/use-toast";

export const SignUpFormValidateEmail = () => {
  const { toast } = useToast();

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
    const { error } = await validateEmailService(data);
    if (error) {
      form.setError("email", { message: error.messages.at(-1) });
      toast({
        title: "Ups!",
        description: error.messages.at(-1),
        variant: "destructive",
      });
      return;
    }
    setStep(2);
    setForm({
      ...signUpForm,
      email: data.email,
    });
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
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          Next
        </Button>
      </form>
    </Form>
  );
};
