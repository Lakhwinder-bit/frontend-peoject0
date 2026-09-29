import { Plus } from "lucide-react";
import { SectionHeading, StatusBadge } from "@/components/admin/adminUi";

import PackagesTabel from "@/components/admin/package/packageTabel";
import { Suspense } from "react";
import { getPackageAdmin } from "@/api/server";
import TabelSkeleton from "@/components/ui/skitonTabel";
export default function PackagesPage() {
  return (
    <div className="mx-auto w-full max-w-[1500px] space-y-7 p-4 sm:p-6 lg:p-8">
      <SectionHeading
        eyebrow="Catalog"
        title="Packages"
        description="Curate the journeys your customers remember."
        action={
          <button className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground">
            <Plus size={16} /> Create package
          </button>
        }
      />

	  <Suspense fallback={<TabelSkeleton />}>
		<AdminPackageData />
	  </Suspense>
    
    </div>
  );
}

async function AdminPackageData() {
	const PackageData = await getPackageAdmin();
	return <PackagesTabel packages={PackageData}/>
}
