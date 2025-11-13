import { createBrowserRouter, Link } from "react-router";
import Root from "../Layout/Root";
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

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
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
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
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
        element: (
          <PrivetRoute>
            <MyProperties></MyProperties>
          </PrivetRoute>
        ),
      },
      {
        path: "/propertydetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://home-nest-server-api.vercel.app/properties/${params.id}`
          ),
        element: (
          <PrivetRoute>
            <PropertyDetails></PropertyDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "myratings",
        loader: () => fetch("https://home-nest-server-api.vercel.app/reviews"),
        element: (
          <PrivetRoute>
            <MyRatings></MyRatings>
          </PrivetRoute>
        ),
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
