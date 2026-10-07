import {  Plus } from "lucide-react";
import { SectionHeading} from "@/features/admin/adminShared/compontent/adminUi";
import { Suspense } from "react";
import { getFleetsAdmin } from "@/features/admin/fleet/api/adminFleetApi";
import FleetTabel from "@/features/admin/fleet/fleetTable";
import TabelSkeleton from "@/shared/compontent/skitonTabel";

export default function FleetPage() {
  return (
    <div className="mx-auto w-full max-w-[1500px] space-y-7 p-4 sm:p-6 lg:p-8">
      <SectionHeading
        eyebrow="Operations"
        title="Vehicles"
        description="Keep your fleet visible, available, and trip-ready."
        action={
          <button className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground">
            <Plus size={16} /> Add vehicle
          </button>
        }
      />
     <Suspense fallback={<TabelSkeleton />}>
     <FleetData />
	 </Suspense>
    </div>
  );
}


async function FleetData() {
	const fleetsData = await getFleetsAdmin();
	console.log(fleetsData)
	return <FleetTabel fleets={fleetsData} />
}