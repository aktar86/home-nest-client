import React, { Children, use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ball loading-xl"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivetRoute;
