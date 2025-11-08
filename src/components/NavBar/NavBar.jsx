import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import "./NavBar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allProperties">All Properties</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div className="border-b-2 border-gray-100 shadow-lg">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-5">
        {/* first part */}
        <div className="flex items-center">
          <span className="md:hidden">
            <span onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </span>
            <ul className={`absolute bg-white ${open ? "top-15" : "-top-50"}`}>
              {links}
            </ul>
          </span>
          <span>
            <h1 className="font-bold text-3xl">
              Home
              <span className="text-[#FF385C]">Nest</span>
            </h1>
          </span>
        </div>

        {/* center part  */}
        <div className="hidden lg:flex">
          <nav>
            <ul className="flex gap-5 font-semibold">{links}</ul>
          </nav>
        </div>

        {/* end part  */}
        <div>
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
