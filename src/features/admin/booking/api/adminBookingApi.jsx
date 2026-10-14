import { getAdminServerClient } from "@/features/admin/adminShared/api/adminServerClient";

export async function getServerBookings() {
  try {
    const api = await getAdminServerClient();

    const response = await api.get("/admin/bookings");

    return response.data;
  } catch (error) {
    console.error(
      "Failed to fetch admin bookings:",
      error.response?.status,
      error.response?.data || error.message
    );

    throw error;
  }
}