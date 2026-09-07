import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const PageHero = ({
  breadcrumb = "Home",
  currentPage,
  title,
  highlight,
  description,
  children,
}) => {
  return (
    <section className="bg-primary-dark text-white">
      <div className="container-app">
        <div className="relative overflow-hidden py-5 sm:py-12 lg:py-10">

   

          {/* Content */}
          <div className="relative z-10">

            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-xs font-medium sm:mb-7 sm:text-sm">
              <Link
                href="/"
                className="text-white/55 transition-colors hover:text-white"
              >
                {breadcrumb}
              </Link>

              <ChevronRight
                size={16}
                className="text-white/30"
              />

              <span className="font-semibold text-secondary">
                {currentPage}
              </span>
            </div>

            {/* Main Grid */}
            <div className="grid items-center gap-5 lg:grid-cols-[1fr_auto]">

              {/* Heading Content */}
              <div>

                {/* Heading */}
                <h1 className="text-lg font-extrabold leading-tight tracking-[-0.03em] sm:text-xl lg:text-3xl">
                  {title}{" "}

                  {highlight && (
                    <>
                      <span className="text-secondary">
                        {highlight}
                      </span>
                    </>
                  )}
                </h1>

                {/* Description */}
                {description && (
                  <p className="mt-2 max-w-2xl text-xs leading-6 text-white/70 sm:text-base sm:leading-6">
                    {description}
                  </p>
                )}
              </div>

              {/* Optional Right Content */}
              {children && (
                <div className="hidden lg:block">
                  {children}
                </div>
              )}

            </div>
          </div>

          {/* Bottom Border */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

        </div>
      </div>
    </section>
  );
};

export default PageHero;