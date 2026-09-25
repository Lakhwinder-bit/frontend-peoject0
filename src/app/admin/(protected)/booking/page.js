import { getServerBookings } from "@/api/server";
import {SectionHeading} from "@/components/admin/adminUi";
import BookingTable from "@/components/admin/booking/bookingTable";
import TourSkeleton from "@/components/tourPackage/TourSkeleton";
import { Suspense } from "react";

export default function BookingsPage() {
 

  return (
    <div className="mx-auto w-full max-w-[1500px] space-y-7 p-4 sm:p-6 lg:p-8">
      <SectionHeading
        eyebrow="Operations"
        title="Bookings"
        description="Track every reservation from request to completion."
       
      />


      <Suspense fallback={<TourSkeleton />}>
      <BookingData />
      </Suspense>
 
    </div>
  );
}



async function BookingData() {
    const bookingData = await getServerBookings();
    return  <BookingTable bookingTable={bookingData}/>
}