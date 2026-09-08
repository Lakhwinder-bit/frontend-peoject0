import { CarFront, MapPinned, Route, Star } from "lucide-react";

const stats = [
  {
    value: "42,380",
    label: "Trips completed",
    detail: "Journeys made",
    icon: Route,
  },
  {
    value: "120",
    label: "Vehicles in fleet",
    detail: "Ready to travel",
    icon: CarFront,
  },
  {
    value: "40+",
    label: "Cities served",
    detail: "Across India",
    icon: MapPinned,
  },
  {
    value: "4.9 / 5",
    label: "Average rating",
    detail: "From our guests",
    icon: Star,
  },
];

export default function AboutIntro() {
  return (
    <section className="section-y bg-background">
      <div className="container-app">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">

          {/* Content */}
          <div className="max-w-2xl lg:pt-3">
            <span className="inline-flex rounded-full border border-secondary/40 bg-accent px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Our story
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-5xl">
              Built on repeat customers,
              <span className="block text-foreground">not advertising.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Kapoor Travel grew from a small family-run travel business into a trusted travel company through reliable service, comfortable vehicles and repeat customers.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Our approach is simple: look after people, and they will come back. Every journey is designed around comfort, safety and reliability.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Today we operate a growing fleet of comfortable vehicles, professional drivers and technology that keeps every journey predictable from pickup to drop-off.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="group relative rounded-2xl border border-border/80 bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-card sm:p-6"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary ring-1 ring-secondary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <stat.icon size={18} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <p className="mt-6 text-2xl font-extrabold tracking-[-0.03em] text-card-foreground sm:text-3xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm font-semibold text-card-foreground">
                  {stat.label}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.detail}
                </p>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}