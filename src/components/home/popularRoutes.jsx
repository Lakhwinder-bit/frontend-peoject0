import React from "react";
import RouteCard from "../ui/routeCard";

const PopularRoutes = () => {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container-app">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}
          <span
            className="
              inline-flex
              rounded-full
              border
              border-secondary/40
              bg-accent
              px-4
              py-1.5
              text-[11px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-primary
            "
          >
            Fixed Fares
          </span>

          {/* Heading */}
          <h2
            className="
             text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.75rem]
            "
          >
            Popular routes at
            <br className="hidden sm:block" />
            all-inclusive prices
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-base
              leading-7
              text-muted-foreground
              sm:text-lg
            "
          >
            Driver allowance, GST and fuel included. Tolls and parking
            billed at actuals.
          </p>
        </div>

        {/* Routes */}
        <div
          className="
          mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3
          "
        >
          <RouteCard
            from="Chandigarh"
            to="Shimla"
            distance="113 km"
            vehicle="Sedan"
            price="₹3,200"
          />

          <RouteCard
            from="Chandigarh"
            to="Manali"
            distance="310 km"
            vehicle="SUV"
            price="₹7,800"
          />

          <RouteCard
            from="Amritsar"
            to="Dalhousie"
            distance="195 km"
            vehicle="SUV"
            price="₹6,900"
          />

          <RouteCard
            from="Delhi"
            to="Chandigarh"
            distance="245 km"
            vehicle="Sedan"
            price="₹4,500"
          />

          <RouteCard
            from="Chandigarh"
            to="Amritsar"
            distance="230 km"
            vehicle="Tempo Traveller"
            price="₹9,800"
          />

          <RouteCard
            from="Jalandhar"
            to="Dharamshala"
            distance="165 km"
            vehicle="Sedan"
            price="₹4,200"
          />
        </div>

      </div>
    </section>
  );
};

export default PopularRoutes;