import apiClient from "@/lib/apiclient";

export const getPackage = async ()=>{
    const res = await apiClient.get("/package");

    return res.data;
}