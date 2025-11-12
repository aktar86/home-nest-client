import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import MyProperty from "../MyProperty/MyProperty";

const MyProperties = () => {
  const { user } = use(AuthContext);
  const [properties, setProperties] = useState([]);

  //get data for my properties form database
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/properties?email=${user.email}`).then(
        (res) =>
          res.json().then((data) => {
            console.log(data);
            setProperties(data);
          })
      );
    }
  }, [user?.email]);

  //delete propety and update ui
  const deleteProperty = (id) => {
    const updateProperty = properties.filter((p) => p._id !== id);
    setProperties(updateProperty);
  };

  const handleUpdatedUI = (propertyId, updatedProperty) => {
    const updatedPropertyUi = properties.map((property) => {
      if (property._id === propertyId) {
        const updateUi = { ...property, ...updatedProperty };
        return updateUi;
      } else {
        return property;
      }
    });
    setProperties(updatedPropertyUi);
  };

  return (
    <div className="bg-gray-200">
      <div className="max-w-[1440px] mx-auto py-10 bg-gray-200">
        <h1 className="text-5xl text-center font-bold py-10">
          My Properties:{" "}
          <span className="text-[#FF385C]">
            {properties.length < 10
              ? "0" + properties.length
              : properties.length}
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-white p-5 ">
          {properties.map((property) => (
            <MyProperty
              key={property._id}
              property={property}
              deleteProperty={deleteProperty}
              handleUpdatedUI={handleUpdatedUI}
            ></MyProperty>
          ))}
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default MyProperties;
