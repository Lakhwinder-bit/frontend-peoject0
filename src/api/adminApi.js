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


export async function createPackageAdmin(PackageFrom){
    try {

    const res = await apiClient.post("/admin/createPackage", PackageFrom);
    return res.data;
  } catch (error) {
   console.log(error)

    throw error;
  }
}


export async function updatePackageAdmin(id, packageData) {
  const response = await apiClient.put(
    `/admin/package/${id}`,
    packageData
  );

  return response.data;
}

export async function deletePackageAdmin(id) {
  const response = await apiClient.delete(
    `/admin/package/${id}`
  );

  return response.data;
}