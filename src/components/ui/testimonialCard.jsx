import React from "react";
import { Quote, Star } from "lucide-react";

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
        min-h-[380px]
        flex-col
        rounded-3xl
        border border-border/80
        bg-card
        p-7 sm:p-8
        shadow-soft
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-card
      "
    >
      {/* Quote Icon */}
      <Quote
        size={38}
        strokeWidth={2}
        className="text-secondary"
      />

      {/* Review */}
      <p
        className="
          mt-7
          text-[17px]
          leading-8
          text-muted-foreground
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
              size={21}
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