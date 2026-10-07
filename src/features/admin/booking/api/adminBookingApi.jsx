import { getAdminServerClient } from "@/features/admin/adminShared/api/adminServerClient";

export async function getServerBookings() {
  const api = await getAdminServerClient();
  const response = await api.get("/admin/bookings");
  return response.data;
}