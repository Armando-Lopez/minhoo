"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getAuthToken = async () => {
  const authToken = await cookies().get("auth_token")?.value;
  if (!authToken) {
    redirect("/");
  }
  return authToken;
};
