"use client";

import { SectionHeading } from "@/features/admin/adminShared/compontent/adminUi";
import RoutTabel from "@/features/admin/rout/component/rouTable";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { getRoutes } from "@/features/admin/rout/api/routApi";
import TabelSkeleton from "@/shared/compontent/skitonTabel";


export default function RoutesPage() {
  const [routesData, setRoutesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadRoutes() {
      try {
        const data = await getRoutes();
        if (isMounted) {
          setRoutesData(data);
        }
      } catch (requestError) {
        if (isMounted) {
          setError(
            requestError.response?.data?.message ||
              requestError.message ||
              "Unable to load routes. Please try again."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadRoutes();

    return () => {
      isMounted = false;
    };
  }, []);

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
     
      {loading ? (
        <TabelSkeleton />
      ) : error ? (
        <p role="alert" className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </p>
      ) : (
        <RoutTabel routes={routesData} />
      )}
    </div>
  );
}
