import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <article
      className="
        group
        relative flex h-full flex-col overflow-hidden rounded-3xl
        border border-border/80 bg-card p-6 shadow-soft
        transition-all duration-300 sm:p-7
        hover:-translate-y-1 hover:border-secondary/50 hover:shadow-card
      "
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary/30 via-secondary to-secondary/30 opacity-70 transition-opacity group-hover:opacity-100" />

      {/* Icon */}
      <div
        className="
          flex size-14 shrink-0 items-center justify-center rounded-2xl
          bg-accent text-primary ring-1 ring-secondary/20
          transition-all duration-300
          group-hover:bg-primary group-hover:text-primary-foreground
        "
      >
        <Icon size={25} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <div className="mt-6 flex flex-1 flex-col">
        <h3
          className="
            text-lg font-bold leading-snug
            tracking-[-0.03em]
            text-card-foreground
            sm:text-xl
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3 text-sm leading-6 text-muted-foreground sm:text-[15px]
          "
        >
          {description}
        </p>
      </div>
    </article>
  );
};

export default FeatureCard;