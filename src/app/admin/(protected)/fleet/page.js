"use client";

import {  Plus } from "lucide-react";
import { SectionHeading} from "@/features/admin/adminShared/compontent/adminUi";
import { useEffect, useState } from "react";
import { getFleetsAdmin } from "@/features/admin/fleet/api/adminFleetApi";
import FleetTabel from "@/features/admin/fleet/fleetTable";
import TabelSkeleton from "@/shared/compontent/skitonTabel";

export default function FleetPage() {
  const [fleetsData, setFleetsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadFleets() {
      try {
        const data = await getFleetsAdmin();
        if (isMounted) {
          setFleetsData(data);
        }
      } catch (requestError) {
        if (isMounted) {
          setError(
            requestError.response?.data?.message ||
              requestError.message ||
              "Unable to load vehicles. Please try again."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadFleets();

    return () => {
      isMounted = false;
    };
  }, []);

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
      {loading ? (
        <TabelSkeleton />
      ) : error ? (
        <p role="alert" className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </p>
      ) : (
        <FleetTabel fleets={fleetsData} />
      )}
    </div>
  );
}