import React from "react";

import FleetFilters from "./fleetFilters";
import PopularVehicleCard from "../ui/popularVehicleCard";

const Fleet = () => {
  return (
    <section className="border-y border-border/60 bg-background py-2 sm:py-4 lg:py-6">
      <div className="container-app">

        {/* Filters */}
        <FleetFilters />

        {/* Popular Vehicles */}
        <div className="mt-4 sm:mt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

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