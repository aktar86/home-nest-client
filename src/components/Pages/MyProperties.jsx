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

  return (
    <div className="bg-gray-200">
      <div className="max-w-[1440px] mx-auto bg-gray-200 border">
        <h1>My Properties: {properties.length}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {properties.map((property) => (
            <MyProperty key={property._id} property={property}></MyProperty>
          ))}
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default MyProperties;
