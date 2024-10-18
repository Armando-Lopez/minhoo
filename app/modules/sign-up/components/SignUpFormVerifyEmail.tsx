import React from "react";
import { useForm } from "react-hook-form";
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
import {
  verifyEmailService,
  verifyEmailFormData,
  verifyEmailSchema,
} from "@/modules/sign-up/services/verify-email-service";
import { useSignUpStore } from "@/modules/sign-up/store";
import { useToast } from "@/components/shared/hooks/use-toast";

export const SignUpFormVerifyEmail = () => {
  const { toast } = useToast();
  const signUpForm = useSignUpStore((state) => state.form);

  const form = useForm<verifyEmailFormData>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: {
      code: "",
      email: signUpForm.email,
    },
  });

  const onSubmit = async (formData: verifyEmailFormData) => {
    const { data, error } = await verifyEmailService(formData);
    if (error) {
      toast({
        title: "Ups!",
        description: error.messages.at(-1),
        variant: "destructive",
      });
      return;
    }
    if (data?.header.success) {
      useSignUpStore.setState((state) => ({
        ...state,
        step: 3,
      }));
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Verification code</FormLabel>
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
