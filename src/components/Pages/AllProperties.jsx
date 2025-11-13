import React, { useState } from "react";
import { useLoaderData } from "react-router";
import FeatureProperty from "./FeatureProperty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const AllProperties = () => {
  const properties = useLoaderData();
  // const navigate = useNavigate();
  const [searchProperty, setSearchProperty] = useState("");
  console.log(properties);

  const filterProperties = properties.filter((property) => {
    return property.property_name
      .toLowerCase()
      .includes(searchProperty.toLowerCase());
  });
  console.log(filterProperties);

  const handleResetInput = () => {
    setSearchProperty("");
    // navigate(-1);
  };

  return (
    <div className="bg-gray-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-0 bg-gray-200">
        <div className="bg-gray-200">
          <div>
            <h1 className="text-4xl font-bold text-center py-10">
              All <span className="text-[#FF385C]">Properties </span>
            </h1>
            <p className="text-center mb-10">
              Browse all available properties at HomeNest. From cozy apartments
              to spacious villas, explore detailed listings, prices, <br /> and
              locations to find the perfect home that fits your lifestyle.
            </p>
            <div className="p-2  flex flex-col md:flex-row justify-between ">
              <h2 className="text-2xl font-semibold">
                Total Properties:{" "}
                <span className="text-[#FF385C]">
                  {filterProperties.length}
                </span>
              </h2>
              <div className="border bg-white border-gray-300 px-2 py-1 rounded-sm flex items-center w-sm">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                  type="text"
                  value={searchProperty}
                  onChange={(e) => setSearchProperty(e.target.value)}
                  placeholder="Search Property by Name"
                  className=" w-full outline-0 px-2 py-1 "
                />
              </div>
            </div>
          </div>

          {filterProperties.length > 0 ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
              {filterProperties.map((property) => (
                <FeatureProperty
                  key={property._id}
                  property={property}
                ></FeatureProperty>
              ))}
            </div>
          ) : (
            <div className="h-screen flex flex-col justify-center items-center">
              <div className="space-y-2">
                <p className="text-4xl font-bold text-center ">Property</p>
                <p className="text-red-500 text-5xl"> Not Found</p>
              </div>

              <button
                onClick={handleResetInput}
                className="btn outline-0 border border-[#FF385C] rounded-full mt-5 hover:bg-[#FF385C] hover:text-white"
              >
                Go Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
