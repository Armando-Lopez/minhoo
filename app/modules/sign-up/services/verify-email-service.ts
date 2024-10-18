import { z } from "zod";
import { VERIFY_EMAIL_API_URL } from "@/modules/sign-up/constants";

export const verifyEmailSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  code: z
    .string({ message: "Invalid code." })
    .min(1, { message: "code is required" }),
});

export type verifyEmailFormData = z.infer<typeof verifyEmailSchema>;
// eslint-disable-next-line no-unused-vars
export type verifyEmailPort = (data: verifyEmailFormData) => Promise<{
  error: {
    messages: string[];
  } | null;
  data: any;
}>;

export const verifyEmailService: verifyEmailPort = async (data) => {
  try {
    const response = await fetch(VERIFY_EMAIL_API_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    }).then((r) => r.json());
    
    if (!response.header.success) {
      return {
        error: {
          messages: response.header.messages,
        },
        data: null,
      };
    }
    return {
      error: null,
      data: response,
    };
  } catch (error) {
    return {
      error: {
        messages: [error],
      },
      data: null,
    };
  }
};
