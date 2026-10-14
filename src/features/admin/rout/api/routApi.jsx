import apiClient from "@/shared/lib/apiclient";

export async function getRoutes() {
  const response = await apiClient.get("/admin/adminRoutes");
  return response.data;
}