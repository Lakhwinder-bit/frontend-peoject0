import { getAdminServerClient } from "@/features/admin/adminShared/api/adminServerClient";

export async function getFleetsAdmin() {
  const api = await getAdminServerClient();
  const response = await api.get("/admin/adminFeed");
  return response.data;
}
