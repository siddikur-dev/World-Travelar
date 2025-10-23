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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import BookPlace from "../../Component/BookPlace/BookPlace";
import BookPlaces from "../../Component/BookPlace/BookPlaces";

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
        element: (
          <PrivateRoute>
            <PlaceCardDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/book-places",
        element: (
          <PrivateRoute>
            <BookPlaces />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },

      {
        path: "/login",
        Component: Login,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
