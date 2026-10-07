import HeroPage from "@/shared/compontent/common/heroPage";
import BookingFlow from "@/features/booking/compontent/BookingFlow";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <HeroPage
        currentPage="Booking"
        title="Plan your journey,"
        highlight="we'll handle the rest"
        description="Choose your route, vehicle and travel details. We'll make your journey simple, comfortable and reliable."
      />

      <BookingFlow />

    </div>
  );
}