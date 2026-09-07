import React from "react";
import { ArrowRight, Route, CarFront } from "lucide-react";

const RouteCard = ({
  from,
  to,
  distance,
  vehicle,
  price,
}) => {
  return (
    <article
      className="
  card-lift group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft
      "
    >
      {/* Route Information */}
      <div className="min-w-0">

        {/* Route */}
        <div className="flex items-center gap-2">
          <h3
            className="
              truncate
              text-md
              font-bold
              tracking-[-0.025em]
              text-card-foreground
              sm:text-lg
            "
          >
            {from}
          </h3>

          <ArrowRight
            size={20}
            strokeWidth={1.8}
            className="
              shrink-0
              text-secondary
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />

          <h3
            className="
              truncate
              text-md
              font-bold
              tracking-[-0.025em]
              text-card-foreground
              sm:text-lg
            "
          >
            {to}
          </h3>
        </div>

        {/* Distance + Vehicle */}
        <div
          className="
       mt-1.5 flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground
          "
        >
          <span className="inline-flex items-center gap-1.5">
            <Route size={15} strokeWidth={1.8} />
            {distance}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <CarFront size={15} strokeWidth={1.8} />
            {vehicle}
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="shrink-0 text-right">
        <p
          className="
          text-xs text-muted-foreground
          "
        >
          All inclusive
        </p>

        <p
          className="
           text-lg font-extrabold text-primary
          "
        >
          {price}
        </p>
      </div>
    </article>
  );
};

export default RouteCard;