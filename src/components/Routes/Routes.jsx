import { createBrowserRouter, Link } from "react-router";
import Home from "../Pages/Home";
import AllProperties from "../Pages/AllProperties";
import About from "../Pages/About";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import AddProperties from "../Pages/AddProperties";
import MyProperties from "../Pages/MyProperties";
import PropertyDetails from "../PropertyDetails/PropertyDetails";
import MyRatings from "../Pages/MyRatings";
import Error from "../Error/Error";
import RootLayout from "../Layout/RootLayout";
import AuthLayout from "../Layout/AuthLayout";
import DashboardLayout from "../Layout/dashboardLayout";
import Leaderboard from "../dashboard/Leaderboard";
import MyProfile from "../dashboard/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allProperties",
        loader: () =>
          fetch("https://home-nest-server-api.vercel.app/properties"),
        Component: AllProperties,
      },
      {
        path: "about",
        Component: About,
      },

      {
        path: "addproperties",
        element: (
          <PrivetRoute>
            <AddProperties></AddProperties>
          </PrivetRoute>
        ),
      },
      {
        path: "myproperties",
        element: <MyProperties></MyProperties>,
      },
      {
        path: "/propertydetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://home-nest-server-api.vercel.app/properties/${params.id}`
          ),
        element: <PropertyDetails></PropertyDetails>,
      },
      {
        path: "myratings",
        loader: () => fetch("https://home-nest-server-api.vercel.app/reviews"),
        element: <MyRatings></MyRatings>,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: "leaderboard",
        Component: Leaderboard,
      },
      {
        path: "my-profile",
        Component: MyProfile,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);

// https://home-nest-server-api.vercel.app
export default router;
