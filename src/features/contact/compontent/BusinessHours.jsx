import { Clock3 } from "lucide-react";

const hours = [
  {
    day: "Monday – Friday",
    time: "6:00 AM – 11:00 PM",
  },
  {
    day: "Saturday – Sunday",
    time: "6:00 AM – 12:00 AM",
  },
  {
    day: "Emergency Support",
    time: "24 / 7 Available",
  },
];

export default function BusinessHours() {
  return (
    <div
      className="
        rounded-2xl
        border border-border/80
        bg-card
        p-6
        shadow-soft
      "
    >
      <div className="flex items-center gap-2">
        <Clock3
          size={19}
          className="text-primary"
          aria-hidden="true"
        />

        <h3 className="text-base font-bold text-card-foreground">
          Business hours
        </h3>
      </div>

      <div className="mt-4">
        {hours.map((item, index) => (
          <div
            key={item.day}
            className={`
              flex
              items-center
              justify-between
              gap-4
              py-3
              text-sm
              ${
                index !== hours.length - 1
                  ? "border-b border-border"
                  : ""
              }
            `}
          >
            <span className="text-muted-foreground">
              {item.day}
            </span>

            <span className="whitespace-nowrap font-semibold text-foreground">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}