import React from "react";

const PlaceCardDetails = () => {
  return (
    <section className="bg-base-100 py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={destination.img}
            alt={destination.name}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Details */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">
              {destination.name}
            </h1>
            <p className="text-base-content mb-4">{destination.desc}</p>

            <div className="flex gap-4 mb-6">
              <span className="text-secondary font-semibold text-lg">
                Price: ${destination.price}
              </span>
              <span className="text-base-content/70 font-medium">
                Duration: {destination.tour_day} days
              </span>
              <span className="text-yellow-400 font-semibold">
                Rating: {destination.rating} ⭐
              </span>
            </div>

            <h2 className="text-2xl font-semibold text-primary mb-2">
              Highlights
            </h2>
            <ul className="list-disc list-inside text-base-content space-y-1 mb-6">
              {destination.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
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
