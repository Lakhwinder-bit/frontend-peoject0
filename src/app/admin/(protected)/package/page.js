"use client";

import { useEffect, useState } from "react";
import { SectionHeading } from "@/features/admin/adminShared/compontent/adminUi";
import PackageTable from "@/features/admin/package/compontent/packageTabel";
import AddNewPackage from "@/features/admin/package/compontent/AddNewPackage";
import { getAdminPackages } from "@/features/admin/package/api/adminPackage";
import TabelSkeleton from "@/shared/compontent/skitonTabel";

export default function PackagesPage() {
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadPackages() {
      try {
        const data = await getAdminPackages();
        if (isMounted) {
          setPackageData(data);
        }
      } catch (requestError) {
        if (isMounted) {
          setError(
            requestError.response?.data?.message ||
              requestError.message ||
              "Unable to load packages. Please try again."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadPackages();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-[1500px] space-y-7 p-4 sm:p-6 lg:p-8">
      <SectionHeading
        eyebrow="Catalog"
        title="Packages"
        description="Curate the journeys your customers remember."
        action={<AddNewPackage />}
      />

      {loading ? (
        <TabelSkeleton />
      ) : error ? (
        <p
          role="alert"
          className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive"
        >
          {error}
        </p>
      ) : (
        <PackageTable packages={packageData} />
      )}
    </div>
  );
}
