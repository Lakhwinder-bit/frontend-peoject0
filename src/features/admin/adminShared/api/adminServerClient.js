import "server-only";

import axios from "axios";
import { cookies } from "next/headers";

const SERVER_API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function getAdminServerClient() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  return axios.create({
    baseURL: SERVER_API_URL,
    headers: {
      Cookie: accessToken ? `accessToken=${accessToken}` : "",
    },
  });
}
