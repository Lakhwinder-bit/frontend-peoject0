"use client";

import { useState } from "react";

const FleetFilters = () => {
  const [search, setSearch] = useState("");
  const [passengers, setPassengers] = useState("Any size");

  return (
    <div className="mt-4 rounded-3xl border border-border/60 bg-background p-5 shadow-sm sm:mt-6">
      <div className="grid gap-5 md:grid-cols-[1fr_280px] md:items-end">
        
        {/* Search */}
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Search vehicle
          </label>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Innova, Tempo, Volvo..."
            className="
              h-11
              w-full
              rounded-full
              border border-border
              bg-background
              px-5
              text-sm
              text-foreground
              outline-none
              transition
              placeholder:text-muted-foreground
              focus:border-primary
              focus:ring-2
              focus:ring-primary/10
            "
          />
        </div>

        {/* Minimum Passengers */}
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Minimum passengers
          </label>

          <select
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="
              h-11
              w-full
              rounded-full
              border border-border
              bg-background
              px-4
              text-sm
              text-foreground
              outline-none
              transition
              focus:border-primary
              focus:ring-2
              focus:ring-primary/10
            "
          >
            <option>Any size</option>
            <option>4+ seats</option>
            <option>7+ seats</option>
            <option>12+ seats</option>
            <option>25+ seats</option>
            <option>45+ seats</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default FleetFilters;