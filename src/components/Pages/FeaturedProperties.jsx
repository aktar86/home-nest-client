import React, { use } from "react";
import PropertyDetails from "../PropertyDetails/PropertyDetails";
import FeatureProperty from "./FeatureProperty";

const FeaturedProperties = ({ featuredPropertiesPromise }) => {
  const featuredProperties = use(featuredPropertiesPromise);
  // console.log(featuredProperties);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">
        Latest <span className="text-[#FF385C]">Properties</span>{" "}
      </h1>
      <p className="text-center mt-2 mb-10">
        Discover HomeNest Properties — a curated selection of premium homes
        chosen for their design, comfort, and location. <br /> Find the perfect
        space that truly feels like home with HomeNest.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-2">
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
