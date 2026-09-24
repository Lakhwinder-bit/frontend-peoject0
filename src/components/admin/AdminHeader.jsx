"use client";

import Link from "next/link";
import { Menu, ExternalLink } from "lucide-react";
import ThemeToggle from "@/components/ui/themeToggle";

import useAdminAuth from "@/contrext/useAdminAuth";

export default function AdminHeader({ onMenu }) {
  const { admin } = useAdminAuth();

  return (
    <header className="sticky top-0 z-30 flex min-h-[76px] shrink-0 items-center justify-between border-b border-border bg-card/95 px-4 backdrop-blur sm:px-6 lg:px-8">

      {/* Welcome */}
      <div>
        <div className="flex items-center gap-3">
          <button type="button" aria-label="Open navigation" onClick={onMenu} className="rounded-xl border border-border bg-background p-2.5 text-foreground lg:hidden">
            <Menu size={19} />
          </button>
          <div>
          <p className="text-sm font-semibold text-foreground">
            Welcome back{admin?.name ? `, ${admin.name.split(" ")[0]}` : ""}
        </p>
          <p className="mt-1 hidden text-xs text-muted-foreground sm:block">
            Manage your travel operations
          </p>
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">

        {/* Theme */}
        <ThemeToggle />

        {/* View Site */}
        <Link
          href="/"
          className="hidden h-10 items-center gap-2 rounded-xl border border-border px-4 text-sm font-medium text-foreground transition hover:border-secondary hover:bg-accent sm:flex"
        >
          View site <ExternalLink size={15} />
        </Link>

        {/* Admin Avatar */}
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground"
          title={admin?.email || "Admin"}
        >
          {admin?.name?.charAt(0)?.toUpperCase() || "A"}
        </button>

      </div>
    </header>
  );
}