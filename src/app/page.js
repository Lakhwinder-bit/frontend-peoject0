import Hero from "@/components/home/hero";
import WhyKapoorTravels from "@/components/home/whyKapoorTravels";
import Fleet from "@/components/home/fleet";
import TourPackages from "@/components/home/puplorPackage";
import PopularRoutes from "@/components/home/popularRoutes";
import Testimonials from "@/components/home/testimonials";
import FAQ from "@/components/home/faq";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <WhyKapoorTravels />
      <Fleet />
      <TourPackages />
      <PopularRoutes />
      <Testimonials />
      <FAQ />

    </main>
  );
}