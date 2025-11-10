import React from "react";
import { useLoaderData } from "react-router";
import FeatureProperty from "./FeatureProperty";

const AllProperties = () => {
  const properties = useLoaderData();
  console.log(properties);
  return (
    <div className="bg-gray-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-0 bg-gray-200 border">
        <h1>All Properties</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
          {properties.map((property) => (
            <FeatureProperty
              key={property._id}
              property={property}
            ></FeatureProperty>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
