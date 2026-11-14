import apiClient from "@/shared/lib/apiclient";

export async function chatBotAPi(data) {
  const response = await apiClient.post("/api/chatbot",data);
  return response.data;
}
