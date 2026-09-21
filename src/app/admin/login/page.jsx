"use client";

import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    // API will be connected here
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

          <form onSubmit={handleSubmit} className="space-y-5">
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-11 pl-10 pr-4 rounded-xl border border-gray-300 outline-none text-sm transition focus:border-[#203e52] focus:ring-2 focus:ring-[#203e52]/10"
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
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full h-11 pl-10 pr-11 rounded-xl border border-gray-300 outline-none text-sm transition focus:border-[#203e52] focus:ring-2 focus:ring-[#203e52]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
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
                  className="w-4 h-4 rounded border-gray-300"
                />

                Remember me
              </label>

              <button
                type="button"
                className="text-[#203e52] font-medium hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-11 rounded-xl bg-[#203e52] text-white font-medium text-sm hover:bg-[#172f3e] transition"
            >
              Sign in
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} Kapoor Travels. All rights reserved.
        </p>
      </div>
    </main>
  );
}