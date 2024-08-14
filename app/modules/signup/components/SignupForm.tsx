"use client";
import { AppButton } from "@components/shared/ui/AppButton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@components/shared/ui/AppCard";
import { Input } from "@components/shared/ui/AppInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signUpFormSchema } from "../domain/sign-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/shared/ui/form";
import { sigUpService } from "../services/sign-up";

export const SignUpForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    const { data } = await sigUpService(values);
    console.log(data);
    if (data?.header?.success) {
      onSuccess();
      return
    }
    if (data?.header?.success === false) {
      form.setError("confirm_password", { message: data?.header?.messages[0] });
      return
    }
    
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-sm text-center">
          Register and be part of the{" "}
          <span className="text-primary-1">community</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3"
            autoComplete="off"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      className="py-6"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Last name"
                      className="py-6"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      className="py-6"
                      {...field}
                    />
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
                      className="py-6"
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
                      className="py-6"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-center">
              By registering you agree to our terms and conditions, privacy
              policy and cookie policy.
            </p>
            <AppButton type="submit" className="w-full py-6">
              Register
            </AppButton>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
