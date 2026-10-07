"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import {
  UsersRound,
  BriefcaseBusiness,
  Snowflake,
  X,
} from "lucide-react";
import Button from "./button";

const PopularVehicleCard = ({
  image,
  type,
  badge,
  name,
  subtitle,
  seats,
  bags,
  ac = true,
  price,
  perKm,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <article
        className="
          group
          overflow-hidden
          rounded-3xl
          border border-border/80
          bg-card
          shadow-soft
        "
      >
        {/* Image */}
        <div className="relative h-[180px] overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />

          <span
            className="
              absolute left-3 top-3
              rounded-full
              bg-primary/90
              px-3 py-1
              text-xs font-bold
              text-primary-foreground
            "
          >
            {type}
          </span>

          <span
            className="
              absolute right-3 top-3
              rounded-full
              gradient-sunset
              px-3 py-1
              text-xs font-bold
              text-secondary-foreground
            "
          >
            {badge}
          </span>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-5">
          <h3 className="text-xl font-bold text-card-foreground">
            {name}
          </h3>

          <p className="mt-1.5 text-[15px] text-muted-foreground">
            {subtitle}
          </p>

          {/* Features */}
          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center justify-center rounded-[20px] bg-muted px-2 py-2">
              <UsersRound size={15} className="text-primary" />

              <span className="mt-1 text-sm text-muted-foreground">
                {seats}
              </span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-[20px] bg-muted px-2 py-2">
              <BriefcaseBusiness size={15} className="text-primary" />

              <span className="mt-1 text-sm text-muted-foreground">
                {bags}
              </span>
            </div>

            <div className="flex flex-col items-center justify-center rounded-[20px] bg-muted px-2 py-2">
              <Snowflake size={15} className="text-primary" />

              <span className="mt-1 text-sm text-muted-foreground">
                {ac ? "AC" : "Non AC"}
              </span>
            </div>
          </div>

          <div className="my-5 h-px bg-border" />

          {/* Price + Book */}
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Starting from
              </p>

              <p className="mt-0.5 text-xl font-bold text-primary">
                {price}
              </p>

              <p className="mt-0.5 text-sm text-muted-foreground">
                {perKm}/km after
              </p>
            </div>

            {/* Book Button */}
             <Button
                   type="button"
            onClick={() => setShowModal(true)}
                   variant="hero"
                   size="lg"
                   className="rounded-full"
                 >
                   Book
                 
                 </Button>
          </div>
        </div>
      </article>

      {/* Modal */}
      {showModal &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="
              fixed inset-0
              z-[999999]
              flex items-center justify-center
              bg-black/60
              p-4
            "
            onClick={() => setShowModal(false)}
          >
            <div
              className="
                relative
                w-full max-w-sm
                rounded-2xl
                bg-card
                p-6
                shadow-2xl
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="
                  absolute right-4 top-4
                  flex size-9
                  items-center justify-center
                  rounded-full
                  bg-muted
                  transition
                  hover:bg-muted/80
                "
                aria-label="Close booking modal"
              >
                <X size={18} />
              </button>

              {/* Modal Content */}
              <h2 className="pr-8 text-xl font-bold text-card-foreground">
                Book {name}
              </h2>

              <p className="mt-2 text-muted-foreground">
                You selected the {name} ({type}).
              </p>

              <div className="mt-5 rounded-xl bg-muted p-4">
                <p className="text-sm text-muted-foreground">
                  Starting from
                </p>

                <p className="mt-1 text-2xl font-bold text-primary">
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
          </div>,
          document.body
        )}
    </>
  );
};

export default PopularVehicleCard;