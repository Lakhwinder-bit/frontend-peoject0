const stats = [
  {
    value: "42K+",
    label: "Trips",
  },
  {
    value: "120+",
    label: "Vehicles",
  },
  {
    value: "16",
    label: "Years",
  },
];

export default function HeroStats() {
  return (
    <dl 

    className="animate-fade-up animation-delay-150 mt-14 grid w-full max-w-3xl grid-cols-3 overflow-hidden rounded-2xl border border-white/15 bg-primary-dark/55 px-4 py-5 text-white shadow-soft sm:px-10 sm:py-6 dark:border-white/10 dark:bg-card/80">
      {stats.map((stat) => (
        <div
        
          key={stat.label}
          className="flex flex-col items-center justify-center"
        >
          <dt className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            {stat.value}
          </dt>

          <dd className="mt-1 text-xs font-medium text-white/70 sm:text-sm">
            {stat.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}