import React, { use } from "react";
import Home from "../Pages/Home";
import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import Loader from "../Loader/Loader";

const RootLayout = () => {
  const { loading } = use(AuthContext);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <NavBar />
          <Outlet />
          <Footer />
          <ToastContainer />
        </div>
      )}
      {/* Fixed Button */}
      {/* <button className="btn btn-xs fixed right-5 bottom-5 bg-white shadow-md border border-gray-300 hover:bg-gray-100 z-[9999] p-5 w-10 h-10">
        Light
      </button> */}
    </div>
  );
};

export default RootLayout;
