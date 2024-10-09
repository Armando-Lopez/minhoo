"use client";
import { SignUpForm } from "@/modules/signup/components/SignupForm";
import React from "react";

export default function SignUp() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
      <SignUpForm />
    </div>
  );
}
