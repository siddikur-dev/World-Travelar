import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../../Layout/Root/Root";
import Home from "../../Pages/Home/Home";
import TravelPlaces from "../../Component/TravelPlaces/TravelPlaces";
import PlaceCardDetails from "../../Component/TravelPlaces/PlaceCardDetails/PlaceCardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/places",
        Component: TravelPlaces,
      },
      {
        path: "/places/:id",
        Component: PlaceCardDetails,
      },
    ],
  },
]);

export default router;
