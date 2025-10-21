import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../../Layout/Root/Root";
import Home from "../../Pages/Home/Home";
import TravelPlaces from "../../Component/TravelPlaces/TravelPlaces";
import PlaceCardDetails from "../../Component/TravelPlaces/PlaceCardDetails/PlaceCardDetails";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Register from "../../Component/AuthRegLogin/Register/Register";
import Login from "../../Component/AuthRegLogin/Login/Login";
import Profile from "../../Pages/Profile/Profile";

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
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
