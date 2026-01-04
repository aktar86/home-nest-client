import React, { use } from "react";
import FeaturedProperties from "./FeaturedProperties";
import WhyChoose from "../WhyChoose/WhyChoose";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import Subscribe from "../Subscribe/Subscribe";
import Slider from "../Slider/Slider";

import { AuthContext } from "../../context/AuthContext";
import FAQ from "../FAQ/FAQ";
import Testimonials from "../Testimonial/Testimonial";
import Services from "../Services/Services";
import Statistics from "../Statistics/Statistics";

const featuredPropertiesPromise = fetch(
  "https://home-nest-server-api.vercel.app/latest-properties"
).then((res) => res.json());
const Home = () => {
  const { darkMode } = use(AuthContext);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* banner or swiper */}
        {/* Sliders */}
        <Slider></Slider>

        {/* 6 data load */}
        <div className={` py-10 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
          <FeaturedProperties
            featuredPropertiesPromise={featuredPropertiesPromise}
          />
        </div>

        {/* Services */}
        <Services />

        {/* why choose us */}
        <WhyChoose></WhyChoose>

        {/* What we do */}
        <WhatWeDo></WhatWeDo>

        {/* HighlightSection */}
        <Statistics />
        {/* Testimonials */}
        <Testimonials />

        {/* faq */}
        <FAQ />

        {/* subscribe field */}
        <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default Home;
