import apiClient from "@/shared/lib/apiclient";


export const getRoutes = async()=>{
    const res = await apiClient.get("/api/route");
    return res.data.data
}