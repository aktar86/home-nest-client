import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Review from "./Review";

const MyRatings = () => {
  //   const [review, setReview] = useState([]);
  //   useEffect(() => {
  //     fetch("http://localhost:3000/reviews")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setReview(data);
  //       });
  //   }, []);
  //   console.log(review);

  const reviews = useLoaderData();
  console.log(reviews);
  return (
    <div className="bg-gray-200 py-20">
      <div className="max-w-[1440px] mx-auto bg-white p-5">
        <h1 className="font-bold text-6xl text-center py-15">
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
