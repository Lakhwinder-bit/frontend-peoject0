import Image from "next/image";

import HeroContent from "./heroContent";
import HeroStats from "./heroStats";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden lg:min-h-[100vh]">
      {/* Hero Image */}
      <Image
        src="/hero.jpg"
        alt="Premium SUV on a Himalayan highway at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Global Hero Gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "var(--gradient-hero)",
        }}
      />

      {/* Additional subtle dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="container-app relative z-10 flex min-h-screen flex-col items-center justify-center pb-20 pt-28 text-center lg:pt-32">
        <HeroContent />

        <HeroStats />
      </div>
    </section>
  );
}