import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Button from "../ui/button";


export default function HeroContent() {
  return (
       <div className="animate-fade-up max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur">
              <Star className="size-3.5 fill-secondary text-secondary" />
              4.9 / 5 from 3,800+ travellers
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              Premium rides across
              <span className="text-gradient"> North India</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              Verified drivers, sanitised fleet and transparent fares for Punjab & Himachal.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button 
             
              asChild variant="hero" size="xl"
              >
                <Link href="/booking">
                  Book your ride
                </Link>
               
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link href="/packages">Explore packages</Link>
              </Button>
            </div>
          </div>
  );
}