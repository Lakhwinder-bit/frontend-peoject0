import { Suspense } from "react";
import Hero from "@/features/home/compontent/hero";
import WhyKapoorTravels from "@/features/home/compontent/whyKapoorTravels";
import Fleet from "@/features/home/compontent/fleet";
import TourPackages from "@/features/home/compontent/puplorPackage";
import PopularRoutes from "@/features/home/compontent/popularRoutes";
import Testimonials from "@/features/home/compontent/testimonials";
import FAQ from "@/features/home/compontent/faq";
import FeedSkeleton from "@/features/fleet/compontent/fleetSkeleton";
import TourSkeleton from "@/features/tourPackage/compontent/TourSkeleton";
import { getFeeds } from "@/features/fleet/api/fleetApi";
import { getPackage } from "@/features/tourPackage/api/packageApi";
import { getRoutes } from "@/features/home/api/homeApi";

export default function HomePage() {

  return (
    <div className="min-h-screen bg-background text-foreground">
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

    </div>
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