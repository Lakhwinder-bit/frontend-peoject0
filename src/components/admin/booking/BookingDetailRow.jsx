"use client";

export default function BookingDetailRow({
  icon,
  label,
  value,
  last = false,
}) {
  return (
    <div
      className={`flex items-center justify-between gap-5 py-2.5 ${
        !last ? "border-b border-border/50" : ""
      }`}
    >
      <div className="flex items-center gap-2.5 text-muted-foreground">
        {icon}

        <span className="text-sm">
          {label}
        </span>
      </div>

      <span className="max-w-[240px] text-right text-sm font-semibold text-foreground">
        {value || "—"}
      </span>
    </div>
  );
}