import React, { use } from "react";
import Home from "../Pages/Home";
import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

const Root = () => {
  const { loading } = use(AuthContext);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-ball loading-xl"></span>
        </div>
      ) : (
        <div>
          <NavBar></NavBar>
          <Outlet></Outlet>
          <Footer></Footer>
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default Root;
