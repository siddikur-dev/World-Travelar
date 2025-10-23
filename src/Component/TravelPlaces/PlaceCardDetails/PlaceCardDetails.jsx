import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useTravelPlace from "../../../hook/useTravelPlace";
import { addToBookPlaceLS, getStoredBookPlace } from "../../../Utility/AddToLs";

const PlaceCardDetails = () => {
  // Book Place button state handler
  const [bookPlace, setBookPlace] = useState(false);
  const { places, loading } = useTravelPlace();

  const { id } = useParams();
  const idNb = parseInt(id);

  // Page load  check from localStorage
  useEffect(() => {
    const bookPlace = getStoredBookPlace();
    setBookPlace(bookPlace.includes(idNb));
  }, [idNb]);
  const handleBookPlace = (id) => {
    const bookPlaces = getStoredBookPlace(); // always fetch latest
    if (!bookPlaces.includes(id)) {
      addToBookPlaceLS(id); // add and show success toast
      setBookPlace(true);
    }
  };
  //   hook useApps
  if (loading) {
    return <h3>Loading...</h3>;
  }

  const destination = places.find((placeId) => placeId.id === idNb);
  return (
    <section className="bg-base-100 py-16 px-4">
      {/* Helmet */}
      <title>Details Place - World Travel</title>
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

          <button
            onClick={() => handleBookPlace(idNb)}
            className={`btn btn-primary w-full text-white hover:bg-secondary hover:text-neutral transition-all duration-300 ${
              bookPlace ? "cursor-not-allowed " : "cursor-pointer"
            }`}
          >
            {bookPlace ? "Book Placed" : "Book Place"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlaceCardDetails;
