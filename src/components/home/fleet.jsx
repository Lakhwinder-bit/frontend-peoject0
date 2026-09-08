import React from "react";
import {
  CarFront,
  Car,
  Truck,
  UsersRound,
  BusFront,
} from "lucide-react";

import FleetCard from "../ui/fleetCard";
import PopularVehicleCard from "../ui/popularVehicleCard";

const Fleet = () => {
  return (
    <section className="border-y border-border/60 bg-background py-16 sm:py-20 lg:py-24">
      <div className="container-app">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}
          <span
            className="
              inline-flex
              rounded-full
              border border-secondary/40
              bg-accent
              px-4 py-1.5
              text-[11px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-primary
            "
          >
            Our Fleet
          </span>

          {/* Heading */}
          <h2
            className="
              mt-5 text-3xl font-extrabold leading-[1.08]
              tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[56px]
            "
          >
            Choose the vehicle
            <br className="hidden sm:block" />
            that fits your journey
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg
            "
          >
            From solo airport runs to 45-seater group pilgrimages —
            every category is available on demand.
          </p>
        </div>

        {/* Fleet */}
        <div
          className="
            mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-6
          "
        >
          <FleetCard
            icon={CarFront}
            name="Cars"
            seats="4 seats"
            price="₹1,499"
          />

          <FleetCard
            icon={Car}
            name="Sedan"
            seats="4 seats"
            price="₹1,899"
          />

          <FleetCard
            icon={Truck}
            name="SUV"
            seats="7 seats"
            price="₹2,799"
          />

          <FleetCard
            icon={UsersRound}
            name="Tempo Traveller"
            seats="12 seats"
            price="₹5,499"
          />

          <FleetCard
            icon={BusFront}
            name="Mini Bus"
            seats="25 seats"
            price="₹9,500"
          />

          <FleetCard
            icon={BusFront}
            name="Luxury Bus"
            seats="45 seats"
            price="₹18,500"
          />
        </div>

        {/* //poplur card */}

        {/* Popular Vehicles */}
<div className="mt-16 sm:mt-20">



  {/* Vehicle Cards */}
  <div
    className="
      grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3
    "
  >
    <PopularVehicleCard
      image="/veh-hatchback.jpg"
      type="Hatchback"
      badge="Budget friendly"
      name="Maruti Swift / WagonR"
      subtitle="Budget friendly · City rides"
      seats="4 seats"
      bags="2 bags"
      price="₹1,499"
      perKm="₹11"
    />

    <PopularVehicleCard
      image="/veh-minibus.jpg"
      type="Sedan"
      badge="Most booked"
      name="Honda Amaze / Dzire"
      subtitle="Most booked · Airport transfer"
      seats="4 seats"
      bags="3 bags"
      price="₹1,899"
      perKm="₹13"
    />

    <PopularVehicleCard
      image="/veh-suv.jpg"
      type="SUV"
      badge="Hill friendly"
      name="Toyota Innova Crysta"
      subtitle="Hill friendly · Family favourite"
      seats="7 seats"
      bags="5 bags"
      price="₹2,799"
      perKm="₹18"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default Fleet;