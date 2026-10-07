export default function TourSkeleton() {
  return (
    <section className="container-app py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-2xl border"
          >
            {/* Image */}
            <div className="h-56 animate-pulse bg-muted" />

            <div className="space-y-4 p-5">

              {/* Title */}
              <div className="h-6 w-3/4 animate-pulse rounded bg-muted" />

              {/* Description */}
              <div className="h-4 w-full animate-pulse rounded bg-muted" />

              <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />

              {/* Button */}
              <div className="h-10 w-full animate-pulse rounded-lg bg-muted" />

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}