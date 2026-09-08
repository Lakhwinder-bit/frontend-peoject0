"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BookingActions() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    router.push("/booking/vehicle");
  };

  return (
    <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
      {/* Back */}
      <button
        type="button"
        onClick={handleBack}
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border border-border
          bg-background
          px-5 py-2.5
          text-xs
          font-medium
          text-muted-foreground
          transition-all
          hover:border-primary/30
          hover:text-foreground
          hover:shadow-sm
        "
      >
        <ArrowLeft size={13} />
        Back
      </button>

      {/* Continue */}
      <button
        type="button"
        onClick={handleContinue}
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-primary
          px-6 py-2.5
          text-xs
          font-semibold
          text-primary-foreground
          shadow-sm
          transition-all
          hover:-translate-y-0.5
          hover:shadow-md
          active:translate-y-0
        "
      >
        Continue
        <ArrowRight size={13} />
      </button>
    </div>
  );
}