import { MapPin } from "lucide-react";

export default function ContactLocation() {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border border-border/80
        bg-card
        shadow-soft
      "
    >
      {/* Map placeholder */}
      <div
        className="
          relative
          h-45
          overflow-hidden
            contact-map-grid bg-muted
        "
      >
        {/* Grid pattern */}
        <div
          className="
            absolute inset-0
            opacity-60
          "
        />

        {/* Location */}
        <div
          className="
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center
          "
        >
          <div
            className="
              flex h-9 w-9
              items-center
              justify-center
              rounded-xl
              bg-accent
              text-accent-foreground
              shadow-lg
            "
          >
            <MapPin size={18} />
          </div>

          <p className="mt-3 text-sm font-bold text-foreground">
            Kapoor Travels HQ
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            Google Map embed placeholder
          </p>
        </div>
      </div>

      {/* Address */}
      <div className="border-t border-border/70 p-6">
        <p className="text-sm font-bold text-foreground">
          Office address
        </p>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          SCO 42, Sector 34–A, Chandigarh, Punjab 160022, India
        </p>
      </div>
    </div>
  );
}