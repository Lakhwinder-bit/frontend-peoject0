import apiClient from "@/lib/apiclient";

export const  adminLogin = async(data) => {
const res = await apiClient.post("/auth/login",data);
return res.data
}