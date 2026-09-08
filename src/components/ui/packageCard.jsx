import React from "react";
import Image from "next/image";
import {
  MapPin,
  Star,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import Button from "./button";

const TourPackageCard = ({
  image,
  location,
  title,
  rating,
  duration,
  reviews,
  highlights,
  price,
}) => {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border border-border/80
        bg-card
        shadow-soft
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-card
      "
    >
      {/* Image */}
      <div className="relative h-[160px] overflow-hidden sm:h-[180px]">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.04]
          "
        />

        {/* Image Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
          "
        />

        {/* Location + Title */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-1.5 text-sm font-medium text-white/90">
            <MapPin size={15} />
            <span>{location}</span>
          </div>

          <div className="mt-1 flex items-end justify-between gap-3">
            <h3
              className="
                text-xl
                font-bold
                leading-tight
                tracking-[-0.03em]
                text-white
              "
            >
              {title}
            </h3>

            {/* Rating */}
            <div
              className="
                flex shrink-0
                items-center gap-1
                rounded-full
                bg-card/95
                px-3 py-1.5
                text-sm
                font-semibold
                text-card-foreground
                shadow-soft
              "
            >
              <Star
                size={14}
                fill="currentColor"
                className="text-secondary"
              />
              {rating}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-5">

        {/* Duration + Reviews */}
        <div className="flex items-center gap-2">
          <span
            className="
              inline-flex items-center gap-1.5
              rounded-full
              bg-muted
              px-3 py-1.5
              text-xs
              font-medium
              text-muted-foreground
            "
          >
            <CalendarDays
                size={14}
              className="text-primary"
            />
            {duration}
          </span>

          <span
            className="
              rounded-full
              bg-muted
              px-3 py-1.5
              text-xs
              font-medium
              text-muted-foreground
            "
          >
            {reviews} reviews
          </span>
        </div>

        {/* Highlights */}
        <ul className="mt-5 space-y-2.5">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="
                flex items-start gap-2
                text-[15px]
                leading-6
                text-muted-foreground
              "
            >
              <span
                className="
                  mt-2
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-secondary
                "
              />

              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="my-5 h-px bg-border" />

        {/* Price + Book */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              Per person from
            </p>

            <p
              className="
                mt-0.5
                text-2xl
                font-extrabold
                tracking-[-0.03em]
                text-primary
              "
            >
              {price}
            </p>
          </div>

          <Button
            type="button"
            variant="hero"
            size="lg"
            className="rounded-full"
          >
            Book
          
          </Button>
        </div>
      </div>
    </article>
  );
};

export default TourPackageCard;