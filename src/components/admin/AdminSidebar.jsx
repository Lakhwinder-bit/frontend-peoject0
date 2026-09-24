"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import {
  BarChart3,
  CalendarDays,
  Map,
  Bus,
  Package,
  Users,
  Mail,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { adminLogout } from "@/api/adminApi";
import useAdminAuth from "@/contrext/useAdminAuth";

const navigation = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: BarChart3,
  },
  {
    label: "Bookings",
    href: "/admin/booking",
    icon: CalendarDays,
  },
  {
    label: "Route Management",
    href: "/admin/routes",
    icon: Map,
  },
  {
    label: "Vehicles",
    href: "/admin/fleet",
    icon: Bus,
  },
  {
    label: "Packages",
    href: "/admin/package",
    icon: Package,
  },
  {
    label: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    label: "Messages",
    href: "/admin/messages",
    icon: Mail,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar({ open = false, onClose }) {
  const pathname = usePathname();
  const router = useRouter();
  const { setAdmin } = useAdminAuth();

  const handleLogout = async () => {
    try {
      await adminLogout();
    } finally {
      setAdmin(null);
      router.replace("/admin/login");
    }
  };

  useEffect(() => {
    onClose?.();
  }, [pathname, onClose]);

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-foreground/30 lg:hidden"
        />
      )}
      <aside className={`fixed inset-y-0 left-0 z-50 overflow-hidden flex w-[260px] shrink-0 flex-col border-r border-border bg-sidebar text-sidebar-foreground shadow-lift transition-transform duration-300 lg:static lg:translate-x-0 lg:shadow-none ${open ? "translate-x-0" : "-translate-x-full"}`}>

      {/* Brand */}
      <div className="flex items-center justify-between border-b border-primary-foreground/10 px-5 py-6">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-lg font-bold text-secondary-foreground shadow-glow">
            K
          </div>

          <div>
            <h1 className="text-base font-semibold tracking-wide">
              Kapoor Travels
            </h1>

            <p className="mt-0.5 text-[10px] uppercase tracking-[2px] text-primary-foreground/60">
              Admin Console
            </p>
          </div>
        </div>
        <button type="button" aria-label="Close navigation" onClick={onClose} className="rounded-lg p-2 text-primary-foreground/60 hover:bg-primary-foreground/10 hover:text-primary-foreground lg:hidden"><X size={18} /></button>
      </div>

      {/* Navigation */}
      <nav className="flex-1  px-4 py-5">
   
        <div className="space-y-1.5">

          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group flex min-h-10 items-center gap-3 rounded-xl px-3
                  text-sm font-medium transition-all
                  ${
                    isActive
                      ? "bg-secondary text-secondary-foreground shadow-glow"
                      : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  }
                `}
                onClick={onClose}
              >
                <Icon
                  size={20}
                  strokeWidth={1.8}
                />

                <span>{item.label}</span>
              </Link>
            );
          })}

        </div>
      </nav>

      {/* Logout */}
      <div className="border-t border-primary-foreground/10 p-4">
        <button
          type="button"
          onClick={handleLogout}
          className="flex h-11 w-full items-center gap-3 rounded-xl px-3 text-sm font-medium text-primary-foreground/70 transition hover:bg-primary-foreground/10 hover:text-primary-foreground"
        >
          <LogOut
            size={20}
            strokeWidth={1.8}
          />

          <span>Logout</span>
        </button>
      </div>

      </aside>
    </>
  );
}