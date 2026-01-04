import {
  BarcodeIcon,
  ChartColumn,
  Home,
  LucideLoader,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";
import Logo from "../Logo/Logo";

const DashboardLayout = () => {
  const [isExpend, setIsExpend] = useState(true);
  return (
    <div className="flex min-h-screen ">
      {/* sidebar */}
      <aside
        className={`bg-gray-100 transition-all duration-300 ease-in-out ${
          isExpend ? "w-64" : "w-16  "
        }`}
      >
        {/* Links */}

        <ul className=" mt-20 flex flex-col">
          {/* Home Link */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `group flex items-center gap-3 px-4 py-3 transition-all duration-200 ease-in-out  ${
                isActive
                  ? "bg-[#FF385C] text-white shadow-md"
                  : "bg-gray-100 hover:bg-gray-200 "
              }`
            }
          >
            {isExpend ? (
              <>
                <Home size={20} />
                <span className="font-medium">Home</span>
              </>
            ) : (
              <Home />
            )}
          </NavLink>

          {/* Leaderboard Link */}
          <NavLink
            to="/dashboard/overview"
            className={({ isActive }) =>
              `group flex items-center gap-3 px-4 py-3 transition-all duration-200 ease-in-out  ${
                isActive
                  ? "bg-[#FF385C] text-white shadow-md"
                  : "bg-gray-100 hover:bg-gray-200 "
              }`
            }
          >
            {isExpend ? (
              <>
                <ChartColumn size={20} />
                <span className="font-medium">Overview</span>
              </>
            ) : (
              <ChartColumn />
            )}
          </NavLink>

          {/* My Profile Link */}
          <NavLink
            to="/dashboard/my-profile"
            className={({ isActive }) =>
              `group flex items-center gap-3 px-4 py-3 transition-all duration-200 ease-in-out  ${
                isActive
                  ? "bg-[#FF385C] text-white shadow-md"
                  : "bg-gray-100 hover:bg-gray-200 "
              }`
            }
          >
            {isExpend ? (
              <>
                <User size={20} />
                <span className="font-medium">My Profile</span>
              </>
            ) : (
              <User />
            )}
          </NavLink>
        </ul>
      </aside>

      {/* content showing part */}
      <div className=" bg-white w-full">
        <nav className=" py-4 bg-gray-100 w-full">
          <div>
            {isExpend ? (
              <>
                <div className="flex items-center">
                  <button
                    className="px-4 py-3 mr-2 cursor-pointer hover:bg-gray-300"
                    onClick={() => setIsExpend(!isExpend)}
                  >
                    {isExpend ? <PanelLeftClose /> : <PanelLeftOpen />}
                  </button>
                  <Logo />
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center">
                  <button
                    className="px-4 py-3 mr-2 cursor-pointer hover:bg-gray-300"
                    onClick={() => setIsExpend(!isExpend)}
                  >
                    {isExpend ? <PanelLeftClose /> : <PanelLeftOpen />}
                  </button>
                  <Logo />
                </div>
              </>
            )}
          </div>
        </nav>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
