"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
} from "lucide-react";

import { adminLogin } from "@/api/adminApi";
import useAdminAuth from "@/contrext/useAdminAuth";

export default function AdminLoginPage() {
  const router = useRouter();

  const { checkAuth } = useAdminAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = e.currentTarget;

    const data = {
      email: form.email.value,
      password: form.password.value,
    };

    try {
      // 1. Login API
      const result = await adminLogin(data);



      // 2. Check login response
      if (!result?.success) {
        setError(result?.message || "Login failed");
        return;
      }

    

      // 3. Update AdminAuthContext
      // This calls current-admin API
      await checkAuth();

      // 4. Go to protected dashboard
      router.replace("/admin");
    } catch (error) {
      console.error("LOGIN ERROR:", error);

      setError(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f6f7f9] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#203e52] text-white text-xl font-bold mb-4">
            K
          </div>

          <h1 className="text-2xl font-semibold text-[#203e52]">
            Kapoor Travels
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Admin Panel
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">

          <div className="mb-7">
            <h2 className="text-xl font-semibold text-gray-900">
              Welcome back
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Sign in to access your admin dashboard
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@example.com"
                  required
                  disabled={loading}
                  className="w-full h-11 pl-10 pr-4 rounded-xl border border-gray-300 outline-none text-sm transition focus:border-[#203e52] focus:ring-2 focus:ring-[#203e52]/10 disabled:bg-gray-100"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="password"
                  name="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  required
                  disabled={loading}
                  className="w-full h-11 pl-10 pr-11 rounded-xl border border-gray-300 outline-none text-sm transition focus:border-[#203e52] focus:ring-2 focus:ring-[#203e52]/10 disabled:bg-gray-100"
                />

                <button
                  type="button"
                  disabled={loading}
                  onClick={() =>
                    setShowPassword(
                      (prev) => !prev
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  disabled={loading}
                  className="w-4 h-4 rounded border-gray-300"
                />

                Remember me
              </label>

              <button
                type="button"
                disabled={loading}
                className="text-[#203e52] font-medium hover:underline disabled:opacity-50"
              >
                Forgot password?
              </button>
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-xl bg-[#203e52] text-white font-medium text-sm hover:bg-[#172f3e] transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading
                ? "Signing in..."
                : "Sign in"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} Kapoor Travels.
          All rights reserved.
        </p>
      </div>
    </main>
  );
}