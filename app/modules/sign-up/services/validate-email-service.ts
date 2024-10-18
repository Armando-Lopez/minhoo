import { z } from "zod";
import { VALIDATE_EMAIL_API_URL } from "@/modules/sign-up/constants";

export const validateEmailSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});

export type validateEmailFormData = z.infer<typeof validateEmailSchema>;

// eslint-disable-next-line no-unused-vars
export type validateEmailPort = (data: validateEmailFormData) => Promise<{
  error: {
    messages: string[];
  } | null;
  data: {
    code: number;
    email: string;
    created: string;
  } | null;
}>;

export const validateEmailService: validateEmailPort = async (data) => {
  try {
    const response = await fetch(VALIDATE_EMAIL_API_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    }).then((r) => r.json());
    if (!response.header.success) {
      return {
        data: null,
        error: {
          messages: response.header.messages,
        },
      };
    }
    return {
      error: null,
      data: response.body,
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
