import React from "react";
import FleetFilters from "./fleetFilters";
import PopularVehicleCard from "../ui/popularVehicleCard";

const Fleet = ({ feeds }) => {

  return (
    <section className="border-y border-border/60 bg-background py-2 sm:py-4 lg:py-6">
      <div className="container-app">
        <FleetFilters />

        <div className="mt-4 sm:mt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {feeds
            .filter((feed)=> feed.status === true)
            .map((feed) => (
              <PopularVehicleCard
                key={feed._id}
                image="/veh-hatchback.jpg"
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

