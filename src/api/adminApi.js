import apiClient from "@/lib/apiclient";


// auth apis

export const  adminLogin = async(data) => {
const res = await apiClient.post("/auth/login",data);
return res.data
}

export const getCurrentAdmim = async() =>{
    const res = await apiClient.get("/auth/me");
    return res.data
}

export const adminLogout = async() =>{
    const res = await apiClient.post("/auth/logout");
    return res.data
}

export const genrateAccesTokenApi = async() =>{
    const res = await apiClient.get("/auth/refresh");
    return res.data
}


//Booking

export const bookings = async() =>{
    const res = await apiClient.get("/admin/bookings");
    
    return res.data;
}