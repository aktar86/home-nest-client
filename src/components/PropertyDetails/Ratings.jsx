import React, { useEffect, useState } from "react";

const Ratings = ({ userRating, handleRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    if (userRating === 0) {
      setHover(0);
      setRating(0);
    }
  }, [userRating]);

  const handleRatingClick = (currentRating) => {
    setRating(currentRating);
    if (handleRatingChange) {
      handleRatingChange(currentRating);
    }
  };

  return (
    <div className="flex flex-col items-start  py-1">
      <p>Your Rating</p>
      <div className="flex space-x-1">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <button
              type="button"
              key={index}
              onClick={() => handleRatingClick(currentRating)}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(rating)}
              className="text-2xl focus:outline-none"
            >
              <span
                className={`${
                  currentRating <= (hover || rating)
                    ? "text-yellow-400"
                    : "text-gray-400"
                }`}
              >
                ★
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Ratings;
