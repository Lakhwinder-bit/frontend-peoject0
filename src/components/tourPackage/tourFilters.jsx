"use client";

import { useState } from "react";

const TourFilters = () => {
  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("Any duration");
  const [sort, setSort] = useState("Most popular");

  return (
    <div className="rounded-3xl border border-border/60 bg-background p-3 shadow-sm">
      <div className="grid gap-3 md:grid-cols-[1fr_220px_220px]">
        {/* Search */}
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search destination or package"
            className="
              h-12
              w-full
              rounded-full
              border border-border
              bg-background
              px-4
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

        {/* Duration */}
        <div>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="
              h-12
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
            <option>Any duration</option>
            <option>1 - 3 days</option>
            <option>4 - 6 days</option>
            <option>7 - 10 days</option>
            <option>10+ days</option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="
              h-12
              w-full
              rounded-full
              border border-primary/60
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
            <option>Most popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TourFilters;