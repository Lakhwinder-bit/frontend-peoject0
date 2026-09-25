import "server-only";

import axios from "axios";
import { cookies } from "next/headers";

const SERVER_API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function getServerApi() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  console.log("========== SERVER API ==========");
  console.log("ACCESS TOKEN EXISTS:", !!accessToken);

  return axios.create({
    baseURL: SERVER_API_URL,

    headers: {
      Cookie: accessToken
        ? `accessToken=${accessToken}`
        : "",
    },
  });
}

export async function getServerBookings() {
  try {
    const api = await getServerApi();

    const res = await api.get("/admin/bookings");

    console.log("BOOKINGS STATUS:", res.status);
    console.log("BOOKINGS DATA:", res.data);

    return res.data;
  } catch (error) {
    console.log("========== BOOKINGS SERVER ERROR ==========");

    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);
    console.log("URL:", error.config?.url);

    throw error;
  }
}