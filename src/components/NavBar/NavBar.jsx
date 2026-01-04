import { Menu, Moon, Sun, X } from "lucide-react";
import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import "./NavBar.css";
import { AuthContext } from "../../context/AuthContext";
import Logo from "../Logo/Logo";
import useRole from "../../Hook/useRole";

const NavBar = () => {
  const { user, signOutUser, darkMode, toggleDarkMode } = use(AuthContext);
  const [open, setOpen] = useState(false);
  const { role } = useRole();

  const handleSignOutUser = () => {
    signOutUser()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  const links = (
    <>
      <li className="px-10 py-2 hover:bg-[#ff385c] hover:text-white transition-colors duration-200 lg:px-0 lg:py-0 lg:hover:bg-transparent lg:hover:text-inherit">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="px-10 py-2 hover:bg-[#ff385c] hover:text-white transition-colors duration-200 lg:px-0 lg:py-0 lg:hover:bg-transparent lg:hover:text-inherit">
        <NavLink to="/allProperties">All Properties</NavLink>
      </li>
      <li className="px-10 py-2 hover:bg-[#ff385c] hover:text-white transition-colors duration-200 lg:px-0 lg:py-0 lg:hover:bg-transparent lg:hover:text-inherit">
        <NavLink to="/about">About</NavLink>
      </li>
      {role === "user" && (
        <>
          <li className="px-10 py-2 hover:bg-[#ff385c] hover:text-white transition-colors duration-200 lg:px-0 lg:py-0 lg:hover:bg-transparent lg:hover:text-inherit">
            <NavLink to="/addproperties">Add Properties</NavLink>
          </li>
          <li className="px-10 py-2 hover:bg-[#ff385c] hover:text-white transition-colors duration-200 lg:px-0 lg:py-0 lg:hover:bg-transparent lg:hover:text-inherit">
            <NavLink to="/myproperties">My Properties</NavLink>
          </li>
          <li className="px-10 py-2 hover:bg-[#ff385c] hover:text-white transition-colors duration-200 lg:px-0 lg:py-0 lg:hover:bg-transparent lg:hover:text-inherit">
            <NavLink to="/myratings">My Ratings</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div
      className={` px-2 border-b-2 border-gray-400 md:px-0 shadow-lg ${
        darkMode ? " bg-gray-800 text-white" : "bg-white "
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-5">
        {/* first part */}
        <div className="flex items-center">
          <span onClick={() => setOpen(!open)} className="lg:hidden z-30 ">
            <span>{user && open ? <X /> : <Menu />}</span>
            <ul className={`absolute bg-white ${open ? "top-15" : "-top-100"}`}>
              {links}
            </ul>
          </span>

          {/* logo  */}
          <span className="ml-2">
            <Logo />
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
            <div className="flex items-center gap-5">
              <button
                onClick={toggleDarkMode}
                className={` ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white"
                }`}
              >
                {darkMode ? <Sun></Sun> : <Moon></Moon>}
              </button>
              <div className="dropdown dropdown-end ">
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
                  className="mt-3 z-[99999] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li className="px-4 py-2 text-sm font-semibold">
                    {user.displayName}
                  </li>
                  <li className="px-4 py-2 text-xs text-gray-500">
                    {user.email}
                  </li>
                  <li className="px-4 py-2  text-gray-500">
                    <Link to="/dashboard/overview">Dashboard</Link>
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
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {/* dark light  */}
              <button
                onClick={toggleDarkMode}
                className={` ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white"
                }`}
              >
                {darkMode ? <Sun></Sun> : <Moon></Moon>}
              </button>

              {/* register button */}
              <Link to="/register" className="btn-secondary">
                Register
              </Link>

              {/* login button */}
              <Link to="/login" className="btn-secondary">
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

// className={`w-32 px-5 rounded-sm text-center py-2 ${
//   pathname === "/register"
//     ? "text-white bg-linear-to-r from-[#FF385C] to-[#FF385C]"
//     : "text-[#FF385C] border-2 border-[#FF385C]"
// }`}
