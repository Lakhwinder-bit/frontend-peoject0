"use client";

export default function TabelSkeleton() {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_0.7fr_0.8fr_0.7fr_40px] items-center gap-5 px-5 py-5">
      {/* Package */}
      <div className="flex items-center gap-3">
        <div className="h-14 w-20 animate-pulse rounded-xl bg-muted" />

        <div className="space-y-2">
          <div className="h-4 w-44 animate-pulse rounded bg-muted" />
          <div className="h-3 w-56 animate-pulse rounded bg-muted" />
        </div>
      </div>

      {/* Location */}
      <div className="h-4 w-32 animate-pulse rounded bg-muted" />

      {/* Duration */}
      <div className="h-4 w-28 animate-pulse rounded bg-muted" />

      {/* Price */}
      <div className="h-4 w-20 animate-pulse rounded bg-muted" />

      {/* Rating */}
      <div className="h-7 w-20 animate-pulse rounded-full bg-muted" />

      {/* Status */}
      <div className="h-7 w-20 animate-pulse rounded-full bg-muted" />

      {/* Action */}
      <div className="h-9 w-9 animate-pulse rounded-lg bg-muted" />
    </div>
  );
}