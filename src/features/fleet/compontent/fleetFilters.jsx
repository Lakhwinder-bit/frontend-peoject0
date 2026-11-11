const FleetFilters = ({
  search,
  onSearchChange,
  passengers,
  onPassengersChange,
}) => {
  return (
    <div className="mt-4 rounded-3xl border border-border/60 bg-card p-5 shadow-sm sm:mt-6">
      <div className="grid gap-5 md:grid-cols-[1fr_280px] md:items-end">
        
        {/* Search */}
        <div>
          <label htmlFor="fleet-search" className="mb-2 block text-sm font-medium text-foreground">
            Search vehicle
          </label>

          <input
            id="fleet-search"
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
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
          <label htmlFor="fleet-passengers" className="mb-2 block text-sm font-medium text-foreground">
            Minimum passengers
          </label>

          <select
            id="fleet-passengers"
            value={passengers}
            onChange={(e) => onPassengersChange(e.target.value)}
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