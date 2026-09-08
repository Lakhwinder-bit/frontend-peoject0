import { Check, Clock3, Users } from "lucide-react";
import { useState } from "react";
import { vehicleOptions } from "./bookingData";

export default function VehicleSchedule({ booking, updateBooking, onNext, onBack }) {
  const [error, setError] = useState("");
  const handleContinue = () => {
    if (!booking.vehicle) {
      setError("Please select a vehicle before continuing.");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="mt-7">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Step 2</p>
        <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] sm:text-3xl">Choose your vehicle</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">Select the vehicle that best fits your group and route.</p>
      </div>

      <div className="mt-6 grid gap-3">
        {vehicleOptions.map((vehicle) => {
          const selected = booking.vehicle === vehicle.id;
          return (
            <button
              key={vehicle.id}
              type="button"
              onClick={() => { updateBooking("vehicle", vehicle.id); setError(""); }}
              className={`group flex w-full items-start justify-between gap-4 rounded-2xl border p-4 text-left transition-all ${selected ? "border-primary bg-primary/5 shadow-soft" : "border-border bg-background hover:-translate-y-0.5 hover:border-secondary/60 hover:shadow-soft"}`}
              aria-pressed={selected}
            >
              <span className="flex min-w-0 items-start gap-3">
                <span className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl ${selected ? "bg-primary text-primary-foreground" : "bg-accent text-primary"}`}>
                  {selected ? <Check size={17} aria-hidden="true" /> : <Users size={17} aria-hidden="true" />}
                </span>
                <span>
                  <span className="block text-base font-bold text-card-foreground">{vehicle.name}</span>
                  <span className="mt-1 block text-sm leading-6 text-muted-foreground">{vehicle.description}</span>
                  <span className="mt-2 flex items-center gap-1.5 text-sm font-medium text-muted-foreground"><Users size={14} aria-hidden="true" /> {vehicle.seats} seats</span>
                </span>
              </span>
              <span className="shrink-0 text-sm font-bold text-primary sm:text-base">{vehicle.price.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="scheduleDate" className="mb-2 block text-sm font-semibold text-foreground">Travel date</label>
          <input id="scheduleDate" type="date" value={booking.travelDate} onChange={(e) => updateBooking("travelDate", e.target.value)} className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-secondary focus:ring-2 focus:ring-ring/30" />
        </div>
        <div>
          <label htmlFor="scheduleTime" className="mb-2 block text-sm font-semibold text-foreground">Travel time</label>
          <input id="scheduleTime" type="time" value={booking.travelTime} onChange={(e) => updateBooking("travelTime", e.target.value)} className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none focus:border-secondary focus:ring-2 focus:ring-ring/30" />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
        <button type="button" onClick={onBack} className="rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-muted-foreground transition hover:border-primary/30 hover:text-foreground">Back</button>
        <button type="button" onClick={handleContinue} className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-primary-light">Continue</button>
      </div>
      {error && <p role="alert" className="mt-3 text-right text-sm font-medium text-destructive">{error}</p>}
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground"><Clock3 size={14} className="text-primary" aria-hidden="true" /> Schedule details can be changed before confirmation.</div>
    </div>
  );
}