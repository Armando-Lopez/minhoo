"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const setAuthToken = async (data: any) => {
  cookies().set("auth_token", data.body.user.auth_token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });
  redirect("/app/news");
};
