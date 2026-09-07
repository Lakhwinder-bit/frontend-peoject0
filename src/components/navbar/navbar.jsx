"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import Logo from "./logo";
import DesktopNav from "./desktopNav";
import MobileMenu from "./mobileMenu";
import MobileBottomNav from "./mobileBottomNav";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const solid = !isHome;

  return (
    <>
      <header
        className={`left-0 right-0 top-0 z-50 ${
          solid ? "relative bg-primary-dark" : "absolute"
        }`}
      >
        <div className="container-app">
          <div className="flex h-20 items-center justify-between">
            <Logo />

            <DesktopNav />

            <MobileMenu
              isOpen={isMobileMenuOpen}
              onOpenChange={setIsMobileMenuOpen}
            />
          </div>
        </div>
      </header>

      <MobileBottomNav isMenuOpen={isMobileMenuOpen} />
    </>
  );
}