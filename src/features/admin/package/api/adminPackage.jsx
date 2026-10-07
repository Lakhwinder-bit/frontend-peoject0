import apiClient from "@/shared/lib/apiclient";

export async function createPackageAdmin(packageForm) {
  const response = await apiClient.post("/admin/createPackage", packageForm);
  return response.data;
}

export async function updatePackageAdmin(id, packageData) {
  const response = await apiClient.put(`/admin/package/${id}`, packageData);
  return response.data;
}

export async function deletePackageAdmin(id) {
  const response = await apiClient.delete(`/admin/package/${id}`);
  return response.data;
}