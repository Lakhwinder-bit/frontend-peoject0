import { Suspense } from "react";
import Hero from "@/components/home/hero";
import WhyKapoorTravels from "@/components/home/whyKapoorTravels";
import Fleet from "@/components/home/fleet";
import TourPackages from "@/components/home/puplorPackage";
import PopularRoutes from "@/components/home/popularRoutes";
import Testimonials from "@/components/home/testimonials";
import FAQ from "@/components/home/faq";
import { getFeeds, getPackage, getRoutes } from "@/api/publicApi";
import FeedSkeleton from "@/components/fleet/fleetSkeleton";
import TourSkeleton from "@/components/tourPackage/TourSkeleton";

export default function HomePage() {

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <WhyKapoorTravels />
      <Suspense fallback={<FeedSkeleton />}>
       <FeedData />
      </Suspense>
      <Suspense fallback={<TourSkeleton/>}>
       <PackageData />
      </Suspense>

      
      <GetRoutesData />
      <Testimonials />
      <FAQ />

    </main>
  );
}

async function FeedData(){
  const feedApiData = await getFeeds();
  return <Fleet feeds={feedApiData}/>
}

async function PackageData() {
  const packages = await getPackage();
  return <TourPackages packages={packages}/>
  
}

async function GetRoutesData() {
  const routeData = await getRoutes();
  return <PopularRoutes route={routeData}/>
}