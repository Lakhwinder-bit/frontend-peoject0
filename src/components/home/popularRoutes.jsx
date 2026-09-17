import React from "react";
import RouteCard from "../ui/routeCard";

const PopularRoutes = ({route}) => {
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
          {route.map((routes)=>(
          <RouteCard
          key={routes._id}
            from={routes.from}
            to={routes.to}
            distance={`${routes.distance}km`}
            vehicle={routes.vehicle}
            price={`₹${routes.price}`}
          />
          ))}



        </div>

      </div>
    </section>
  );
};

export default PopularRoutes;