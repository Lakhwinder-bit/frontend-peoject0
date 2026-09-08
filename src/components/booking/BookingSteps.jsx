import { Check, ClipboardCheck, MapPin, Car, UserRound } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Trip details",
    icon: MapPin,
  },
  {
    id: 2,
    title: "Vehicle & schedule",
    icon: Car,
  },
  {
    id: 3,
    title: "Your details",
    icon: UserRound,
  },
  {
    id: 4,
    title: "Review order",
    icon: ClipboardCheck,
  },
];

export default function BookingSteps({ currentStep = 1 }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {steps.map((step) => {
        const Icon = step.icon;
        const active = currentStep === step.id;
        const complete = currentStep > step.id;

        return (
          <div
            key={step.id}
            className={`flex min-w-0 items-center gap-2 rounded-xl border px-2.5 py-2.5 transition-all sm:px-3 sm:py-3 ${active ? "border-primary/30 bg-primary/5" : complete ? "border-secondary/40 bg-accent/60" : "border-border bg-muted/30"}`}
          >
            <div
              className={`
                flex h-7 w-7 shrink-0 items-center justify-center
                rounded-full
                ${active ? "bg-primary text-primary-foreground" : complete ? "bg-secondary text-secondary-foreground" : "bg-card text-muted-foreground"}
              `}
            >
              {complete ? <Check size={13} strokeWidth={2} /> : <Icon size={13} strokeWidth={1.8} />}
            </div>

            <span
              className={`
                hidden truncate text-xs font-medium sm:block
                ${
                  active
                    ? "text-foreground"
                    : "text-muted-foreground"
                }
              `}
            >
              {step.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}