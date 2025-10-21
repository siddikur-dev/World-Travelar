import React, { useEffect, useState } from "react";
import InstallationApps from "./InstallationApps";
import loaderImg from "../assets/logo.png";
import appErrorImage from "../assets/App-Error.png";
import ImageLoader from "../Components/ImageLoader";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";
import Button from "../Components/Button/Button";
import useTravelPlace from "../../hook/useTravelPlace";
import { getStoredBookPlace, removeBookPlace } from "../../Utility/AddToLs";
const Installation = () => {
  // Navigate to all apps
  const navigate = useNavigate();

  const { places, loading } = useTravelPlace();
  //state set bookPlace Data
  const [bookPlace, setBookPlace] = useState([]);
  // get Book Place from localStorage and set to state
  useEffect(() => {
    const bookPlaces = getStoredBookPlace();
    const myBookPlace = places.filter((place) => bookPlaces.includes(place.id));
    setBookPlace(myBookPlace);
  }, [places]);
  //sort set readList Book Data
  const [sort, setSort] = useState("");

  //sort function
  const handleSort = (type) => {
    const sortedList = [...bookPlace];
    setSort(type);
    if (type === "High") {
      sortedList.sort((a, b) => b.size - a.size);
    } else if (type === "Low") {
      sortedList.sort((a, b) => a.size - b.size);
    }
    setBookPlace(sortedList);
  };

  //uninstall Apps function
  const handleBookPlaceRemove = (id) => {
    removeBookPlace(id);
    setBookPlace((prevList) => prevList.filter((app) => app.id !== id));
  };

  //loading spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-5xl">
        L{" "}
        <ImageLoader
          className="loading loading-spinner w-2"
          src={loaderImg}
          alt=""
        />
        ading...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-12">
      <Helmet>
        <title>Hero Store - Installed Apps</title>
      </Helmet>
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 ">
          <div className="mx-auto">
            <h2
              className="text-center text-xl md:text-2xl lg:text-4xl font-bold py-3
            "
            >
              My Installation Apps
            </h2>
            <p className="text-gray-500 text-sm sm:text-base text-center w-full md:w-3/4 lg:w-2/3 mx-auto">
              "Discover all your installed apps and stay updated with the latest
              trending applications developed by us. Manage, explore, and enjoy
              your apps effortlessly!"
            </p>
          </div>
        </div>

        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            {bookPlace.length} Apps Found
          </h2>

          {/* Sort By Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By: {sort ? sort : "Select"}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <button onClick={() => handleSort("High")}>High - Low </button>
              </li>
              <li>
                <button onClick={() => handleSort("Low")}>Low - High</button>
              </li>
            </ul>
          </div>
        </div>

        {/* App List */}
        {bookPlace.length === 0 ? (
          // Show not found if no apps match search
          <div className="my-12 space-y-7">
            <img
              className="mx-auto w-[350px]"
              src={appErrorImage}
              alt="appErrorImage"
            />
            <div className="text-center space-y-7">
              <h1 className="font-bold text-4xl">Oops, app not found!</h1>
              <Button onClick={() => navigate("/")}>Go Home!</Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {bookPlace.map((app) => (
              <InstallationApps
                handleBookPlaceRemove={handleBookPlaceRemove}
                key={app.id}
                app={app}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;
