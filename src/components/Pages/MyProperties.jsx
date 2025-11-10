import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const MyProperties = () => {
  const { user } = use(AuthContext);
  const [property, setProperty] = useState([]);

  //get data for my properties form database
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/properties?email=${user.email}`).then(
        (res) =>
          res.json().then((data) => {
            console.log(data);
            setProperty(data);
          })
      );
    }
  }, [user?.email]);

  return (
    <div className="bg-gray-200">
      <div className="max-w-[1440px] mx-auto bg-gray-200 border">
        <h1>My Properties: {property.length}</h1>

        <div></div>
      </div>
    </div>
  );
};

export default MyProperties;
