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
        <div>
          {isExpend ? (
            <>
              <div className="flex items-center justify-between  mt-8">
                <Logo />
                <button
                  className="px-4 py-3  cursor-pointer hover:bg-gray-300"
                  onClick={() => setIsExpend(!isExpend)}
                >
                  {isExpend ? <PanelLeftClose /> : ""}
                </button>{" "}
              </div>
            </>
          ) : (
            <button
              className="px-4 py-3  mt-8 w-full cursor-pointer hover:bg-gray-300"
              onClick={() => setIsExpend(!isExpend)}
            >
              {isExpend ? "" : <PanelLeftOpen />}
            </button>
          )}
        </div>

        {/* Links */}

        <ul className="mt-20 flex flex-col ">
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
            to="/dashboard/leaderboard"
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
                <span className="font-medium">Leaderboard</span>
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
      <div className=" bg-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
