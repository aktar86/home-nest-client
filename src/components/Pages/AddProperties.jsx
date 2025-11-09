import React, { use, useState } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const AddProperties = () => {
  const { user } = use(AuthContext);
  const [category, setCategory] = useState("");
  console.log(user);
  const handleSubmitProperty = (e) => {
    e.preventDefault();

    const propertyName = e.target.propertyname.value.trim();
    const categoryName = category.trim();
    const price = Number(e.target.price.value.trim());
    const location = e.target.location.value.trim();
    const propertyPhoto = e.target.photourl.value.trim();
    const userName = e.target.username.value.trim();
    const userEmail = e.target.email.value.trim();
    const propertyDescription = e.target.description.value.trim();

    if (
      !propertyName ||
      !categoryName ||
      !price ||
      !location ||
      !propertyPhoto ||
      !userName ||
      !userEmail ||
      !propertyDescription
    ) {
      toast.error("Please fill in all the fields before submitting.");
      return;
    }

    const newProperty = {
      property_name: propertyName,
      description: propertyDescription,
      category: categoryName,
      property_price: price,
      property_location: location,
      property_img_url: propertyPhoto,
      property_owner: userName,
      property_owner_mail: userEmail,
    };
    console.log(newProperty);

    //send data to server to database
    fetch("http://localhost:3000/properties", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProperty),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving property data", data);
        if (data.insertedId) {
          // e.target.reset();
          setCategory("");
          toast.success("Property added successfully!");
        }
      });
  };
  return (
    <div className=" flex flex-col justify-center items-center bg-gray-200   ">
      {/* top section */}
      <div className="mt-10 text-center w-full">
        <Link to="/allProperties">
          <span className="mr-2">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          Back to Properties
        </Link>

        <h1 className="font-bold text-4xl text-center mt-2">
          Create A <span className="text-[#ff385c] ">Property</span>
        </h1>
      </div>

      {/* form section */}
      <div className="p-4 w-full sm:w-10/12 md:w-8/12 lg:w-5/12 ">
        <form
          onSubmit={handleSubmitProperty}
          className=" bg-white  shadow-sm rounded-lg p-6 md:p-10 space-y-5"
        >
          {/* 1. Property Name & Category */}
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="flex-1">
              <label className="block font-semibold mb-1">Property Name</label>
              <input
                type="text"
                name="propertyname"
                placeholder="e.g. Land for Sale in Sylhet"
                className="w-full border border-gray-300 py-2 px-3 rounded-lg outline-none focus:ring-2 focus:ring-[#ff385c]"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">Category</label>
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 py-2 px-3 rounded-lg outline-none focus:ring-2 focus:ring-[#ff385c]"
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="Rent">Rent</option>
                <option value="Sale">Sale</option>
                <option value="Commercial">Commercial</option>
                <option value="Land">Land</option>
              </select>
            </div>
          </div>

          {/* 2. Price & Location */}
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="flex-1">
              <label className="block font-semibold mb-1">Price</label>
              <input
                type="number"
                name="price"
                placeholder="124500"
                className="w-full border border-gray-300 py-2 px-3 rounded-lg outline-none focus:ring-2 focus:ring-[#ff385c]"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Property Location"
                className="w-full border border-gray-300 py-2 px-3 rounded-lg outline-none focus:ring-2 focus:ring-[#ff385c]"
              />
            </div>
          </div>

          {/* 3. Property Image URL */}
          <div>
            <label className="block font-semibold mb-1">
              Your Property Image URL
            </label>
            <input
              type="text"
              name="photourl"
              placeholder="e.g. https://..."
              className="w-full border border-gray-300 py-2 px-3 rounded-lg outline-none focus:ring-2 focus:ring-[#ff385c]"
            />
          </div>

          {/* 4. User Info */}
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="flex-1">
              <label className="block font-semibold mb-1">User Name</label>
              <input
                type="text"
                name="username"
                readOnly
                defaultValue={user?.displayName}
                className="w-full border border-gray-300 py-2 px-3 rounded-lg outline-none focus:ring-2 focus:ring-[#ff385c]"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">User Email</label>
              <input
                type="email"
                name="email"
                readOnly
                defaultValue={user?.email}
                className="w-full border border-gray-300 py-2 px-3 rounded-lg outline-none focus:ring-2 focus:ring-[#ff385c]"
              />
            </div>
          </div>

          {/* 5. Description */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Your Property Description..."
              className="w-full border border-gray-300 py-2 px-3 rounded-lg outline-none focus:ring-2 focus:ring-[#ff385c]"
            ></textarea>
          </div>

          {/* 6. Submit Button */}
          <button
            type="submit"
            className="btn bg-[#ff385c] hover:bg-[#e23352] text-white font-semibold w-full py-2 rounded-lg transition-all"
          >
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperties;
