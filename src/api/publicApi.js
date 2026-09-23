import apiClient from "@/lib/apiclient";

export const getPackage = async ()=>{
    const res = await apiClient.get("/api/package");

    return res.data.data;
}

export const getFeeds = async()=>{
    const res = await apiClient.get("/api/feeds");
    return res.data.data
}


export const getRoutes = async()=>{
    const res = await apiClient.get("/api/route");
    return res.data.data
}

export const bookingAdd = async(data)=>{
    const res = await apiClient.post("/booking",data);
    return res.data.data
}