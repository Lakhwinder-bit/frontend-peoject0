export default function FeedSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="overflow-hidden rounded-2xl border bg-card"
        >
          {/* Image */}
          <div className="h-52 animate-pulse bg-muted" />

          <div className="space-y-4 p-5">
            {/* Title */}
            <div className="h-6 w-3/4 animate-pulse rounded bg-muted" />

            {/* Text */}
            <div className="h-4 w-full animate-pulse rounded bg-muted" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />

            {/* Button */}
            <div className="h-10 w-28 animate-pulse rounded-lg bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
}