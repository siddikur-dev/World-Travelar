import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../../Layout/Root/Root";
import Home from "../../Pages/Home/Home";
import TravelPlaces from "../../Component/TravelPlaces/TravelPlaces";

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
        path: "/Places",
        Component: TravelPlaces,
      },
    ],
  },
]);

export default router;
