"use client";

import { useState } from "react";

import BookingSteps from "./BookingSteps";
import TripDetails from "./TripDetails";
import VehicleSchedule from "./VehicleSchedule";
import YourDetails from "./YourDetails";
import OrderReview from "./OrderReview";
import FareSummary from "./FareSummary";

export default function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(1);

  const [booking, setBooking] = useState({
    pickup: "",
    drop: "",
    travelDate: "",
    travelTime: "",
    passengers: "",
    vehicle: "",
    customerName: "",
    phone: "",
    email: "",
  });

  const updateBooking = (field, value) => {
    setBooking((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const previousStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  const handleConfirmBooking = () => setCurrentStep(5);

  return (
    <section className="section-y bg-background">
      <div className="container-app grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-8">

        {/* LEFT */}
        <div className="min-w-0 rounded-2xl border border-border/80 bg-card p-4 shadow-soft sm:p-6 lg:p-8">

          <BookingSteps currentStep={currentStep} />

          {currentStep === 1 && (
            <TripDetails
              booking={booking}
              updateBooking={updateBooking}
              onNext={nextStep}
            />
          )}

          {currentStep === 2 && (
            <VehicleSchedule
              booking={booking}
              updateBooking={updateBooking}
              onNext={nextStep}
              onBack={previousStep}
            />
          )}

          {currentStep === 3 && (
            <YourDetails
              booking={booking}
              updateBooking={updateBooking}
              onNext={nextStep}
              onBack={previousStep}
            />
          )}

          {currentStep === 5 && (
            <div className="py-12 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-accent text-primary">
                <span className="text-2xl" aria-hidden="true">✓</span>
              </div>
              <h2 className="mt-5 text-2xl font-extrabold tracking-[-0.03em]">Booking request received</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                We&apos;ll contact you shortly to confirm your journey.
              </p>
            </div>
          )}

          {currentStep === 4 && (
            <OrderReview
              booking={booking}
              onBack={previousStep}
              onConfirm={handleConfirmBooking}
            />
          )}

        </div>

        {/* RIGHT */}
        <FareSummary booking={booking} />

      </div>
    </section>
  );
}