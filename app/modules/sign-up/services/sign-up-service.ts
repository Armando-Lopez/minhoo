import { z } from "zod";
import { SIGNUP_API_URL } from "@/modules/sign-up/constants";

export const signUpSchema = z
  .object({
    name: z.string().min(3, {
      message: "Name must be at least 3 characters.",
    }),
    lastName: z.string().min(3, {
      message: "Last name must be at least 3 characters.",
    }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type signUpFormData = z.infer<typeof signUpSchema>;

// eslint-disable-next-line no-unused-vars
type signUpPort = (data: FormData) => Promise<{
  data: any;
  error: any;
}>;

export const signUpService: signUpPort = async (data: FormData) => {
  try {
    const response = await fetch(SIGNUP_API_URL, {
      method: "POST",
      body: data,
    }).then((r) => r.json());
    if (!response.header.success) {
      return {
        data: null,
        error: response.header.messages,
      };
    }
    return {
      data: response.body,
      error: null,
    };
  } catch (error) {
    return {
      error: error,
      data: null,
    };
  }
};
