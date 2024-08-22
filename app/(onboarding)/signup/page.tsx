"use client";
import { SignUpForm } from "@/modules/signup/components/SignupForm";
import { SignUpSuccess } from "@/modules/signup/components/SignUpSuccess";
import React, { useState } from "react";

export default function SignUp() {
  const [hasSignUpSuccess, setHasSignUpSuccess] = useState(false);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
      {hasSignUpSuccess ? (
        <SignUpSuccess />
      ) : (
        <SignUpForm onSuccess={() => setHasSignUpSuccess(true)} />
      )}
    </div>
  );
}
