import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-xs text-gray-600 mt-2 text-center max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#FF385C] text-white hover:bg-red-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
