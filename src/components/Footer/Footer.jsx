import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#ff143f]">
      <div className="max-w-[1440px] mx-auto py-30">
        {/* Footer section  */}
        <div className="grid grid-cols-6 gap-4 ">
          {/* 1 */}
          <div className="col-span-2 border pr-10">
            <h3 className="font-bold text-3xl">
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
            <ul>
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
            <ul>
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
            <p>email</p>
            <p>Contact Number</p>
            <p>Location</p>
          </div>

          {/* 5 */}
          <div className="text-white">
            <h3 className="font-bold text-xl mb-3">Social Links</h3>
          </div>
        </div>
        {/* copy right  */}
      </div>
    </div>
  );
};

export default Footer;
