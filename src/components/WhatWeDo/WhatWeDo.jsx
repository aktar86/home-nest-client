import React, { use } from "react";
import image1 from "../../assets/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg";
import image2 from "../../assets/grant-lemons-jTCLppdwSEc-unsplash.jpg";
import image3 from "../../assets/nastya-dulhiier-hv7EK1NZjAM-unsplash.jpg";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const WhatWeDo = () => {
  const navigate = useNavigate();
  const { darkMode } = use(AuthContext);
  return (
    <div className={`${darkMode ? "bg-gray-600" : "bg-white"}`}>
      {/* part 1 */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex-1">
          <div className="p-5">
            <p className="font-medium text-[#FF385C]">Discover our services</p>
            <h2 className="font-semibold text-2xl mt-5 mb-2">
              What we are providing
            </h2>
            <p>
              At HomeNest, we are redefining the way people connect with real
              estate — empowering individuals and businesses to find properties
              that truly match their lifestyle, vision, and goals. We bring you
              a smarter, simpler, and more transparent property experience where
              every listing tells a story of comfort, trust, and quality.
              <br />
              <br />
              With years of expertise in property management, buying, selling,
              and rentals, HomeNest blends innovation with reliability. Whether
              you're looking for your dream apartment, luxury villa, commercial
              space, or land investment — we make every step seamless and
              secure.
            </p>
          </div>
        </div>

        <div className="flex-1">
          <img className="w-full object-cover " src={image3} alt={image1} />
        </div>
      </div>

      {/* part 2  */}
      <div className="flex flex-col-reverse py-5 md:py-0 md:flex-row justify-center items-center">
        {/* img  */}
        <div className="flex-1">
          <img className="w-full object-cover" src={image2} alt={image2} />
        </div>
        {/* content  */}
        <div className="flex-1">
          <div className="px-5">
            <p className="font-bold">
              “At the heart of HomeNest lies our commitment to trust,
              transparency, and client satisfaction.”
            </p>
            <p>
              Our reputation is built on integrity and long-term relationships.
              We believe real estate is not just about property — it’s about
              people, aspirations, and opportunities.
              <br />
              Our mission is to make property discovery effortless and enjoyable
              while maintaining the highest standards of honesty and
              professionalism.
              <br />
              <br />
              From personalized support to verified listings and market
              insights, HomeNest ensures that every client finds not just a
              property — but a place they can truly call home.
            </p>
            <button
              onClick={() => navigate("/myratings")}
              className="text-white z-10 mb-3 md:mb-0 bg-[#ff385c] p-2 px-3 mt-5"
            >
              See details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
