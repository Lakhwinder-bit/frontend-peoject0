import { SectionHeading, StatusBadge } from "@/features/admin/adminShared/compontent/adminUi";
import RoutTabel from "@/features/admin/rout/component/rouTable";
import { Plus } from "lucide-react";
import { Suspense } from "react";
import { getRoutes } from "@/features/admin/rout/api/routApi";
import TabelSkeleton from "@/shared/compontent/skitonTabel";


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
     
     <Suspense fallback={<TabelSkeleton />}>
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

