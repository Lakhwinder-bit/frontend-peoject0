import React from "react";

import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import FooterColumn from "./footerColumn";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="container-app py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.15fr_0.9fr_1fr_1.2fr] lg:gap-10">

          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                <Sparkles
                  size={28}
                  strokeWidth={1.8}
                />
              </div>

              <span className="text-2xl font-extrabold tracking-[-0.04em] text-white">
                Kapoor Travels
              </span>
            </div>

            <p className="mt-7 max-w-sm text-[15px] leading-8 text-white/70">
              Punjab and Himachal&apos;s trusted travel partner since 2009.
              Sanitised vehicles, verified drivers and transparent fares on
              every single trip.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-secondary hover:text-secondary-foreground"
              >
                <FaFacebookF size={17} />
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-secondary hover:text-secondary-foreground"
              >
                <FaInstagram size={18} />
              </a>

              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-secondary hover:text-secondary-foreground"
              >
                <FaTwitter size={17} />
              </a>

            </div>
          </div>

          {/* Explore */}
          <FooterColumn
            title="Explore"
            links={[
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
                href: "/packages",
              },
              {
                label: "About",
                href: "/about",
              },
              {
                label: "Contact",
                href: "/contact",
              },
              {
                label: "Admin Dashboard",
                href: "/admin",
              },
            ]}
          />

          {/* Services */}
          <FooterColumn
            title="Services"
            links={[
              {
                label: "Airport Transfers",
                href: "/services/airport-transfers",
              },
              {
                label: "Outstation Cabs",
                href: "/services/outstation",
              },
              {
                label: "Hill Station Tours",
                href: "/services/hill-station",
              },
              {
                label: "Wedding Fleet",
                href: "/services/wedding",
              },
              {
                label: "Corporate Travel",
                href: "/services/corporate",
              },
            ]}
          />

          {/* Reach Us */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-secondary">
              Reach Us
            </h3>

            <div className="mt-6 space-y-5">

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin
                  size={21}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-secondary"
                />

                <p className="text-[15px] leading-7 text-white/70">
                  SCO 42, Sector 34-A,
                  <br />
                  Chandigarh, Punjab 160022,
                  <br />
                  India
                </p>
              </div>

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 text-[15px] text-white/70 transition-colors duration-200 hover:text-secondary"
              >
                <Phone
                  size={21}
                  strokeWidth={1.8}
                  className="shrink-0 text-secondary"
                />

                <span>
                  +91 98765 43210
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:bookings@kapoortravels.in"
                className="flex items-center gap-4 text-[15px] text-white/70 transition-colors duration-200 hover:text-secondary"
              >
                <Mail
                  size={21}
                  strokeWidth={1.8}
                  className="shrink-0 text-secondary"
                />

                <span className="break-all">
                  bookings@kapoortravels.in
                </span>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-app flex flex-col gap-4 py-7 text-sm md:flex-row md:items-center md:justify-between">

          {/* Copyright */}
          <p className="text-white/60">
            © 2026 Kapoor Travels. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-white/60">

            <a
              href="/privacy"
              className="transition-colors duration-200 hover:text-secondary"
            >
              Privacy Policy
            </a>

            <span>·</span>

            <a
              href="/terms"
              className="transition-colors duration-200 hover:text-secondary"
            >
              Terms of Service
            </a>

            <span>·</span>

            <a
              href="/refund-policy"
              className="transition-colors duration-200 hover:text-secondary"
            >
              Refund Policy
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;