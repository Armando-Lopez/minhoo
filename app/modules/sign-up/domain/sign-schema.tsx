import { z } from "zod";

export type signUpInterface = {
  name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
};

export const signUpFormSchema = z
  .object({
    name: z.string().min(3, {
      message: "Name must be at least 3 characters.",
    }),
    last_name: z.string().min(3, {
      message: "Last name must be at least 3 characters.",
    }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().min(8, {
      message: "Phone must be at least 8 characters.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirm_password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });
