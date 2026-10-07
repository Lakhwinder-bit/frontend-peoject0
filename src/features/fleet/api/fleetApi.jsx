import apiClient from "@/shared/lib/apiclient";


export const getFeeds = async()=>{
    const res = await apiClient.get("/api/feeds");
    return res.data.data
}