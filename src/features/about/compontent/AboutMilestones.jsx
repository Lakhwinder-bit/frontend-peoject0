const milestones = [
  {
    year: "2009",
    title: "Two cars, one office",
    description:
      "Started with a small operation and a clear vision for dependable travel.",
  },
  {
    year: "2013",
    title: "First fleet expansion",
    description:
      "Expanded the fleet and introduced station-hire travel services.",
  },
  {
    year: "2017",
    title: "Corporate contracts",
    description:
      "Started working with regional businesses and corporate customers.",
  },
  {
    year: "2021",
    title: "GPS & sanitisation",
    description:
      "Introduced vehicle tracking and stronger pre-trip safety protocols.",
  },
  {
    year: "2026",
    title: "120 vehicles strong",
    description:
      "Serving 40+ cities with a strong customer rating and growing fleet.",
  },
];

export default function AboutMilestones() {
  return (
    <section className="border-t border-border/70 bg-background py-16 sm:py-20 lg:py-24">
      <div className="container-app max-w-4xl">

        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-secondary/40 bg-accent px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Milestones
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-foreground sm:text-4xl">
            How we got here
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mt-12">

          <div className="absolute bottom-0 left-1.75 top-0 w-px bg-border" />

          <div className="space-y-8">

            {milestones.map((item) => (
              <div
                key={item.year}
                className="relative grid grid-cols-[16px_64px_1fr] gap-4 sm:grid-cols-[16px_80px_1fr] sm:gap-6"
              >
                <div className="relative z-10 mt-1.5 size-2.5 rounded-full bg-secondary ring-4 ring-background" />

                <p className="text-sm font-bold text-muted-foreground">
                  {item.year}
                </p>

                <div>
                  <h3 className="text-base font-bold text-foreground sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}