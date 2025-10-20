import React from "react";
import useApps from "../../hook/useTravelPlace";
import TravelPlaceCard from "./TravelPlaceCard/TravelPlaceCard";

const TravelPlaces = () => {
  const { places } = useApps();
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          Top Travel Places
        </h2>
        {/* Map All Travel Places */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place) => (
            <TravelPlaceCard key={place.id} place={place}></TravelPlaceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelPlaces;
