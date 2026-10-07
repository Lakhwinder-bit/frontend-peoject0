import { Eye, ShieldCheck, Target } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make intercity travel in India predictable, safe and genuinely comfortable — at a price families can feel good about.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become India's most trusted travel brand — known for punctuality, honest pricing and great technology.",
  },
  {
    icon: ShieldCheck,
    title: "Our Promise",
    description:
      "The fare you see is the fare you pay. If we advertise it, the vehicle is ready and your journey is covered.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="container-app">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <span className="inline-flex rounded-full border border-secondary/40 bg-accent px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            What guides us
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-4xl">
            The standard behind every journey
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">

        {values.map((item) => (
          <article
            key={item.title}
            className="group rounded-2xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-card sm:p-7"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-accent text-primary ring-1 ring-secondary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <item.icon size={22} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <h3 className="mt-6 text-lg font-bold leading-snug tracking-[-0.03em] text-card-foreground">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}

        </div>
      </div>
    </section>
  );
}