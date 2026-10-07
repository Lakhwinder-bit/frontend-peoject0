import { getAdminServerClient } from "@/features/admin/adminShared/api/adminServerClient";

export async function getRoutes() {
  const api = await getAdminServerClient();
  const response = await api.get("/admin/adminRoutes");
  return response.data;
}