import { Suspense } from "react";
import HeroPage from "@/components/ui/common/heroPage";
import Tours from "@/components/tourPackage/tourPage";
import { getPackage } from "@/api/publicApi";
import TourSkeleton from "@/components/tourPackage/TourSkeleton";

export default async function TourPackage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroPage
        currentPage="Packages"
        title="Discover your next"
        highlight="perfect journey"
        description="Explore handpicked travel packages designed to make your journey comfortable, memorable and hassle-free."
      />
      <Suspense fallback={<TourSkeleton />}>
        <PackageData />
      </Suspense>
    </main>
  );
}

async function PackageData() {
  const packages = await getPackage();

  return <Tours package={packages} />;
}
