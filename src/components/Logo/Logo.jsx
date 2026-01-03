import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/" className="font-bold text-3xl cursor-pointer">
      Home
      <span className="text-[#FF385C]">Nest</span>
    </Link>
  );
};

export default Logo;
