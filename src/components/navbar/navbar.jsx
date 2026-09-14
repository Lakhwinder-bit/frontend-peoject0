"use client";

import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

import Logo from "./logo";
import DesktopNav from "./desktopNav";
import MobileMenu from "./mobileMenu";
import MobileBottomNav from "./mobileBottomNav";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const solid = !isHome;

  const toggleMenu = useCallback(
    () => setIsMobileMenuOpen((previous) => !previous),
    [],
  );
  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <header
        className={`left-0 right-0 top-0 z-50 ${
          solid
            ? "relative bg-primary-dark text-card-foreground   dark:bg-primary-dark/95 dark:text-white"
            : "absolute text-white"
        }`}
      >
        <div className="container-app">
          <div className="flex h-20 items-center justify-between">
            <Logo solid={solid} />

            <DesktopNav solid={solid} />

            <MobileMenu
              isOpen={isMobileMenuOpen}
              onToggle={toggleMenu}
              onClose={closeMenu}
              solid={solid}
            />
          </div>
        </div>
      </header>

      <MobileBottomNav isMenuOpen={isMobileMenuOpen} />
    </>
  );
}