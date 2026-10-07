import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { formatCurrency, formatDate, formatTime, vehicleOptions } from "./bookingData";

const Detail = ({ label, value }) => (
  <div className="flex items-start justify-between gap-4 border-b border-border/70 py-3 last:border-0">
    <dt className="text-sm text-muted-foreground">{label}</dt>
    <dd className="text-right text-sm font-semibold text-card-foreground">{value || "Not provided"}</dd>
  </div>
);

export default function OrderReview({ booking, onBack, onConfirm }) {
  const vehicle = vehicleOptions.find((option) => option.id === booking.vehicle);

  return (
    <div className="mt-7">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Step 4</p>
      <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] sm:text-3xl">Review your journey</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">Check the details below before sending your booking request.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <section className="rounded-2xl border border-border/80 bg-background p-5">
          <h3 className="text-sm font-bold text-card-foreground">Trip details</h3>
          <dl className="mt-3"><Detail label="Pickup" value={booking.pickup} /><Detail label="Drop" value={booking.drop} /><Detail label="Date" value={formatDate(booking.travelDate)} /><Detail label="Time" value={formatTime(booking.travelTime)} /><Detail label="Passengers" value={booking.passengers} /></dl>
        </section>
        <section className="rounded-2xl border border-border/80 bg-background p-5">
          <h3 className="text-sm font-bold text-card-foreground">Vehicle details</h3>
          <dl className="mt-3"><Detail label="Vehicle" value={vehicle?.name} /><Detail label="Seats" value={vehicle ? `${vehicle.seats} seats` : "Not selected"} /><Detail label="Estimated fare" value={vehicle ? formatCurrency(vehicle.price) : "Not selected"} /></dl>
        </section>
      </div>

      <section className="mt-5 rounded-2xl border border-border/80 bg-background p-5">
        <h3 className="text-sm font-bold text-card-foreground">Customer details</h3>
        <dl className="mt-3"><Detail label="Name" value={booking.customerName} /><Detail label="Phone" value={booking.phone} /><Detail label="Email" value={booking.email} /></dl>
      </section>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-primary p-5 text-primary-foreground">
        <span className="text-sm font-semibold">Estimated total</span>
        <span className="text-2xl font-extrabold">{vehicle ? formatCurrency(vehicle.price) : "₹0"}</span>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
        <button type="button" onClick={onBack} className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-muted-foreground transition hover:border-primary/30 hover:text-foreground"><ArrowLeft size={16} aria-hidden="true" /> Back</button>
        <button type="button" onClick={onConfirm} className="inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"><CheckCircle2 size={17} aria-hidden="true" /> Confirm booking</button>
      </div>
    </div>
  );
}