"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, Phone, X, ArrowRight } from "lucide-react";

import Button from "../ui/button";
import ThemeToggle from "../ui/themeToggle";
import Logo from "./logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Fleet", href: "/fleet" },
  { label: "Tour Packages", href: "/tourPackage" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu({
  isOpen,
  onToggle,
  onClose,
  solid = false,
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Portal is available only after client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll while sidebar is open
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Close when route changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }

    // We intentionally only react to pathname changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  /*
   * ==========================================
   * MOBILE TRIGGER
   * ==========================================
   */

  const trigger = (
    <div className="flex items-center gap-2 lg:hidden">
      <ThemeToggle
        className={
          solid
            ? ""
            : "border-white/20 bg-white/10 text-white hover:bg-secondary hover:text-secondary-foreground"
        }
      />

      <Button
        type="button"
        variant="glass"
        size="icon"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={onToggle}
        className={`
          size-11
          rounded-full
          backdrop-blur-md
          ${
            solid
              ? "border-border bg-card text-card-foreground dark:border-white/20 dark:bg-white/10 dark:text-white"
              : "border-white/20 text-white"
          }
        `}
      >
        {isOpen ? (
          <X className="size-5" />
        ) : (
          <Menu className="size-5" />
        )}
      </Button>
    </div>
  );

  /*
   * ==========================================
   * MOBILE SIDEBAR
   * ==========================================
   */

  const sidebar = (
    <div
      className={`
        fixed
        inset-0
        z-[9999]
        lg:hidden
        ${
          isOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        }
      `}
    >
      {/* =====================================
          BACKDROP
      ====================================== */}

      <button
        type="button"
        aria-label="Close mobile menu"
        onClick={onClose}
        className={`
          absolute
          inset-0
          h-full
          w-full
          bg-black/60
          backdrop-blur-[2px]
          transition-opacity
          duration-300
          ${
            isOpen
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      />

      {/* =====================================
          REAL RIGHT SIDEBAR
      ====================================== */}

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`
          absolute
          right-0
          top-0
          z-[10000]
          flex
          h-[100dvh]
          w-[85vw]
          max-w-[380px]
          min-w-[280px]
          flex-col
          border-l
          border-border
          bg-background
          text-foreground
          shadow-2xl
          transition-transform
          duration-300
          ease-out
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* =====================================
            HEADER
        ====================================== */}

        <div
          className="
            flex
            h-20
            shrink-0
            items-center
            justify-between
            border-b
            border-border
            bg-card
            px-4
            sm:px-5
          "
        >
          <Logo solid />

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Close menu"
              onClick={onClose}
              className="
                size-10
                rounded-full
                border
                border-border
                text-muted-foreground
                hover:bg-muted
                hover:text-foreground
              "
            >
              <X className="size-5" />
            </Button>
          </div>
        </div>

        {/* =====================================
            NAVIGATION
        ====================================== */}

        <nav
          className="
            min-h-0
            flex-1
            overflow-y-auto
            px-4
            py-7
            sm:px-5
          "
        >
          <p
            className="
              mb-4
              px-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-muted-foreground
            "
          >
            Menu
          </p>

          <div className="space-y-2">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  aria-current={
                    active ? "page" : undefined
                  }
                  className={`
                    group
                    flex
                    min-h-12
                    items-center
                    justify-between
                    rounded-xl
                    border
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    transition-all
                    duration-200
                    ${
                      active
                        ? `
                          border-primary/20
                          bg-primary/10
                          text-primary
                        `
                        : `
                          border-transparent
                          text-foreground
                          hover:border-border
                          hover:bg-card
                          hover:text-primary
                        `
                    }
                  `}
                >
                  <span>{item.label}</span>

                  <ArrowRight
                    className={`
                      size-4
                      transition-transform
                      duration-200
                      ${
                        active
                          ? "text-primary"
                          : "text-muted-foreground group-hover:translate-x-1 group-hover:text-primary"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>
        </nav>

        {/* =====================================
            FOOTER ACTIONS
        ====================================== */}

        <div
          className="
            shrink-0
            border-t
            border-border
            bg-card
            p-4
            sm:p-5
          "
        >
          {/* Phone */}

          <a
            href="tel:+919876543210"
            onClick={onClose}
            className="
              flex
              min-h-12
              items-center
              gap-3
              rounded-xl
              border
              border-border
              bg-background
              px-4
              py-3
              transition-colors
              hover:border-primary/30
              hover:text-primary
            "
          >
            <span
              className="
                flex
                size-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-primary/10
                text-primary
              "
            >
              <Phone className="size-4" />
            </span>

            <div>
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-wider
                  text-muted-foreground
                "
              >
                Call us
              </p>

              <p
                className="
                  mt-0.5
                  text-xs
                  font-semibold
                  text-foreground
                "
              >
                +91 98765 43210
              </p>
            </div>
          </a>

          {/* Book Now */}

          <Button
            asChild
            variant="secondary"
            size="lg"
            className="
              mt-3
              w-full
              rounded-xl
              shadow-soft
            "
          >
            <Link
              href="/booking"
              onClick={onClose}
            >
              Book Now
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </aside>
    </div>
  );

  return (
    <>
      {trigger}

      {mounted &&
        typeof document !== "undefined" &&
        createPortal(sidebar, document.body)}
    </>
  );
}