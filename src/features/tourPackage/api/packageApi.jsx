import apiClient from "@/shared/lib/apiclient";

export const getPackage = async ()=>{
    const res = await apiClient.get("/api/package");

    return res.data.data;
}