import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";

const Review = ({ review }) => {
  const { darkMode } = use(AuthContext);
  const {
    _id,
    userRatings,
    thumbnail,
    createdAt,
    reviewerName,
    reviewerProperyName,
    reviewDescription,
  } = review;

  // ⭐ Star array তৈরি
  const totalStars = 5;
  const stars = Array.from({ length: totalStars }, (_, index) => {
    return index < userRatings ? "★" : "☆"; // পূর্ণ star / খালি star
  });

  return (
    <div
      className={` flex flex-col rounded ${
        darkMode ? "bg-gray-700 text-white" : "bg-white"
      } overflow-hidden shadow-md mb-4`}
    >
      {/* Image */}
      <div>
        {thumbnail && (
          <img
            className="w-full h-48 object-cover"
            src={thumbnail}
            alt={reviewerProperyName}
          />
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-1">
        <h3 className="font-semibold text-lg">{reviewerName}</h3>
        <p
          className={`${
            darkMode ? "text-white" : "text-gray-600"
          }  text-sm mb-2`}
        >
          {reviewerProperyName}
        </p>

        {/* Stars */}
        <div className="text-yellow-400 text-xl mb-2">{stars.join(" ")}</div>

        {/* Review Description */}
        <p
          className={`${
            darkMode ? "text-white" : "text-gray-600"
          }  text-sm mb-2`}
        >
          {reviewDescription}
        </p>
      </div>

      {/* Date */}
      <div className="p-4">
        <p className="text-gray-400 text-sm">
          Reviewed On: {new Date(createdAt).toDateString()}
        </p>
      </div>
    </div>
  );
};

export default Review;
