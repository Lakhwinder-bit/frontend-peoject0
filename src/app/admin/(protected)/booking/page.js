import { getServerBookings } from "@/features/admin/booking/api/adminBookingApi";
import {SectionHeading} from "@/features/admin/adminShared/compontent/adminUi";
import BookingTable from "@/features/admin/booking/compontent/bookingTable";
import TabelSkeleton from "@/shared/compontent/skitonTabel";
import { Suspense } from "react";

export default function BookingsPage() {
 

  return (
    <div className="mx-auto w-full max-w-[1500px] space-y-7 p-4 sm:p-6 lg:p-8">
      <SectionHeading
        eyebrow="Operations"
        title="Bookings"
        description="Track every reservation from request to completion."
       
      />


      <Suspense fallback={<TabelSkeleton/>}>
      <BookingData />
      </Suspense>
 
    </div>
  );
}



async function BookingData() {
    const bookingData = await getServerBookings();
    return  <BookingTable bookingTable={bookingData}/>
}