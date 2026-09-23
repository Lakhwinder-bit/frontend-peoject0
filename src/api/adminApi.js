import apiClient from "@/lib/apiclient";


// auth apis

export const  adminLogin = async(data) => {
const res = await apiClient.post("/auth/login",data);
return res.data
}

export const getCurrentAdmim = async() =>{
    const res = apiClient.get("/auth/me");
    return res.data
}