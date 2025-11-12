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
      <div className="max-w-[1440px] mx-auto px-5 sm:px-0 bg-gray-200  py-10">
        <div className="bg-white my-20">
          <div>
            <h1 className="text-5xl font-bold text-center py-10">
              All <span className="text-[#FF385C]">Properties </span>
            </h1>
            <div className="p-2  flex flex-col md:flex-row justify-between ">
              <h2 className="text-2xl font-semibold">
                Total Properties: {filterProperties.length}
              </h2>
              <div className="border border-gray-300 px-2 py-1 rounded-sm flex items-center w-sm">
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
