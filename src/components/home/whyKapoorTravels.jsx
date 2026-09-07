"use client";

import {
  ShieldCheck,
  Sparkles,
  BadgeIndianRupee,
  Headphones,
  Send,
  Star,
} from "lucide-react";

import FeatureCard from "../ui/featureCard";

const features = [
  {
    icon: ShieldCheck,
    title: "Professional Drivers",
    description:
      "Background-verified, uniformed drivers with 5+ years of highway and hill experience.",
  },
  {
    icon: Sparkles,
    title: "Sanitised Vehicles",
    description:
      "Every cab is deep-cleaned and sanitised before each trip with fresh interiors.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable Pricing",
    description:
      "Transparent, all-inclusive fares quoted upfront. No surge, no hidden charges.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "A real human answers within 30 seconds, any hour of the day or night.",
  },
  {
    icon: Send,
    title: "GPS Enabled Fleet",
    description:
      "Live tracking links shared with your family for complete peace of mind.",
  },
  {
    icon: Star,
    title: "Trusted by Thousands",
    description:
      "Over 42,000 completed trips and a 4.9 average rating from repeat travellers.",
  },
];

export default function WhyKapoorTravels() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      <div className="container-app">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex
              rounded-full
              border border-secondary/40
              bg-accent
              px-4 py-1.5
              text-[11px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-primary
            "
          >
            Why Kapoor Travels
          </span>

          <h2
            className="
              mt-5 text-3xl font-extrabold leading-[1.08]
              tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[56px]
            "
          >
            A travel partner your
            <br className="hidden sm:block" />
            family can rely on
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-muted-foreground
              sm:text-lg
            "
          >
            Sixteen years of moving people across the plains and the hills —
            safely, punctually and comfortably.
          </p>
        </div>

        {/* Feature Cards */}
        <div
          className="
            mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3
          "
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}