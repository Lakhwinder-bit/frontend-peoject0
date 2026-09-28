import { SectionHeading, StatusBadge } from "@/components/admin/adminUi";
import RoutTabel from "@/components/admin/rout/rouTable";
import { Plus } from "lucide-react";
import TourSkeleton from "@/components/tourPackage/TourSkeleton";
import { Suspense } from "react";
import { getRoutes } from "@/api/server";

const routes = [
  ["Delhi", "Jaipur", "268 km", "5h 30m", "Toyota Innova", "Active"],
  ["Amritsar", "Manali", "400 km", "10h 15m", "Tempo Traveller", "Active"],
  ["Chandigarh", "Shimla", "115 km", "4h 20m", "Maruti Suzuki", "Active"],
  ["Delhi", "Agra", "233 km", "4h 10m", "Toyota Crysta", "Inactive"],
];

export default function RoutesPage() {
  return (
    <div className="mx-auto w-full max-w-[1500px] space-y-7 p-4 sm:p-6 lg:p-8">
      <SectionHeading
        eyebrow="Operations"
        title="Route management"
        description="Build reliable connections between your most requested destinations."
        action={
          <button className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground">
            <Plus size={16} /> Add route
          </button>
        }
      />
     
     <Suspense fallback={<TourSkeleton />}>
       <RoutesData />
     </Suspense>
    </div>
  );
}


async function RoutesData() {
  const routesData = await getRoutes();
console.log(routesData)
  return  <RoutTabel routes={routesData}/>
}


