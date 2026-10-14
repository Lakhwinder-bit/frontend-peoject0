"use client";

import { useEffect, useState } from "react";
import { getAdminBookings } from "@/features/admin/booking/api/adminBookingApi";
import { SectionHeading } from "@/features/admin/adminShared/compontent/adminUi";
import BookingTable from "@/features/admin/booking/compontent/bookingTable";
import TabelSkeleton from "@/shared/compontent/skitonTabel";

export default function BookingsPage() {
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadBookings() {
      try {
        const data = await getAdminBookings();
        if (isMounted) {
          setBookingData(data);
        }
      } catch (requestError) {
        if (isMounted) {
          setError(
            requestError.response?.data?.message ||
              requestError.message ||
              "Unable to load bookings. Please try again."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadBookings();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-[1500px] space-y-7 p-4 sm:p-6 lg:p-8">
      <SectionHeading
        eyebrow="Operations"
        title="Bookings"
        description="Track every reservation from request to completion."
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
        <BookingTable bookingTable={bookingData} />
      )}
    </div>
  );
}