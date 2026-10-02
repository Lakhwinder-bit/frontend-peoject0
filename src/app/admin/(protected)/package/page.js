import { Plus } from "lucide-react";
import { SectionHeading, StatusBadge } from "@/components/admin/adminUi";

import PackagesTabel from "@/components/admin/package/packageTabel";
import { Suspense } from "react";
import { getPackageAdmin } from "@/api/server";
import TabelSkeleton from "@/components/ui/skitonTabel";
import AddNewPackage from "@/components/admin/package/PackageAdd/AddNewPackage"
export default function PackagesPage() {
  return (
    <div className="mx-auto w-full max-w-[1500px] space-y-7 p-4 sm:p-6 lg:p-8">
      <SectionHeading
        eyebrow="Catalog"
        title="Packages"
        description="Curate the journeys your customers remember."
        action={
         <AddNewPackage />
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
