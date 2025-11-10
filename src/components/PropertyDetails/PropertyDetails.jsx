import React from "react";
import { useLoaderData } from "react-router";

const PropertyDetails = () => {
  const property = useLoaderData();
  console.log(property);
  return (
    <div>
      <h1>property details will add later</h1>
    </div>
  );
};

export default PropertyDetails;
