import { Menu, X } from "lucide-react";
import React, { use, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import "./NavBar.css";
import { AuthContext } from "../../context/AuthContext";

const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const handleSignOutUser = () => {
    signOutUser()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allProperties">All Properties</NavLink>
      </li>
      {/* <li>
        <NavLink to="/about">About</NavLink>
      </li> */}
      <li>
        <NavLink to="/addproperties">Add Properties</NavLink>
      </li>
      <li>
        <NavLink to="/myproperties">My Properties</NavLink>
      </li>
    </>
  );
  return (
    <div className="border-b-2 border-gray-100 px-2 md:px-0 shadow-lg">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-5">
        {/* first part */}
        <div className="flex items-center">
          <span onClick={() => setOpen(!open)} className="md:hidden">
            <span>{user && open ? <X /> : <Menu />}</span>
            <ul
              className={`absolute px-5 bg-white ${
                open ? "top-15" : "-top-50"
              }`}
            >
              {links}
            </ul>
          </span>
          <span className="ml-2">
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
        <div className="px-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <div className="relative">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full ring-2 ring-[#FF385C] ring-offset-2 ring-offset-base-100">
                    <img
                      src={user?.photoURL}
                      alt={user.displayName}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                {/* Green dot for active user
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div> */}
              </div>

              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li className="px-4 py-2 text-sm font-semibold">
                  {user.displayName}
                </li>
                <li className="px-4 py-2 text-xs text-gray-500">
                  {user.email}
                </li>
                <li className=" mt-2 pt-2">
                  <button
                    onClick={handleSignOutUser}
                    className="btn btn-sm bg-[#FF385C] w-full text-white"
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/register"
                className={`w-32 px-5 rounded-sm text-center py-2 ${
                  pathname === "/register"
                    ? "text-white bg-linear-to-r from-[#FF385C] to-[#FF385C]"
                    : "text-[#FF385C] border-2 border-[#FF385C]"
                }`}
              >
                Register
              </Link>

              <Link
                to="/login"
                className={`w-32 px-5 rounded-sm text-center py-2 ml-2 ${
                  pathname === "/login"
                    ? "text-white bg-linear-to-r from-[#FF385C] to-[#FF385C]"
                    : "text-[#FF385C] border-2 border-[#FF385C]"
                }`}
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
