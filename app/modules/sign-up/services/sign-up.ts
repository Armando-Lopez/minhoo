import { signUpInterface } from "@/modules/sign-up/domain/sign-schema";

export const signUpService = async (data: signUpInterface) => {
  const response = await fetch("api/signup", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  }).then((r) => r.json());
  return response;
};
