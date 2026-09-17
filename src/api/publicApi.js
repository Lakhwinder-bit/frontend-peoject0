import apiClient from "@/lib/apiclient";

export const getPackage = async ()=>{
    const res = await apiClient.get("/package");

    return res.data.data;
}

export const getFeeds = async()=>{
    const res = await apiClient.get("/feeds");
    return res.data.data
}


export const getRoutes = async()=>{
    const res = await apiClient.get("/route");
    return res.data.data
}

export const bookingAdd = async(data)=>{
    const res = await apiClient.post("/booking",data);
    return res.data.data
}