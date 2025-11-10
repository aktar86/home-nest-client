import React from "react";
import { Link } from "react-router";

const MyProperty = ({ property }) => {
  const {
    _id: propertyId,
    property_name,
    category,
    description,
    property_location,
    property_price,
    property_img_url,
  } = property;
  return (
    <div
      key={property._id}
      className="bg-white flex flex-col rounded-lg overflow-hidden "
    >
      {/* card img  */}
      <div>
        <img
          className="w-full h-70 p-2 rounded-xl object-cover"
          src={property_img_url}
          alt={property_img_url}
        />
      </div>
      {/* card content  */}
      <div className="p-3 flex-1">
        <h3 className="font-semibold text-2xl">${property_price}</h3>
        <h2 className="font-bold text-3xl">{property_name}</h2>
        <p>Location: {property_location}</p>
      </div>

      <div className="p-3">
        <span className="flex justify-between items-center gap-2">
          <p className="flex-2 ">Posted Date: {"10, February, 2025"}</p>
          <p
            className={`flex-1 py-1 rounded-2xl text-center ${
              property.category === "Rent"
                ? "bg-green-100 text-green-700"
                : property.category === "Sale"
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            } `}
          >
            {category}
          </p>
        </span>
      </div>

      {/* card Buttons  */}
      <div className="flex justify-between gap-4 p-2">
        <button className=" flex-1 btn border-2 hover:text-white border-[#FF385C] hover:bg-[#FF385C] rounded-full">
          Update
        </button>
        <Link
          to={`/propertydetails/${propertyId}`}
          className=" flex-2 btn border-2 hover:text-white border-[#FF385C] hover:bg-[#FF385C] rounded-full"
        >
          View Details
        </Link>
        <button className=" flex-1 btn border-2 hover:text-white border-[#FF385C] hover:bg-[#FF385C] rounded-full">
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyProperty;
