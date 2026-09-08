const team = [
  {
    initials: "RK",
    name: "Rajinder Kapoor",
    role: "Founder & Managing Director",
  },
  {
    initials: "SK",
    name: "Simranjeet Kapoor",
    role: "Head of Operations",
  },
  {
    initials: "DN",
    name: "Deepak Nair",
    role: "Fleet & Safety Manager",
  },
  {
    initials: "AV",
    name: "Anjali Verma",
    role: "Guest Experience Lead",
  },
];

export default function AboutTeam() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <div className="container-app">

        <div className="text-center">
          <span className="inline-flex rounded-full border border-secondary/40 bg-accent px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Our team
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-foreground sm:text-4xl">
            The people behind every journey
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">
            A small, tightly-run team focused on making every journey comfortable, reliable and personal.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl border border-border/80 bg-card p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-card"
            >
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-primary-foreground shadow-soft transition-transform duration-300 group-hover:scale-105">
                {member.initials}
              </div>

              <h3 className="mt-5 text-sm font-bold text-card-foreground">
                {member.name}
              </h3>

              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                {member.role}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}