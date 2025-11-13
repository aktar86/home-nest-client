import React from "react";
import FeaturedProperties from "./FeaturedProperties";
import WhyChoose from "../WhyChoose/WhyChoose";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import Subscribe from "../Subscribe/Subscribe";
import Slider from "../Slider/Slider";

const featuredPropertiesPromise = fetch(
  "https://home-nest-server-api.vercel.app/latest-properties"
).then((res) => res.json());
const Home = () => {
  return (
    <div className="bg-gray-200">
      <div className="max-w-[1440px] mx-auto bg-gray-200">
        {/* banner or swiper */}
        {/* Sliders */}
        <Slider></Slider>

        {/* 6 data load */}
        <div className="bg-white py-10">
          <FeaturedProperties
            featuredPropertiesPromise={featuredPropertiesPromise}
          />
        </div>

        {/* why choose us */}
        <WhyChoose></WhyChoose>

        {/* What we do */}
        <WhatWeDo></WhatWeDo>

        {/* subscribe field */}
        <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default Home;
