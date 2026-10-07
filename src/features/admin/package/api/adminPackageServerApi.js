import { getAdminServerClient } from "@/features/admin/adminShared/api/adminServerClient";

export async function getPackageAdmin() {
  const api = await getAdminServerClient();
  const response = await api.get("/admin/adminPackage");
  return response.data;
}
