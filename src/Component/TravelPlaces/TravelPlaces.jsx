import React, { useState } from "react";
import useTravelPlace from "../../hook/useTravelPlace";
import TravelPlaceCard from "./TravelPlaceCard/TravelPlaceCard";
import { ClockLoader } from "react-spinners";

const TravelPlaces = () => {
  const { places, loading } = useTravelPlace();

  const [showAll, setShowAll] = useState(false);
  // click  show all / show less
  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClockLoader color="rgba(0, 180, 216, 1)" />
      </div>
    );
  }

  // initial showing fast 6 data
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
          <button
            className="mx-auto btn btn-primary hover:btn-secondary"
            onClick={handleShowAll}
          >
            {showAll ? "ShowLess" : "ShowAll"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravelPlaces;
