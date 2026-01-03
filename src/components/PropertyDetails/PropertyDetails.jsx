import {
  faArrowLeft,
  faCalendar,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { use, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Ratings from "./Ratings";
import { toast } from "react-toastify";
import Map from "../../assets/googl_ED-1024x683.jpg";
import UserIcon from "../../assets/user (1).png";
import DiningImage from "../../assets/dining-room-3108037_1280.jpg";

const PropertyDetails = () => {
  const { user, darkMode } = use(AuthContext);
  const navigate = useNavigate();
  const property = useLoaderData();
  const [userRating, setUserRating] = useState(0);

  const handleRatingChange = (currentRating) => {
    setUserRating(currentRating);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const reviewerName = e.target.reviewer_name.value.trim();
    const reviewerProperyName = e.target.reviewer_propery_name.value.trim();
    const reviewDescription = e.target.review_description.value.trim();
    const userRatings = userRating;
    const thumbnail = property.property_img_url;

    if (!userRatings || userRatings === 0) {
      toast.error("Please set reviews!");
      return;
    }

    if (!reviewDescription) {
      toast.error("Write a Short description!");
      return;
    }

    console.log(
      reviewerName,
      reviewerProperyName,
      reviewDescription,
      userRatings
    );

    const newReview = {
      reviewerName,
      reviewerProperyName,
      reviewDescription,
      userRatings,
      thumbnail,
      createdAt: new Date(),
    };

    console.log(newReview);

    fetch("https://home-nest-server-api.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving review: ", data);
        if (data.insertedId) {
          toast.success("Your Review Successfully Done!");
          e.target.reset();
          setUserRating(0);
        }
      });
  };

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

  return (
    <div className={`${darkMode ? "bg-gray-800" : "bg-gray-200"} py-20 `}>
      <div className="max-w-[1440px] mx-auto">
        {/* container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className={`${
              darkMode ? "bg-gray-700 text-white" : "bg-white"
            } md:col-span-2  p-5`}
          >
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
                <div className=" hidden lg:flex flex-col col-span-1 space-y-2">
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
                  <button className="btn-secondary btn w-full">
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
                      (property_owner_mail === user?.email && user?.photoURL) ||
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
          <div
            className={`${
              darkMode ? "bg-gray-700 text-white" : "bg-white"
            } col-span-1  p-5`}
          >
            <div onClick={() => navigate("/allProperties")} className="mb-5">
              <Link>
                <span>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>{" "}
                Back to Property
              </Link>
            </div>
            {/* inspectiong times */}

            <div
              className={`${
                darkMode && "bg-gray-600 text-white"
              } shadow-sm rounded-lg p-2 mt-10`}
            >
              <h3 className="font-medium text-xl px-2 text-[#FF385C]">
                Inspecting Times
              </h3>
              <div className="mt-5 px-2 ">
                <p className="font-semibold text-xl">
                  Inspections are actions are still happening
                </p>
              </div>
              <button className={`btn btn-secondary w-full mt-8`}>
                <span>
                  <FontAwesomeIcon icon={faCalendar} />
                </span>{" "}
                Add to Calender
              </button>
            </div>

            {/* img of map  */}
            <div
              className={`mt-5 ${
                darkMode ? "bg-gray-600" : "bg-white"
              } shadow-sm rounded-2xl overflow-hidden `}
            >
              <img
                className="object-cover w-full shadow-sm p-2  rounded-2xl"
                src={Map}
                alt={Map}
              />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------ */}
        {/* review section here */}
        <div className="mt-10  ">
          <h1
            className={`${
              darkMode ? "bg-gray-700 text-white" : "bg-white"
            } text-5xl font-semibold py-5 text-center shadow-sm my-0`}
          >
            We’d Love Your <span className="text-[#ff385c]">Feedback</span>
          </h1>
          <div
            className={`${
              darkMode ? "bg-gray-600 text-white" : "bg-white"
            } md:relative `}
          >
            {/* content  */}
            <div className="flex flex-col lg:flex-row justify-between  h-150">
              {/* 1  */}
              <div className="flex-2 flex justify-baseline items-center relative ">
                <img
                  className="object-cover z-0 opacity-5 absolute h-full"
                  src={DiningImage}
                  alt=""
                />
                <div className=" px-3 z-10 ">
                  <div className="lg:w-100 flex  items-baseline-last mb-10">
                    <p className="text-[#ff385c] text-xl font-medium whitespace-nowrap mr-4">
                      YOUR WORD MATTER
                    </p>
                    <div className="grow border-b-2 border-[#ff385c]"></div>
                  </div>

                  <h1 className="lg:text-5xl font-semibold lg:max-w-170">
                    Your Voice Shapes{" "}
                    <span className="text-[#ff385c]">HomeNest</span>
                  </h1>
                  <p className=" lg:max-w-145 my-6 text-lg">
                    We’re constantly improving to make HomeNest better for you.
                    Tell us about your journey — from browsing properties to
                    connecting with owners — and help us create the perfect
                    place to find your next home.
                  </p>

                  <button
                    onClick={() => navigate("/myratings")}
                    className="btn btn-secondary"
                  >
                    See details
                  </button>
                </div>
              </div>

              {/* 2 */}
              <div className="hidden lg:flex flex-1">
                <img
                  className="object-cover opacity-20"
                  src={DiningImage}
                  alt=""
                />
              </div>
            </div>
            {/* form  */}
            <div className="py-30 lg:py-0">
              <div
                className={`max-w-md mx-auto shadow-xl ${
                  darkMode ? "bg-gray-700" : "bg-white"
                }  p-5 py-10 lg:absolute md:top-10 md:left-7/12`}
              >
                <form onSubmit={handleReviewSubmit} className="p-2 space-y-2">
                  <div>
                    <label className="block">Reviewer Name</label>
                    <input
                      type="text"
                      name="reviewer_name"
                      // placeholder="Reviewer Name"
                      readOnly
                      defaultValue={property_owner}
                      className="border border-gray-300 outline-0 w-full p-2"
                    />
                  </div>
                  {/* property name */}
                  <div>
                    <label className="block">Property Name</label>
                    <input
                      type="text"
                      name="reviewer_propery_name"
                      // placeholder="Property Name"
                      readOnly
                      defaultValue={property_name}
                      className="border border-gray-300 outline-0 w-full p-2"
                    />
                  </div>

                  {/* Rating  */}
                  <div>
                    <Ratings
                      handleRatingChange={handleRatingChange}
                      userRating={userRating}
                    ></Ratings>
                  </div>
                  {/* {userRating > 0 && (
                  <p className="mt-2 text-gray-700">
                    Your Rating: {userRating}
                  </p>
                )} */}
                  {/* short description */}
                  <textarea
                    type="text"
                    name="review_description"
                    placeholder="Write your feelings"
                    className="border border-gray-300 outline-0 w-full h-30 p-2"
                  ></textarea>
                  {/* submit btn */}
                  <input
                    type="submit"
                    value="Submit Review"
                    className="btn btn-secondary"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
