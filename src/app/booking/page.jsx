import HeroPage from "@/components/ui/common/heroPage";
import BookingFlow from "@/components/booking/BookingFlow";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <HeroPage
        currentPage="Booking"
        title="Plan your journey,"
        highlight="we'll handle the rest"
        description="Choose your route, vehicle and travel details. We'll make your journey simple, comfortable and reliable."
      />

      <BookingFlow />

    </main>
  );
}