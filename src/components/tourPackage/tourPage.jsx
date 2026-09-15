import TourFilters from "./tourFilters";
import TourPackageCard from "../ui/packageCard";

const Tours = ({package: packages}) => {
  console.log(packages)
  return (
    <section className="py-16 sm:py-20">
      <div className="container-app">
        <TourFilters />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Package Cards */}
   
          {/* Amritsar */}

          {packages?.data
          .filter((pak)=> pak.status === true)
          .map((pak)=>(
         <TourPackageCard
            key={pak._id}
            image={pak.image}
            location={pak.location}
            title={pak.title}
            rating={pak.rating}
            duration={pak.duration}
            reviews={pak.reviewCount}
            highlights={pak.highlights}
            price={`₹${pak.price}`}
          />
          ))}
       


      
        </div>
      </div>
    </section>
  );
};

export default Tours;