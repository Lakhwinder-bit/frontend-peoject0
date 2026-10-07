import { Suspense } from "react";
import HeroPage from "@/shared/compontent/common/heroPage";
import Tours from "@/features/tourPackage/compontent/tourPage";

import TourSkeleton from "@/features/tourPackage/compontent/TourSkeleton";
import { getPackage } from "@/features/tourPackage/api/packageApi";

export default async function TourPackage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroPage
        currentPage="Packages"
        title="Discover your next"
        highlight="perfect journey"
        description="Explore handpicked travel packages designed to make your journey comfortable, memorable and hassle-free."
      />
      <Suspense fallback={<TourSkeleton />}>
        <PackageData />
      </Suspense>
    </div>
  );
}

async function PackageData() {
  const packages = await getPackage();

  return <Tours package={packages} />;
}
