import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const AuthLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  );
};

export default AuthLayout;
