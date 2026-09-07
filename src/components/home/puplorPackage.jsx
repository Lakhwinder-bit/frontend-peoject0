import React from "react";
import { ArrowRight } from "lucide-react";
import TourPackageCard from "../ui/packageCard";

const TourPackages = () => {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container-app">

        {/* Header */}
        <div
          className="
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* Heading */}
          <div className="max-w-3xl">

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
              Tour Packages
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-extrabold
                leading-[1.08]
                tracking-[-0.045em]
                text-foreground
                sm:text-5xl
                lg:text-[52px]
              "
            >
              Popular getaways,
              <br className="hidden sm:block" />
              planned end to end
            </h2>

            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-muted-foreground
                sm:text-lg
              "
            >
              Handpicked itineraries with hotels, sightseeing and
              private transfers included.
            </p>
          </div>

          {/* View All */}
          <button
            type="button"
            className="
              group
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-3
              rounded-full
              border border-border
              bg-card
              px-7
              py-4
              text-sm
              font-bold
              text-foreground
              shadow-soft
              transition-all
              duration-300
              hover:border-secondary
              hover:shadow-card
            "
          >
            View all packages

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </div>

        {/* Package Cards */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {/* Amritsar */}
          <TourPackageCard
            image="/pkg-amritsar.jpg"
            location="Amritsar"
            title="Golden Temple Darshan"
            rating="4.9"
            duration="2D / 1N"
            reviews="412"
            highlights={[
              "Evening Palki Sahib ceremony",
              "Wagah Border retreat",
              "Amritsari food trail",
            ]}
            price="₹6,999"
          />

          {/* Shimla */}
          <TourPackageCard
            image="/pkg-shimla.jpg"
            location="Shimla"
            title="Queen of Hills Escape"
            rating="4.8"
            duration="3D / 2N"
            reviews="328"
            highlights={[
              "Toy train photo stop",
              "Kufri adventure park",
              "Colonial heritage walk",
            ]}
            price="₹11,499"
          />

          {/* Manali */}
          <TourPackageCard
            image="/pkg-manali.jpg"
            location="Manali"
            title="Snow Valley Adventure"
            rating="4.9"
            duration="5D / 4N"
            reviews="517"
            highlights={[
              "Solang paragliding",
              "Rohtang snow point",
              "Riverside bonfire evening",
            ]}
            price="₹18,999"
          />
        </div>

      </div>
    </section>
  );
};

export default TourPackages;