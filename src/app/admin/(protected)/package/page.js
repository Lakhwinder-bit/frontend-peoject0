import { Plus } from "lucide-react";
import { SectionHeading, StatusBadge } from "@/features/admin/adminShared/compontent/adminUi";

import PackageTable from "@/features/admin/package/compontent/packageTabel";
import { Suspense } from "react";

import TabelSkeleton from "@/shared/compontent/skitonTabel";
import AddNewPackage from "@/features/admin/package/compontent/AddNewPackage"
import { getPackageAdmin } from "@/features/admin/package/api/adminPackageServerApi";
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
	return <PackageTable packages={PackageData}/>
}
