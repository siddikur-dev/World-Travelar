import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useTravelPlace from "../../hook/useTravelPlace";
import { getStoredBookPlace, removeBookPlace } from "../../Utility/AddToLs";
import { BeatLoader } from "react-spinners";

const BookPlaces = () => {
  const navigate = useNavigate();
  const { places, loading } = useTravelPlace();
  const [bookPlace, setBookPlace] = useState([]);
  const [sort, setSort] = useState("");

  // ✅ Load Booked Places from Local Storage
  useEffect(() => {
    const bookPlaces = getStoredBookPlace();
    const myBookPlace = places.filter((place) => bookPlaces.includes(place.id));
    setBookPlace(myBookPlace);
  }, [places]);

  // ✅ Sort Function (Price High-Low)
  const handleSort = (type) => {
    const sortedList = [...bookPlace];
    setSort(type);
    if (type === "High") {
      sortedList.sort((a, b) => b.price - a.price);
    } else if (type === "Low") {
      sortedList.sort((a, b) => a.price - b.price);
    }
    setBookPlace(sortedList);
  };

  // ✅ Remove Booked Place
  const handleBookPlaceRemove = (id) => {
    removeBookPlace(id);
    setBookPlace((prevList) => prevList.filter((item) => item.id !== id));
  };

  // ✅ Loading Spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <BeatLoader color="#00B4D8" />
      </div>
    );
  }

  return (
    <div className="bg-base-200 min-h-screen py-10 px-4">
      {/* Helmet */}
      <title>Booked Place - World Travel</title>
      <div className="container mx-auto">
        {/* 🔹 Header Section */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            My Booked Places
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Explore your selected travel destinations and manage your bookings
            easily. You can sort by price or remove any tour you don’t want to
            keep.
          </p>
        </div>

        {/* 🔹 Sort Dropdown */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-secondary">
            {bookPlace.length} Tour{bookPlace.length !== 1 && "s"} Found
          </h2>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-primary m-1">
              Sort By: {sort || "Select"}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <button onClick={() => handleSort("High")}>High → Low</button>
              </li>
              <li>
                <button onClick={() => handleSort("Low")}>Low → High</button>
              </li>
            </ul>
          </div>
        </div>

        {/* 🔹 Booked Places List */}
        {bookPlace.length === 0 ? (
          <div className="text-center ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076509.png"
              alt="Not found"
              className="w-56 mx-auto opacity-80"
            />
            <h3 className="text-2xl font-semibold mb-2 text-base-content">
              Oops! No Booked Place Found
            </h3>
            <button
              onClick={() => navigate("/")}
              className="btn btn-primary text-white hover:bg-secondary hover:text-neutral"
            >
              Explore Now
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bookPlace.map((place) => (
              <div
                key={place.id}
                className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <figure>
                  <img
                    src={place.img}
                    alt={place.name}
                    className="h-56 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-primary">{place.name}</h2>
                  <p className="text-base-content/80 line-clamp-2">
                    {place.desc}
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-secondary font-semibold">
                      💵 ${place.price}
                    </span>
                    <span className="text-sm text-base-content/70">
                      {place.tour_day} Days
                    </span>
                  </div>
                  <div className="card-actions mt-4 justify-between">
                    <button
                      onClick={() => navigate(`/places/${place.id}`)}
                      className="btn btn-sm btn-primary text-white hover:bg-secondary hover:text-neutral"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleBookPlaceRemove(place.id)}
                      className="btn btn-sm btn-error text-white hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookPlaces;
