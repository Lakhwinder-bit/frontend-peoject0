import { useState } from "react";

export default function YourDetails({ booking, updateBooking, onNext, onBack }) {
  const [error, setError] = useState("");
  const handleContinue = () => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(booking.email);
    const validPhone = /^[+\d][\d\s()-]{8,}$/.test(booking.phone);
    if (!booking.customerName || !booking.phone || !booking.email || !validEmail || !validPhone) {
      setError("Enter your name, a valid phone number and a valid email address.");
      return;
    }
    setError("");
    onNext();
  };

  const fields = [
    { id: "customerName", label: "Full name", type: "text", placeholder: "Your full name", autoComplete: "name" },
    { id: "phone", label: "Mobile number", type: "tel", placeholder: "+91 98765 43210", autoComplete: "tel" },
    { id: "email", label: "Email address", type: "email", placeholder: "you@example.com", autoComplete: "email" },
  ];

  return (
    <div className="mt-7">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Step 3</p>
      <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] sm:text-3xl">Tell us who&apos;s travelling</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">We&apos;ll use these details to send your booking confirmation.</p>

      <div className="mt-7 space-y-5">
        {fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="mb-2 block text-sm font-semibold text-card-foreground">{field.label}</label>
            <input id={field.id} type={field.type} placeholder={field.placeholder} autoComplete={field.autoComplete} value={booking[field.id]} onChange={(e) => updateBooking(field.id, e.target.value)} className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-secondary focus:ring-2 focus:ring-ring/30" />
          </div>
        ))}
      </div>

      {error && <p role="alert" className="mt-4 text-sm font-medium text-destructive">{error}</p>}
      <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
        <button type="button" onClick={onBack} className="rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-muted-foreground transition hover:border-primary/30 hover:text-foreground">Back</button>
        <button type="button" onClick={handleContinue} className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-primary-light">Continue</button>
      </div>
    </div>
  );
}