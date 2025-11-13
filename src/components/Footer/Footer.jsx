import React from "react";
import { NavLink, useNavigate } from "react-router";
import MailIcon from "../../assets/message.png";
import CallIcon from "../../assets/phone.png";
import Location from "../../assets/location.png";
import Twitter from "../../assets/twitter.png";
import Facebook from "../../assets/facebook.png";
import Youtube from "../../assets/youtube.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#ff143f]">
      <div className="max-w-[1440px] mx-auto pt-30 pb-10">
        {/* Footer section  */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 px-5 md:px-0 ">
          {/* 1 */}
          <div className="lg:col-span-2  pr-10">
            <h3
              onClick={() => navigate("/")}
              className="font-bold text-3xl text-white"
            >
              Home<span className="text-white">Nest</span>
            </h3>
            <p className="text-white">
              Transforming real estate experiences in Bangladesh. Residential,
              commercial, and investment properties all in one platform.
            </p>
          </div>
          {/* 2  */}
          <div className="text-white">
            <h3 className="font-bold text-xl mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink>All Properties</NavLink>
              </li>
              <li>
                <NavLink>My Ratings</NavLink>
              </li>
              <li>
                <NavLink>Login</NavLink>
              </li>
              <li>
                <NavLink>Register</NavLink>
              </li>
            </ul>
          </div>

          {/* 3  */}
          <div className="text-white">
            <h3 className="font-bold text-xl mb-3">Categories</h3>
            <ul className="space-y-2">
              <li>
                <NavLink>Residential</NavLink>
              </li>
              <li>
                <NavLink>Commercial</NavLink>
              </li>
              <li>
                <NavLink>Industrial</NavLink>
              </li>
              <li>
                <NavLink>Land & Plots</NavLink>
              </li>
              <li>
                <NavLink>Retail shops</NavLink>
              </li>
            </ul>
          </div>

          {/* 4 */}
          <div className="text-white">
            <h3 className="font-bold text-xl mb-3">Contact & support</h3>
            <div className="space-y-2">
              <div className="flex justify-baseline items-center">
                <img className="w-10" src={MailIcon} alt={MailIcon} />
                <p>homenest.info@gmail.com</p>
              </div>
              <div className="flex justify-baseline items-center">
                <img className="w-8 mr-2" src={CallIcon} alt={CallIcon} />
                <p>01728456744</p>
              </div>
              <div className="flex justify-baseline items-center">
                <img className="w-10" src={Location} alt={Location} />
                <p>Tilagor,Sylhet-3100</p>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="text-white  lg:ml-10">
            <h3 className="font-bold text-xl mb-3">Social Links</h3>
            <div>
              <ul className="space-y-3 ">
                <li>
                  <a href="https://x.com/aktarbd86" target="blank">
                    {" "}
                    <div className="flex justify-baseline items-center gap-5">
                      <img className="w-6" src={Twitter} alt={Twitter} />
                      <p>X</p>
                    </div>
                  </a>
                </li>
                {/* 2 */}
                <li>
                  <a href="https://www.facebook.com/aktar5436" target="blank">
                    {" "}
                    <div className="flex justify-baseline items-center gap-5">
                      <img className="w-6" src={Facebook} alt={Facebook} />
                      <p>Facebook</p>
                    </div>
                  </a>
                </li>
                {/* 3 */}
                <li>
                  <a href="https://www.youtube.com/" target="blank">
                    <div className="flex justify-baseline items-center gap-5">
                      <img className="w-6" src={Youtube} alt={Youtube} />
                      <p>Youtube</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* copy right  */}
        <div className="w-full text-center py-4 mt-5 text-white text-sm">
          © {new Date().getFullYear()} HomeNest. All rights reserved.
        </div>
      </div>
    </div>
  );
};

Twitter;
Facebook;
Youtube;
export default Footer;
