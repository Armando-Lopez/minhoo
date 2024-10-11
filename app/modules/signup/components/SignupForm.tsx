"use client";
import React from "react";
import { useSignUpStore } from "@/modules/signup/store";
import { SignUpFormValidateEmail } from "@modules/signup/components/SignUpFormValidateEmail";
import { SignUpFormVerifyEmail } from "@modules/signup/components/SignUpFormVerifyEmail";
import { SignUpFormUploadInformation } from "@modules/signup/components/SignUpFormUploadInformation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@components/shared/ui/AppCard";

export const SignUpForm = () => {
  const step = useSignUpStore((state) => state.step);
  const signUpForm = useSignUpStore((state) => state.form);
  console.log(signUpForm);
  

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-sm text-center">
          Register and be part of the{" "}
          <span className="text-primary-1">community</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {step === 1 && <SignUpFormValidateEmail />}
        {step === 2 && <SignUpFormVerifyEmail />}
        {step === 3 && <SignUpFormUploadInformation />}
      </CardContent>
    </Card>
  );
};
