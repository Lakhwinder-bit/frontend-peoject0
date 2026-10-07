import React from "react";
import { Star } from "lucide-react";

const TestimonialCard = ({
  review,
  name,
  location,
  initials,
  rating = 5,
}) => {
  return (
    <article
      className="
        flex
        min-h-[330px]
        w-[min(82vw,22rem)]
        shrink-0
        flex-col
        rounded-2xl
        border border-border
        bg-card
        p-6 sm:p-7
        shadow-xs
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-card
      "
    >
      {/* Review */}
      <p
        className="
          text-base
          leading-7
          text-card-foreground
        "
      >
        “{review}”
      </p>

      {/* Bottom Content */}
      <div className="mt-auto">

        {/* Rating */}
        <div className="mt-7 flex items-center gap-1.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={17}
              strokeWidth={1.8}
              className={
                index < rating
                  ? "fill-secondary text-secondary"
                  : "text-border"
              }
            />
          ))}
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-border" />

        {/* User */}
        <div className="flex items-center gap-4">

          {/* Initials */}
          <div
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-primary
              text-base
              font-bold
              text-primary-foreground
            "
          >
            {initials}
          </div>

          {/* Name */}
          <div>
            <h3
              className="
                text-[17px]
                font-bold
                tracking-[-0.02em]
                text-card-foreground
              "
            >
              {name}
            </h3>

            <p
              className="
                mt-0.5
                text-[15px]
                text-muted-foreground
              "
            >
              {location}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;