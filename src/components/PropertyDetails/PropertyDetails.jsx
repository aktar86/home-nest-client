import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLoaderData } from "react-router";

const PropertyDetails = () => {
  const property = useLoaderData();
  const {
    property_img_url,
    property_price,
    property_location,
    description,
    property_name,
    category,
  } = property;
  console.log(property);
  return (
    <div className="bg-gray-200">
      <div className="max-w-[1440px] mx-auto bg-gray-200 border">
        {/* container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-blue-300">
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
                    USD $ {property_price}.00
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
                  <button className="btn btn-primary font-medium flex items-center w-full rounded-full md:w-auto mt-3 md:mt-0 justify-center ">
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
                <h3 className="text-2xl font-semibold">Property information</h3>
                <p>{description}</p>
                <br />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, doloremque et blanditiis minus impedit quaerat, odit
                  sit veritatis debitis eligendi officia aliquam assumenda eaque
                  esse dicta vero dolorem facilis quisquam rem vel. Nihil,
                  repellendus. Officiis rem quia, assumenda molestias qui ipsam.
                  Perferendis necessitatibus temporibus delectus reiciendis,
                  quasi, non magni voluptas nesciunt saepe quis assumenda dolore
                  in! Enim unde quam incidunt dolorem ad. Ipsum voluptatibus
                  <br />
                  <br />
                  deleniti assumenda earum nostrum provident ipsa et consectetur
                  aliquid nobis id ad, rerum fugit aperiam sed. Exercitationem
                  magnam enim consequatur rem! Debitis, eos animi! Optio qui ab
                  accusantium porro quo tempora molestias sit sed quaerat est.
                </p>
              </div>
            </div>
          </div>

          {/* content of property */}
          <div className="col-span-1 border bg-white p-2 ">
            call card added will later
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

// category
// :
// "Sale"

// property_name
// :
// "Cozy Family Home"
// property_owner
// :
// "Md Aktar Ahmed"
// property_owner_mail
// :
// "amdaktar86@gmail.com"
// property_price
// :
// 6500000
// _id
// :
// "69110c97b9cc4caa83f1a730"
