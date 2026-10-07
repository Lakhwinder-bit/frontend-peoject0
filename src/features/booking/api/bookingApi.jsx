import apiClient from "@/shared/lib/apiclient";

export const bookingAdd = async(data)=>{
    const res = await apiClient.post("/booking",data);
    return res.data.data
}