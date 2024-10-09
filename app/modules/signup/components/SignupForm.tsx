"use client";
import { SignUpFormValidateEmail } from "@modules/signup/components/SignUpFormValidateEmail";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@components/shared/ui/AppCard";
import React from "react";

export const SignUpForm = () => {

  const [step, setStep] = React.useState(1);
  // const form = useForm<z.infer<typeof signUpFormSchema>>({
  //   resolver: zodResolver(signUpFormSchema),
  //   defaultValues: {
  //     name: "",
  //     last_name: "",
  //     email: "",
  //     password: "",
  //     confirm_password: "",
  //   },
  // });

  // async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
  //   const { data } = await signUpService(values);
  //   if (data?.header?.success) {
  //     onSuccess();
  //     return;
  //   }
  //   if (data?.header?.success === false) {
  //     form.setError("confirm_password", { message: data?.header?.messages[0] });
  //   }
  // }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-sm text-center">
          Register and be part of the{" "}
          <span className="text-primary-1">community</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        { step === 1 && <SignUpFormValidateEmail onSuccess={() => setStep(2)} /> }
      </CardContent>
    </Card>
  );
};
