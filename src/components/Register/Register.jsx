import React from "react";
import Google from "../../assets/google.png";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg w-md  lg:max-w-md">
          <h1 className="text-xl font-bold text-gray-600 mb-2">
            Welcome back to <br />
            <span>
              <h1 className="text-5xl text-[#FF385C]"> HomeNest</h1>
            </span>
          </h1>
          <p className="text-gray-600 mb-6">Login Your Account</p>

          <form className="space-y-5">
            {/* name */}
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                className="w-full border p-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
                type="text"
                name="name"
                placeholder="Your Name"
              />
            </div>

            {/* photoURL */}
            <div>
              <label className="block font-medium mb-1">Photo URL</label>
              <input
                className="w-full border p-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
                type="text"
                name="photourl"
                placeholder="e.g your image link"
              />
            </div>

            {/* email */}
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                className="w-full border p-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
                type="email"
                name="email"
                placeholder="Type Your Email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block font-medium">Password</label>
              <div className="relative">
                <input
                  className="w-full border p-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C]"
                  name="password"
                  placeholder="Type your password"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <input
                className="btn btn-primary w-full"
                type="submit"
                value="Register"
              />
            </div>

            {/* Or Divider */}
            <div className="flex items-center gap-3 my-4">
              <hr className="flex-1 border-gray-300" />
              <span className="text-gray-500 text-sm font-medium">Or</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* Social */}
            <div className="w-full flex items-center gap-5 btn btn-outline">
              <img className="w-5" src={Google} alt="" />
              <p> Sign In with google</p>
            </div>
          </form>
          <p className="mt-5">
            Don't have an account? Please{" "}
            <Link className="text-blue-500 underline" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
