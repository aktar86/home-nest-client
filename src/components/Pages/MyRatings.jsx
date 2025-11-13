import React, { use } from "react";
import { useLoaderData } from "react-router";
import Review from "./Review";
import { AuthContext } from "../../context/AuthContext";

const MyRatings = () => {
  const reviews = useLoaderData();
  const { darkMode } = use(AuthContext);
  console.log(reviews);
  return (
    <div className={` ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}>
      <div className="max-w-[1440px] mx-auto   p-5">
        <h1 className="font-bold text-4xl text-center py-15">
          We Got The <span className="text-[#FF385C]"> Best Support</span>{" "}
          <br /> For You
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyRatings;
