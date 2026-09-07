"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  CarFront,
  CalendarDays,
  Map,
  Phone,
} from "lucide-react";

const MOBILE_TABS = [
  {
    label: "Home",
    to: "/",
    icon: Home,
  },
  {
    label: "Fleet",
    to: "/fleet",
    icon: CarFront,
  },
  {
    label: "Book",
    to: "/booking",
    icon: CalendarDays,
  },
  {
    label: "Trips",
    to: "/trips",
    icon: Map,
  },
  {
    label: "Call",
    to: "tel:+919876543210",
    icon: Phone,
  },
];

const MobileBottomNav = ({ isMenuOpen = false }) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at the very top
      if (currentScrollY <= 20) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Ignore very small movements
      if (Math.abs(currentScrollY - lastScrollY) < 10) {
        return;
      }

      // Scroll down → hide
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }

      // Scroll up → show
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (tab) => {
    if (tab.to.startsWith("tel:")) {
      return false;
    }

    if (tab.to === "/") {
      return pathname === "/";
    }

    return (
      pathname === tab.to ||
      pathname.startsWith(`${tab.to}/`)
    );
  };

  return (
    <nav
      aria-label="Mobile primary navigation"
      aria-hidden={isMenuOpen}
      className={`
        fixed inset-x-0 bottom-0 z-[9999] lg:hidden
        transition-transform duration-200 ease-out
        ${
          isMenuOpen || !isVisible
            ? "translate-y-full"
            : "translate-y-0"
        }
      `}
      style={{
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="relative mx-3 mb-3 overflow-hidden rounded-[28px] border border-white/10 bg-[#0c1215]/95 px-2 pb-2 pt-2 shadow-[0_15px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl">

        <div className="pointer-events-none absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

        <ul className="grid grid-cols-5 items-center">
          {MOBILE_TABS.map((tab) => {
            const Icon = tab.icon;
            const active = isActive(tab);

            return (
              <li
                key={tab.to}
                className="relative"
              >
                <Link
                  href={tab.to}
                  aria-current={active ? "page" : undefined}
                  className="group relative flex min-h-[66px] w-full flex-col items-center justify-center gap-1 outline-none"
                >
                  {/* Active background */}
                  <span
                    className={`
                      absolute left-1/2 top-1/2
                      h-10 w-11
                      -translate-x-1/2
                      -translate-y-[70%]
                      rounded-[50px]
                      ${
                        active
                          ? "bg-secondary shadow-[0_6px_20px_rgba(212,169,70,0.25)]"
                          : "bg-transparent"
                      }
                    `}
                  />

                  {/* Icon */}
                  <span
                    className={`
                      relative z-10 grid size-10 place-items-center rounded-[15px]
                      ${
                        active
                          ? "-translate-y-1 scale-105 text-secondary-foreground"
                          : "text-white/45"
                      }
                    `}
                  >
                    <Icon
                      className="size-[19px]"
                      strokeWidth={active ? 2.5 : 1.8}
                    />
                  </span>

                  {/* Label */}
                  <span
                    className={`
                      relative z-10 text-[10px] font-semibold tracking-wide
                      ${
                        active
                          ? "text-secondary"
                          : "text-white/45"
                      }
                    `}
                  >
                    {tab.label}
                  </span>

                  {/* Active indicator */}
                  <span
                    className={`
                      absolute bottom-0 left-1/2
                      h-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-secondary
                      ${
                        active
                          ? "w-3"
                          : "w-0"
                      }
                    `}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default MobileBottomNav;