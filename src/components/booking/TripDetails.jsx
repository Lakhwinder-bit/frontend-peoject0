import { useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";
import Button from "../ui/button";

export default function TripDetails({ booking, updateBooking, onNext }) {
  const locations = ["Chandigarh", "Delhi", "Amritsar", "Shimla", "Manali"];
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (!booking.pickup || !booking.drop || !booking.travelDate || !booking.travelTime || !booking.passengers) {
      setError("Please complete all trip details before continuing.");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="mt-6">

      {/* Locations */}
      <div className="grid gap-4 sm:grid-cols-2">

        {/* Pickup */}
        <div>
          <label
            htmlFor="pickup"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Pickup location
          </label>

          <div className="relative">
            <select
              id="pickup"
              value={booking.pickup}
              onChange={(e) => updateBooking("pickup", e.target.value)}
              className="
                h-11 w-full appearance-none
                rounded-full
                border border-border
                bg-background
                px-4 pr-10
                text-sm
                text-foreground
                outline-none
                transition
                focus:border-primary
                focus:ring-2
                focus:ring-primary/10
              "
            >
              <option value="">Select pickup</option>
              {locations.map((location) => <option key={location}>{location}</option>)}
            </select>

            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
          </div>
        </div>

        {/* Drop */}
        <div>
          <label
            htmlFor="drop"
            className="mb-2 block text-sm font-semibold text-foreground"
          >
            Drop location
          </label>

          <div className="relative">
            <select
              id="drop"
              value={booking.drop}
              onChange={(e) => updateBooking("drop", e.target.value)}
              className="
                h-11 w-full appearance-none
                rounded-full
                border border-border
                bg-background
                px-4 pr-10
                text-sm
                text-foreground
                outline-none
                transition
                focus:border-primary
                focus:ring-2
                focus:ring-primary/10
              "
            >
              <option value="">Select destination</option>
              {locations.map((location) => <option key={location}>{location}</option>)}
            </select>

            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
          </div>
        </div>

      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="travelDate" className="mb-2 block text-sm font-semibold text-foreground">Travel date</label>
          <input id="travelDate" type="date" value={booking.travelDate} onChange={(e) => updateBooking("travelDate", e.target.value)} className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-secondary focus:ring-2 focus:ring-ring/30" />
        </div>
        <div>
          <label htmlFor="travelTime" className="mb-2 block text-sm font-semibold text-foreground">Travel time</label>
          <input id="travelTime" type="time" value={booking.travelTime} onChange={(e) => updateBooking("travelTime", e.target.value)} className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-secondary focus:ring-2 focus:ring-ring/30" />
        </div>
        <div>
          <label htmlFor="passengers" className="mb-2 block text-sm font-semibold text-foreground">Passengers</label>
          <input id="passengers" type="number" min="1" max="50" placeholder="e.g. 4" value={booking.passengers} onChange={(e) => updateBooking("passengers", e.target.value)} className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-secondary focus:ring-2 focus:ring-ring/30" />
        </div>
      </div>

      {/* Cancellation notice */}
      <div
        className="
          mt-4
          flex gap-3
          rounded-2xl
          bg-muted/60
          px-3 py-3
        "
      >
        <ShieldCheck
          size={14}
          className="mt-0.5 shrink-0 text-emerald-600"
        />

        <div>
          <p className="text-sm font-semibold text-foreground">
            Free cancellation
          </p>

          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Cancel up to 24 hours before pickup at no cost.
            Fares stay locked once confirmed.
          </p>
        </div>
      </div>

      {error && <p role="alert" className="mt-4 text-sm font-medium text-destructive">{error}</p>}
      <div className="mt-6 flex justify-end border-t border-border pt-5">
    
              <Button
               onClick={handleContinue}
                    type="button"
                    variant="hero"
                    size="lg"
                    className="rounded-full"
                  >
                    Continue
                  
                  </Button>
      </div>

    </div>
  );
}