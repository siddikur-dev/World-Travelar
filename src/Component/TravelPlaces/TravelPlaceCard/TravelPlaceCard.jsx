import React from "react";

const TravelPlaceCard = ({ place }) => {
  return (
    <div
      key={place.id}
      className="card bg-base-100 shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
    >
      <img
        src={place.img}
        alt={place.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-primary mb-2">
          {place.name}
        </h3>
        <p className="text-base-content mb-3">{place.desc}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-secondary">${place.price}</span>
          <span className="text-sm text-base-content/70">
            {place.tour_day} days
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-400 font-semibold">
            {place.rating} ⭐
          </span>
        </div>
      </div>
    </div>
  );
};

export default TravelPlaceCard;
