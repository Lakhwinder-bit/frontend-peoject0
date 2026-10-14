// import { getAdminServerClient } from "@/features/admin/adminShared/api/adminServerClient";
import apiClient from "@/shared/lib/apiclient";

export async function getAdminBookings() {
  try {
    const response = await apiClient.get("/admin/bookings");

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