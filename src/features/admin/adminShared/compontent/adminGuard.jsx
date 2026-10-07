"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import useAdminAuth from "@/contrext/useAdminAuth";
export default function AdminGuard({ children }) {
  const router = useRouter();

  const {
    admin,
    loading,
  } = useAdminAuth();

  useEffect(() => {
    // Wait until authentication check is completed
    if (loading) {
      return;
    }

    // Admin is not logged in
    if (!admin) {
      router.replace("/admin/login");
    }
  }, [admin, loading, router]);

  // While checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-gray-500">
          Checking authentication...
        </p>
      </div>
    );
  }

  // Don't render protected content
  // while redirecting to login
  if (!admin) {
    return null;
  }

  // Admin authenticated
  return children;
}