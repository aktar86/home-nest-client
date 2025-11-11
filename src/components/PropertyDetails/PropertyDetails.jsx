import {
  faArrowLeft,
  faCalendar,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { use } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Map from "../../assets/googl_ED-1024x683.jpg";
import UserIcon from "../../assets/user (1).png";

const PropertyDetails = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const property = useLoaderData();
  const {
    property_img_url,
    property_price,
    property_location,
    description,
    property_name,
    category,
    property_owner,
    property_owner_mail,
    createdAt,
  } = property;
  console.log(property);
  return (
    <div className="bg-gray-200 py-20">
      <div className="max-w-[1440px] mx-auto bg-gray-200">
        {/* container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2  bg-white p-5">
            <div>
              {/* img section  */}
              <div className="grid md:grid-cols-3 gap-4 p-2 rounded-lg shadow-sm">
                <div className="md:col-span-2">
                  <img
                    className="w-full object-cover rounded-lg"
                    src={property_img_url}
                    alt={property_img_url}
                  />
                </div>
                <div className=" flex flex-col col-span-1 space-y-2">
                  <img
                    className="w-full object-cover flex-1 rounded-lg"
                    src={property_img_url}
                    alt={property_img_url}
                  />
                  <img
                    className="w-full object-cover flex-1 rounded-lg"
                    src={property_img_url}
                    alt={property_img_url}
                  />
                </div>
              </div>

              {/* body */}
              <div className=" shadow-sm rounded-lg mt-5 p-2 flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h1 className="font-bold text-3xl">
                    USD $ {property_price.toLocaleString()}
                  </h1>
                  <p className="text-red-400">
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    Location: {property_location}
                  </p>
                </div>
                <div>
                  <button className="btn bg-[#FF385C] outline-0 border-0 text-white font-medium flex items-center w-full rounded-full md:w-auto mt-3 md:mt-0 justify-center ">
                    <span>
                      <FontAwesomeIcon icon={faPhoneVolume} />
                    </span>
                    <span>Purchase this property</span>
                  </button>
                </div>
              </div>

              {/* name and category  */}
              <div className=" shadow-sm rounded-lg p-2 mt-5">
                <h2 className="text-2xl font-bold mb-3">{property_name}</h2>
                <p>
                  <span className="font-bold">Category:</span>{" "}
                  <span
                    className={`py-1 px-5 rounded-full ${
                      category === "Rent"
                        ? "bg-green-100 text-green-700"
                        : category === "Sale"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {category}
                  </span>
                </p>
              </div>

              {/* description  */}
              <div className=" shadow-sm rounded-lg p-2 mt-5">
                <h3 className="text-2xl font-semibold mb-2">
                  Property information
                </h3>
                <p>{description}</p>
              </div>
            </div>
            {/* ..... */}
            <div className=" shadow-sm rounded-lg p-2 mt-5 py-5">
              <h3 className="font-medium text-xl px-2 text-[#FF385C]">
                Posted By:
              </h3>
              <div className="mt-5 flex flex-col lg:flex-row lg:items-center gap-5 px-2 ">
                <div>
                  <img
                    src={
                      (property_owner_mail === user.email && user?.photoURL) ||
                      UserIcon
                    }
                    alt={user?.photoURL}
                    referrerPolicy="no-referrer"
                    className="w-20 rounded-full ring-3 ring-[#FF385C]"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-3xl ">{property_owner}</h2>
                  <p className="text-lg">{property_owner_mail}</p>
                  <p className="text-xs">
                    {" "}
                    Posted On: {new Date(createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              {/* <button className="btn bg-[#FF385C] outline-0 border-0 text-white w-full rounded-full mt-3">
                <span>
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </span>{" "}
                Call Now
              </button> */}
            </div>
          </div>

          {/* content of property */}
          <div className="col-span-1  p-5 ">
            <div onClick={() => navigate("/allProperties")} className="mb-5">
              <Link>
                <span>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>{" "}
                Back to Property
              </Link>
            </div>
            {/* inspectiong times */}

            <div className=" bg-white shadow-sm rounded-lg p-2 mt-10">
              <h3 className="font-medium text-xl px-2 text-[#FF385C]">
                Inspecting Times
              </h3>
              <div className="mt-5 px-2 ">
                <p className="font-semibold text-xl">
                  Inspections are actions are still happening
                </p>
              </div>
              <button className="btn bg-[#FF385C] outline-0 border-0 text-white w-full rounded-full mt-5">
                <span>
                  <FontAwesomeIcon icon={faCalendar} />
                </span>{" "}
                Add to Calender
              </button>
            </div>

            {/* img of map  */}
            <div className="mt-5 bg-white shadow-sm rounded-2xl overflow-hidden  ">
              <img
                className="object-cover w-full shadow-sm p-2  rounded-2xl"
                src={Map}
                alt={Map}
              />
            </div>
          </div>
        </div>
        {/* review section here */}
        <div className="mt-10 border">
          <h1>Reviews page here</h1>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
