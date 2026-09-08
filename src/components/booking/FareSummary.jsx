import { BadgeCheck, CarFront, Clock3, ShieldCheck } from "lucide-react";
import { formatCurrency, vehicleOptions } from "./bookingData";

export default function FareSummary({ booking }) {
  const vehicle = vehicleOptions.find((option) => option.id === booking.vehicle);
  const total = vehicle?.price || 0;
  return (
    <aside className="h-fit overflow-hidden rounded-2xl border border-border/80 bg-card shadow-soft lg:sticky lg:top-6">

      {/* Header */}
      <div className="bg-primary px-5 py-5 text-primary-foreground">

        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
          <CarFront size={14} aria-hidden="true" />
          Estimated fare
        </p>

        <h2 className="mt-1 text-3xl font-extrabold tracking-tight">
          {vehicle ? formatCurrency(total) : "Select vehicle"}
        </h2>

        <p className="mt-1 text-sm text-primary-foreground/70">
          {booking.pickup && booking.drop ? `${booking.pickup} → ${booking.drop}` : "Your route will appear here"}
        </p>

      </div>

      {/* Fare details */}
      <div className="p-5">

        {/* Vehicle */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="text-muted-foreground">
            Vehicle
          </span>

            <span className="font-semibold text-foreground">
            {vehicle ? `${vehicle.name} · ${vehicle.seats} seats` : "Not selected"}
          </span>
        </div>

        <div className="mt-3 space-y-3">
          {[
            ["Distance", "Calculated after confirmation"],
            ["Driver allowance", "Included"],
            ["Tolls & parking", "At actuals"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex flex-wrap items-center justify-between gap-2 text-sm"
            >
              <span className="text-muted-foreground">
                {label}
              </span>

              <span className="font-medium text-foreground">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="my-4 border-t border-border pt-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-foreground">
              Total payable
            </span>

            <span className="text-sm font-bold text-primary">
              {vehicle ? formatCurrency(total) : "₹0"}
            </span>
          </div>
        </div>

      </div>

      {/* Bottom notes */}
      <div className="border-t border-border bg-muted/30 px-5 py-4">

        <div className="space-y-2">

          <div className="flex items-center gap-2">
            <BadgeCheck
              size={12}
              className="text-emerald-600"
            />

            <span className="text-xs text-muted-foreground">
              Tolls & parking billed at actuals
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3
              size={12}
              className="text-primary"
            />

            <span className="text-xs text-muted-foreground">
              Confirmation within 15 minutes
            </span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck
              size={12}
              className="text-emerald-600"
            />

            <span className="text-xs text-muted-foreground">
              Pay after the trip — no advance
            </span>
          </div>

        </div>

      </div>

    </aside>
  );
}