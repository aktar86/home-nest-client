import React, { Children, use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../Loader/Loader";

const PrivetRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivetRoute;
