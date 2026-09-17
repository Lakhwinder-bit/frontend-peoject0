"use client";

import { useState } from "react";

import BookingSteps from "./BookingSteps";
import TripDetails from "./TripDetails";
import VehicleSchedule from "./VehicleSchedule";
import YourDetails from "./YourDetails";
import OrderReview from "./OrderReview";
import FareSummary from "./FareSummary";

import { bookingAdd } from "@/api/publicApi";

export default function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [booking, setBooking] = useState({
    pickupLocation: "",
    dropLocation: "",
    vehicleType: "",
    passengers: "",
    travelDate: "",
    travelTime: "",
    name: "",
    mobile: "",
    note: "",
  });    


  // Update booking field
  const updateBooking = (field, value) => {
    setBooking((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Next step
  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  // Previous step
  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Final booking submit
  const handleConfirmBooking = async () => {
    try {
      setLoading(true);

      console.log("Booking payload:", booking);

      const res = await bookingAdd(booking);

      console.log("Booking API response:", res);

      // API successful
      setCurrentStep(5);
    } catch (error) {
      console.error("Booking not created:", error);


    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-y bg-background">
      <div className="container-app grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-8">

        {/* ================= LEFT ================= */}
        <div className="min-w-0 rounded-2xl border border-border/80 bg-card p-4 shadow-soft sm:p-6 lg:p-8">

          {/* Booking Steps */}
          {currentStep !== 5 && (
            <BookingSteps currentStep={currentStep} />
          )}

          {/* ================= STEP 1 ================= */}
          {currentStep === 1 && (
            <TripDetails
              booking={booking}
              updateBooking={updateBooking}
              onNext={nextStep}
            />
          )}

          {/* ================= STEP 2 ================= */}
          {currentStep === 2 && (
            <VehicleSchedule
              booking={booking}
              updateBooking={updateBooking}
              onNext={nextStep}
              onBack={previousStep}
            />
          )}

          {/* ================= STEP 3 ================= */}
          {currentStep === 3 && (
            <YourDetails
              booking={booking}
              updateBooking={updateBooking}
              onNext={nextStep}
              onBack={previousStep}
            />
          )}

          {/* ================= STEP 4 ================= */}
          {currentStep === 4 && (
            <OrderReview
              booking={booking}
              onBack={previousStep}
              onConfirm={handleConfirmBooking}
              loading={loading}
            />
          )}

          {/* ================= STEP 5 ================= */}
          {currentStep === 5 && (
            <div className="py-12 text-center">

              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-accent text-primary">
                <span
                  className="text-2xl"
                  aria-hidden="true"
                >
                  ✓
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-extrabold tracking-[-0.03em]">
                Booking request received
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                We'll contact you shortly to confirm your journey.
              </p>

            </div>
          )}
        </div>

        {/* ================= RIGHT ================= */}
        {currentStep !== 5 && (
          <FareSummary booking={booking} />
        )}

      </div>
    </section>
  );
}