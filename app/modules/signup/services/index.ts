import { validateEmailPort, verifyEmailPort } from "@modules/signup/domain";
import { VALIDATE_EMAIL_API_URL, VERIFY_EMAIL_API_URL } from "@modules/signup/constants";

export const validateEmailService: validateEmailPort = async (data) => {
  try {
    const response = await fetch(VALIDATE_EMAIL_API_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    }).then((r) => r.json());
    return response;
  } catch (error) {
    return error;
  }
};

export const verifyEmailService: verifyEmailPort = async (data) => {
  try {
    const response = await fetch(VERIFY_EMAIL_API_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    }).then((r) => r.json());
    return response;
  } catch (error) {
    return error;
  } 
}
