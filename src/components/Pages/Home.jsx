import React from "react";
import FeaturedProperties from "./FeaturedProperties";

const featuredPropertiesPromise = fetch(
  "http://localhost:3000/featured-properties"
).then((res) => res.json());
const Home = () => {
  return (
    <div className="bg-gray-200">
      <div className="max-w-[1440px] mx-auto bg-gray-200">
        {/* banner or swiper */}
        <h1>Banner or Slider Section here</h1>

        {/* 6 data load */}
        <div className="bg-white py-10">
          <FeaturedProperties
            featuredPropertiesPromise={featuredPropertiesPromise}
          />
        </div>

        {/* section 3 */}
      </div>
    </div>
  );
};

export default Home;
