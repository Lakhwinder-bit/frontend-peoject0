// "use server";

// import apiClient from "@/lib/apiclient";
// import { cookies } from "next/headers";

// export async function LoginAction(data) {
//   const { email, password } = data;

//   if (!email || !password) {
//     return {
//       success: false,
//       message: "Email and password are required",
//     };
//   }

//   try {
//     const response = await apiClient.post("/auth/login", {
//       email,
//       password,
//     });

//     const setCookie = response.headers["set-cookie"];

//     console.log("BACKEND SET COOKIE:", setCookie);

//     if (setCookie?.length) {
//       const cookieStore = await cookies();

//       for (const cookie of setCookie) {
//         const [cookiePair] = cookie.split(";");

//         const separatorIndex = cookiePair.indexOf("=");

//         const name = cookiePair.slice(0, separatorIndex);
//         const value = cookiePair.slice(separatorIndex + 1);

//         if (name === "accessToken") {
//           cookieStore.set("accessToken", value, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === "production",
//             sameSite: "strict",
//             path: "/",
//             maxAge: 15 * 60,
//           });
//         }

//         if (name === "refreshToken") {
//           cookieStore.set("refreshToken", value, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === "production",
//             sameSite: "strict",
//             path: "/",
//             maxAge: 7 * 24 * 60 * 60,
//           });
//         }
//       }
//     }

//     return {
//       success: true,
//       data: response.data,
//     };
//   } catch (error) {
//     console.error(
//       "LOGIN ERROR:",
//       error?.response?.data
//     );

//     return {
//       success: false,
//       message:
//         error?.response?.data?.message ||
//         "Login failed",
//     };
//   }
// }