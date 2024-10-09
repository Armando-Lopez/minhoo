import { z } from "zod";

export const validateEmailSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});

export type validateEmailFormData = z.infer<typeof validateEmailSchema>;

// eslint-disable-next-line no-unused-vars
export type validateEmailPort = (data: validateEmailFormData) => Promise<{
  error: any;
  data: any;
}>;

// ######
export const verifyEmailSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  code: z.string({ message: "Invalid code." }).min(1, { message: "code is required" }),
});
export type verifyEmailFormData = z.infer<typeof verifyEmailSchema>;

// eslint-disable-next-line no-unused-vars
export type verifyEmailPort = (data: verifyEmailFormData) => Promise<{
  error: any;
  data: any;
}>