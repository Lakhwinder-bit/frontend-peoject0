"use client";

import { useState } from "react";
import TourFilters from "./tourFilters";
import TourPackageCard from "../../../shared/compontent/packageCard";

const normalizeSearchText = (...values) =>
  values
    .flat(Infinity)
    .filter((value) => value !== null && value !== undefined)
    .join(" ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const Tours = ({package: packages}) => {
  const [search, setSearch] = useState("");
  const searchTerms = normalizeSearchText(search).trim().split(/\s+/).filter(Boolean);
  const visiblePackages = (Array.isArray(packages) ? packages : [])
    .filter((pak) => pak.status === true)
    .filter((pak) => {
      const searchableText = normalizeSearchText(
        pak.title,
        pak.location,
        pak.description,
        pak.duration,
        pak.price,
        pak.placesCovered,
        pak.highlights
      );

      return searchTerms.every((term) => searchableText.includes(term));
    });

  return (
    <section className="py-16 sm:py-20">
      <div className="container-app">
        <TourFilters search={search} onSearchChange={setSearch} />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Package Cards */}
   
          {visiblePackages.map((pak)=>(
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
        {visiblePackages.length === 0 && (
          <p className="py-10 text-center text-sm text-muted-foreground">
            No tour packages match your search.
          </p>
        )}
      </div>
    </section>
  );
};

export default Tours;