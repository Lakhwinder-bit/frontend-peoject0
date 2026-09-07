"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import Button from "../ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Fleet", href: "/fleet" },
  { label: "Tour Packages", href: "/tourPackage" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu({ isOpen, onOpenChange }) {
  return (
    <>
      <Button
        type="button"
        variant="glass"
        size="icon"
        aria-label="Open menu"
        aria-expanded={isOpen}

        onClick={() => {onOpenChange(true)}}
        className="size-11 rounded-full border border-white/20 text-white backdrop-blur-md lg:hidden"
      >
        <Menu className="size-5" />
      </Button>

      <div
        className={`pointer-events-none fixed inset-0 z-[60] transition-[visibility] duration-300 lg:hidden ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <Button
          type="button"
          variant="ghost"
          aria-label="Close menu"
          onClick={() => onOpenChange(false)}
          className={`absolute inset-0 h-auto w-auto rounded-none bg-black/45 p-0 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "pointer-events-auto opacity-100" : "opacity-0"
          }`}
        />

        <aside
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 flex h-full w-[min(21rem,88vw)] flex-col border-l border-border bg-card px-6 pb-8 pt-6 text-card-foreground shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "pointer-events-auto translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-border pb-5">
            <span className="text-lg font-extrabold">Menu</span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Close menu"
              onClick={() => onOpenChange(false)}
              className="size-10 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X className="size-5" />
            </Button>
          </div>

          <nav className="flex flex-col gap-2 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => onOpenChange(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold transition-colors hover:bg-muted hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button asChild variant="secondary" size="lg" className="mt-auto w-full rounded-xl shadow-glow">
            <a
              href="tel:+919876543210"
              onClick={() => onOpenChange(false)}
            >
              <Phone className="size-4" />
              Call +91 98765 43210
            </a>
          </Button>
        </aside>
      </div>
    </>
  );
}