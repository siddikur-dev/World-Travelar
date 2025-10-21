import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";
import { ClockLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className=" flex justify-center my-20 ">
        <ClockLoader size="150" color="rgba(0, 180, 216, 1)" />
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return <div>{children};</div>;
};

export default PrivateRoute;
