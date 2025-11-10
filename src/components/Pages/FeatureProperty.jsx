import React from "react";
import { Link } from "react-router";

const FeatureProperty = ({ property }) => {
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
    <div className="flex flex-col bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
      <img
        referrerPolicy="no-referrer"
        src={property_img_url}
        alt={property_name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">
            {property_name}
          </h3>
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              category === "Rent"
                ? "bg-green-100 text-green-700"
                : category === "Sale"
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {category}
          </span>
        </div>

        <p className="flex-1 text-sm text-gray-600 mb-3">{description}</p>

        <div className="flex items-center justify-between text-sm text-gray-700">
          <div>
            <p className="font-medium"> {property_location}</p>
          </div>
          <div className="font-semibold text-indigo-600">
            $ {property_price.toLocaleString()}
          </div>
        </div>
        <div className="mt-5">
          <Link
            to={`/propertydetails/${propertyId}`}
            className="btn btn-primary w-full rounded-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureProperty;
