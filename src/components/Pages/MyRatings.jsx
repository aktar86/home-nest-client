import React from "react";
import { useLoaderData } from "react-router";
import Review from "./Review";

const MyRatings = () => {
  const reviews = useLoaderData();
  console.log(reviews);
  return (
    <div className="bg-gray-200">
      <div className="max-w-[1440px] mx-auto  bg-gray-200 p-5">
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
