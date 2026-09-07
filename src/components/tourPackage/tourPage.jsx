import TourFilters from "./tourFilters";
import TourPackageCard from "../ui/packageCard";

const Tours = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-app">
        <TourFilters />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Package Cards */}
   
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

export default Tours;