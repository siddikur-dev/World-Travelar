import React from "react";
import { useParams } from "react-router";
import useApps from "../../../hook/useTravelPlace";

const PlaceCardDetails = () => {
  const { id } = useParams();
  const idNb = parseInt(id);
  //   hook use
  const { places, loading } = useApps();
  if (loading) {
    <h3>Loading...</h3>;
    return;
  }
  const destination = places.find((placeId) => placeId.id === idNb);
  console.log(destination);
  return (
    <section className="bg-base-100 py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={destination?.img}
            alt={destination?.name}
            className="w-full h-85 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Details */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">
              {destination?.name}
            </h1>
            <p className="text-base-content mb-4">{destination?.desc}</p>

            <div className="flex flex-col gap-4 ">
              <span className="text-secondary font-semibold text-lg">
                Price: ${destination?.price}
              </span>
              <span className="text-base-content/70 font-medium">
                Duration: {destination?.tour_day} days
              </span>
              <span className="text-yellow-400 font-semibold">
                Rating: {destination?.rating} ⭐
              </span>
            </div>
          </div>

          <button className="btn btn-primary w-full text-white hover:bg-secondary hover:text-neutral transition-all duration-300">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlaceCardDetails;
