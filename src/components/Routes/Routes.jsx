import { createBrowserRouter } from "react-router";
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
        path: "propertydetails",
        element: (
          <PrivetRoute>
            <PropertyDetails></PropertyDetails>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <p>404 Error, Page not loading</p>
      </div>
    ),
  },
]);

export default router;
