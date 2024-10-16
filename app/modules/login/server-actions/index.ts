"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const setAuthCookies = async (cookiesData: Array<any>) => {
  cookiesData.forEach((cookie) => {
    cookies().set(cookie.name, cookie.value, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
  });
  redirect("/app/news");
};
