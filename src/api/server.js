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
    

    return res.data;
  } catch (error) {
 console.log(error)

    throw error;
  }
}

export async function getRoutes(){
    try {
    const api = await getServerApi();

    const res = await api.get("/admin/adminRoutes");
    return res.data;
  } catch (error) {
   console.log(error)

    throw error;
  }
}

export async function getFleetsAdmin() {
    try {
    const api = await getServerApi();

    const res = await api.get("/admin/adminFeed");
    return res.data;
  } catch (error) {
   console.log(error)

    throw error;
  }
}

export async function getPackageAdmin(){
    try {
    const api = await getServerApi();

    const res = await api.get("/admin/adminPackage");
    return res.data;
  } catch (error) {
   console.log(error)

    throw error;
  }
}

