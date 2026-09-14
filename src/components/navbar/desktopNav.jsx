"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import Button from "../ui/button";
import ThemeToggle from "../ui/themeToggle";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Fleet",
    href: "/fleet",
  },
  {
    label: "Tour Packages",
    href: "/tourPackage",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function DesktopNav({ solid = false }) {
  const pathname = usePathname();

  return (
    <>
  
    <nav className="hidden items-center gap-1 lg:flex">
      {navItems.map((item) => {
        const active = item.href === "/"
          ? pathname === "/"
          : pathname.startsWith(item.href);

        return (
        <Link
          key={item.href}
          href={item.href}
          className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
            active
              ? solid
                ? "bg-accent text-primary"
                : "bg-white/15 text-white backdrop-blur-md"
              : solid
                ? "text-muted-foreground hover:bg-accent hover:text-foreground"
                : "text-white/85 hover:bg-white/10 hover:text-white"
          }`}
        >
          {item.label}
        </Link>
        );
      })}

      {/* Phone */}

    </nav>
      <div className=" hidden lg:flex items-center">
              <a
        href="tel:+919876543210"
        className={`ml-4 flex items-center gap-2 px-3 py-2 text-sm font-semibold transition-colors hover:text-secondary ${solid ? "text-muted-foreground" : "text-white/90"}`}
      >
        <Phone className="size-4" />

        <span>+91 98765 43210</span>
      </a>

      {/* Theme */}
      <ThemeToggle className={`ml-2 border-0 ${solid ? "" : "bg-white/10 text-white hover:bg-secondary hover:text-secondary-foreground"}`} />

      {/* Book */}
      <Button asChild variant="secondary" size="lg" className="ml-3 h-11 rounded-full px-6 shadow-glow">
        <Link
        href="/booking"
        >
        Book Now
        </Link>
      </Button>
      </div>
      </>
  );
}