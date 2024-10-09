import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required."),
  password: z.string().min(1, "Password is required."),
});

export type loginFormData = z.infer<typeof loginSchema>;

// eslint-disable-next-line no-unused-vars
export type loginUserPort = (data: loginFormData) => Promise<{
  error: any;
  data: any;
}>;
