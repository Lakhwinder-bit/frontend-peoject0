"use server";

import apiClient from "@/lib/apiclient";
import { cookies } from "next/headers";

export async function LoginAction(data) {
  const { email, password } = data;

  if (!email || !password) {
    return {
      success: false,
      message: "Email and password are required",
    };
  }

  try {
    const response = await apiClient.post("/auth/login", {
      email,
      password,
    });

    // Get Set-Cookie from backend response
    const setCookie = response.headers["set-cookie"];

    console.log("BACKEND SET COOKIE:", setCookie);

    if (setCookie?.length) {
      const cookieStore = await cookies();

      // Example: extract access_token
      const cookieString = setCookie[0];

      const token = cookieString
        .split(";")[0]
        .split("=")
        .slice(1)
        .join("=");

      cookieStore.set("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      });
    }

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("LOGIN ERROR:", error?.response?.data);

    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Login failed",
    };
  }
}