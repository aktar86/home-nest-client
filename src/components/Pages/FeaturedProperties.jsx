import React, { use } from "react";
import PropertyDetails from "../PropertyDetails/PropertyDetails";
import FeatureProperty from "./FeatureProperty";

const FeaturedProperties = ({ featuredPropertiesPromise }) => {
  const featuredProperties = use(featuredPropertiesPromise);
  console.log(featuredProperties);
  return (
    <div>
      <h1>Featured Properties </h1>

      <div className="grid grid-cols-3 gap-4 p-2">
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
