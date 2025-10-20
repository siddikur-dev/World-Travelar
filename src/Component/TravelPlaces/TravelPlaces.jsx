import React, { useState } from "react";
import useApps from "../../hook/useTravelPlace";
import TravelPlaceCard from "./TravelPlaceCard/TravelPlaceCard";

const TravelPlaces = () => {
  const { places, loading } = useApps();

  const [showAll, setShowAll] = useState(false);

  // যখন "Show All" ক্লিক করা হবে
  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  if (loading) {
    return <h3>Loading...</h3>;
  }

  // প্রথম ৬টি স্থানের জন্য ডেটা ফিল্টার করা
  const placesToShow = showAll ? places : places.slice(0, 6);
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          Top Travel Places
        </h2>
        {/* Map All Travel Places */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {placesToShow.map((place) => (
            <TravelPlaceCard key={place.id} place={place}></TravelPlaceCard>
          ))}
        </div>
        {/* Show All Button */}
        <div className="flex justify-center my-6">
          <button className="mx-auto btn btn-primary hover:btn-secondary" onClick={handleShowAll}>
            {showAll ? "ShowLess" : "ShowAll"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravelPlaces;
