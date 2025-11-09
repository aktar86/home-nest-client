import React, { use } from "react";
import PropertyDetails from "../PropertyDetails/PropertyDetails";
import FeatureProperty from "./FeatureProperty";

const FeaturedProperties = ({ featuredPropertiesPromise }) => {
  const featuredProperties = use(featuredPropertiesPromise);
  console.log(featuredProperties);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Featured Properties </h1>
      <p className="text-center mb-10">Handpicked properties by our team</p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
        {featuredProperties.map((property) => (
          <FeatureProperty
            key={property._id}
            property={property}
          ></FeatureProperty>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
