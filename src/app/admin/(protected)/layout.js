"use client";

import { useState } from "react";
import AdminGuard from "@/components/admin/adminGuard";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
   <AdminGuard>
      <div className="h-screen overflow-hidden bg-background text-foreground">
        <div className="flex h-full min-h-0">

          {/* Sidebar */}
          <AdminSidebar
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          {/* Main Area */}
          <div className="flex min-w-0 min-h-0 flex-1 flex-col">

            {/* Header - does not scroll */}
            <AdminHeader
              onMenu={() => setSidebarOpen(true)}
            />

            {/* ONLY THIS AREA SCROLLS */}
            <main className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
              {children}
            </main>

          </div>
        </div>
      </div>
    </AdminGuard>
  );
}