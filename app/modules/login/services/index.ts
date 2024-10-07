import { LOGIN_API_URL } from "@/constants/api";
import { loginUserPort } from "@modules/login/domain/login";

console.log(LOGIN_API_URL);
export const loginUserService: loginUserPort = async (data) => {
  try {
    const response = await fetch(LOGIN_API_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }).then((r) => r.json());
    // console.log(response);

    if (!response.header.success) {
      return {
        data: null,
        error: response.header.messages,
      };
    } else {
      return {
        data: response,
        error: null,
      };
    }

    // if (response.errors) {
    //   const errors = response.errors;
    //   for (const error in errors) {
    //     setError(error as any, {
    //       message: errors[error],
    //     });
    //   }
    //   return;
    // }
  } catch (error) {
    console.error(error);
    return {
      data: null,
      error: error,
    };
  }
};
