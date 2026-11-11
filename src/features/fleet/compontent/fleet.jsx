"use client";

import { useState } from "react";
import FleetFilters from "./fleetFilters";
import PopularVehicleCard from "../../../shared/compontent/popularVehicleCard";

const normalizeSearchText = (...values) =>
  values
    .flat(Infinity)
    .filter((value) => value !== null && value !== undefined)
    .join(" ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const Fleet = ({ feeds }) => {
  const [search, setSearch] = useState("");
  const [passengers, setPassengers] = useState("Any size");
  const minimumPassengers = Number.parseInt(passengers, 10) || 0;
  const searchTerms = normalizeSearchText(search).trim().split(/\s+/).filter(Boolean);
  const visibleFeeds = (Array.isArray(feeds) ? feeds : [])
    .filter((feed) => feed.status === true)
    .filter((feed) => (feed.seat || 0) >= minimumPassengers)
    .filter((feed) => {
      const searchableText = normalizeSearchText(
        feed.name,
        feed.category,
        feed.description,
        feed.badge,
        feed.seat,
        `${feed.seat || 0} seats`,
        feed.luggage,
        `${feed.luggage || 0} bags`,
        feed.price,
        feed.pricePerKm,
        feed.ac ? "AC air conditioning" : "Non-AC"
      );

      return searchTerms.every((term) => searchableText.includes(term));
    });

  return (
    <section className="border-y border-border/60 bg-background py-2 sm:py-4 lg:py-6">
      <div className="container-app">
        <FleetFilters
          search={search}
          onSearchChange={setSearch}
          passengers={passengers}
          onPassengersChange={setPassengers}
        />

        <div className="mt-4 sm:mt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleFeeds.map((feed) => (
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
          {visibleFeeds.length === 0 && (
            <p className="py-10 text-center text-sm text-muted-foreground">
              No vehicles match your search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
