"use client";

import {
  createContext,
  useEffect,
  useState,
} from "react";

import { getCurrentAdmin } from "@/features/admin/auth/api/adminAuthApi";

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const response = await getCurrentAdmin();

      setAdmin(response?.data);
    } catch (error) {
      console.error("Auth check failed:", error);

      setAdmin(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AdminAuthContext.Provider
      value={{
        admin,
        setAdmin,
        loading,
        checkAuth,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export default AdminAuthContext;