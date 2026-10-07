import React from "react";

const FleetCard = ({ icon: Icon, name, seats, price }) => {
  return (
    <article
      className="
        group relative flex min-h-[190px] flex-col items-center justify-center
        overflow-hidden rounded-3xl border border-border/80 bg-card px-3 py-5
        text-center shadow-soft transition-all duration-300
        hover:-translate-y-1 hover:border-secondary/50 hover:shadow-card
      "
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary/30 via-secondary to-secondary/30 opacity-70 transition-opacity group-hover:opacity-100" />

      {/* Icon */}
      <div
        className="
          flex size-12 items-center justify-center rounded-xl bg-accent
          text-primary ring-1 ring-secondary/30
          transition-all duration-300
          group-hover:bg-secondary
          group-hover:text-secondary-foreground
          group-hover:shadow-glow
        "
      >
        <Icon size={22} strokeWidth={1.8} />
      </div>

      {/* Name */}
      <h3
        className="
          mt-4 text-base font-bold leading-snug tracking-[-0.025em] sm:text-lg
          text-card-foreground
        "
      >
        {name}
      </h3>

      {/* Seats */}
      <p className="mt-2 text-sm text-muted-foreground">
        {seats}
      </p>

      {/* Price */}
      <p className="mt-2 text-sm font-semibold text-primary">
        From {price}
      </p>
    </article>
  );
};

export default FleetCard;