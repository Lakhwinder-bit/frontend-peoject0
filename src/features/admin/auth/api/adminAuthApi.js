import apiClient from "@/shared/lib/apiclient";

export async function adminLogin(data) {
  const response = await apiClient.post("/auth/login", data);
  return response.data;
}

export async function getCurrentAdmin() {
  const response = await apiClient.get("/auth/me");
  return response.data;
}

export async function adminLogout() {
  const response = await apiClient.post("/auth/logout");
  return response.data;
}

export async function refreshAdminAccessToken() {
  const response = await apiClient.get("/auth/refresh");
  return response.data;
}
