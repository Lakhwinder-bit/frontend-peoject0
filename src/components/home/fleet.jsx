import React from "react";

import FleetCard from "../ui/fleetCard";
import PopularVehicleCard from "../ui/popularVehicleCard";

import {
  getActiveItems,
  getUniqueFleet,
  getFleetIcon,
} from "../../utils/fleet";

const Fleet = ({ feeds = [] }) => {
  const activeFleet = getActiveItems(feeds);
  const uniqueFleet = getUniqueFleet(feeds);

  return (
    <section className="border-y border-border/60 bg-background py-16 sm:py-20 lg:py-24">
      <div className="container-app">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}
          <span
            className="
              inline-flex rounded-full
              border border-secondary/40
              bg-accent px-4 py-1.5
              text-[11px] font-bold uppercase
              tracking-[0.2em] text-primary
            "
          >
            Our Fleet
          </span>

          {/* Heading */}
          <h2
            className="
              mt-5 text-3xl font-extrabold
              leading-[1.08] tracking-[-0.04em]
              text-foreground
              sm:text-5xl
              lg:text-[56px]
            "
          >
            Choose the vehicle
            <br className="hidden sm:block" />
            that fits your journey
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-base leading-7
              text-muted-foreground
              sm:text-lg
            "
          >
            From solo airport runs to 45-seater group
            pilgrimages — every category is available on demand.
          </p>
        </div>

        {/* Fleet Categories */}
        <div
          className="
            mt-10 grid grid-cols-2 gap-3
            sm:mt-14 sm:gap-6
            lg:grid-cols-6
          "
        >
          {uniqueFleet.map((feed) => {
            const Icon = getFleetIcon(feed.category);

            return (
              <FleetCard
                key={feed.category}
                icon={Icon}
                name={feed.category}
                seats={`${feed.seat} seats`}
                price={`₹${feed.price}`}
              />
            );
          })}
        </div>

        {/* Popular Vehicles */}
        <div className="mt-16 sm:mt-20">

          <div
            className="
              grid grid-cols-1 gap-6
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {activeFleet.slice(0,3).map((feed) => (
              <PopularVehicleCard
                key={feed._id}
                image={"/veh-hatchback.jpg"}
                type={feed.category}
                badge={feed.badge}
                name={feed.name}
                subtitle={feed.description}
                seats={`${feed.seat} seats`}
                bags={`${feed.luggage} bags`}
                price={`₹${feed.price}`}
                perKm={`₹${feed.pricePerKm}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Fleet;