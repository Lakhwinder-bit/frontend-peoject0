import apiClient from "@/shared/lib/apiclient";

export async function getFleetsAdmin() {
  const response = await apiClient.get("/admin/adminFeed");
  return response.data;
}
