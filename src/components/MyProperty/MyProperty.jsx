import React, { use, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";

import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const MyProperty = ({ property, deleteProperty, handleUpdatedUI }) => {
  const updateModalRef = useRef(null);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const { user, darkMode } = use(AuthContext);


  //destructure for card
  const {
    _id: propertyId,
    property_name,
    category: property_category,
    property_location,
    property_price,
    property_img_url,
    createdAt,
  } = property;
  console.log(property);
  //   handle delete btn
  const handleDeleteProperty = (propertyId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://home-nest-server-api.vercel.app/properties/${propertyId}`,
          {
            method: "DELETE",
          }
        ).then((res) =>
          res.json().then((data) => {
            console.log("after deleting data:", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Property has been deleted.",
                icon: "success",
              });

              //ui update
              deleteProperty(propertyId);
            }
          })
        );
      }
    });
  };

  const handleUpdateProperty = (e) => {
    e.preventDefault();
    const propertyName = e.target.propertyname.value.trim();
    const category = e.target.category.value.trim();
    const price = Number(e.target.price.value.trim());
    const location = e.target.location.value.trim();
    const photourl = e.target.photourl.value.trim();
    const username = e.target.username.value.trim();
    const userEmail = e.target.email.value.trim();
    const description = e.target.description.value.trim();

    if (!propertyName || !category || !price || !location || !photourl) {
      toast.error("Please fill all required fields correctly.");
      return;
    }

    if (isNaN(price) || price < 0) {
      toast.error("Please enter a valid price.");
      return;
    }

    const updatedProperty = {
      property_name: propertyName,
      category,
      property_price: price,
      property_location: location,
      property_img_url: photourl,
      user_name: username,
      user_email: userEmail,
      description,
    };

    //update database
    fetch(`https://home-nest-server-api.vercel.app/properties/${propertyId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProperty),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after updating the data:", data);
        updateModalRef.current.close();
        if (data.modifiedCount) {
          Swal.fire({
            title: "Updated!",
            text: "Your Property has been updated successfully.",
            icon: "success",
          });

          //update immidiate ui
          handleUpdatedUI(propertyId, updatedProperty);

          //navigate the property details page
          navigate(`/propertydetails/${propertyId}`);
        }
      });
  };

  return (
    <div
      key={property._id}
      className={` ${
        darkMode ? "bg-gray-700" : "bg-white"
      }  flex flex-col rounded-lg overflow-hidden shadow-xl`}
    >
      {/* card img  */}
      <div>
        <img
          className="w-full h-70 p-2 rounded-xl object-cover"
          src={property_img_url}
          alt={property_img_url}
        />
      </div>
      {/* card content  */}
      <div className="p-3 flex-1">
        <h3 className="font-semibold text-2xl text-[#FF385C]">
          ${property_price.toLocaleString()}
        </h3>
        <h2 className="font-bold text-3xl">{property_name}</h2>
        <p>Location: {property_location}</p>
      </div>

      <div className="p-3">
        <span className="flex justify-between items-center gap-2">
          <p className="flex-2  py-1 bg-red-200 rounded-2xl pl-5">
            Posted On: {new Date(createdAt).toLocaleDateString()}
          </p>
          <p
            className={`flex-1 py-1 rounded-2xl text-center ${
              property.category === "Rent"
                ? "bg-green-100 text-green-700"
                : property.category === "Sale"
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            } `}
          >
            {property_category}
          </p>
        </span>
      </div>

      {/* card Buttons  */}
      <div className="flex justify-between gap-4 p-2">
        <button
          onClick={() => updateModalRef.current.showModal()}
          className=" flex-1 btn text-white border-0 bg-[#FF385C] hover:bg-[#fd274e] rounded-full"
        >
          Update
        </button>
        <Link
          to={`/propertydetails/${propertyId}`}
          className=" flex-2 btn  text-white bg-[#FF385C] border-0 hover:bg-[#fd274e] rounded-full"
        >
          View Details
        </Link>
        <button
          onClick={() => handleDeleteProperty(propertyId)}
          className=" flex-1 btn text-white border-0 bg-[#FF385C] hover:bg-[#fd274e] rounded-full"
        >
          Delete
        </button>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog
        ref={updateModalRef}
        className="modal modal-bottom sm:modal-middle "
      >
        <div
          className={`${
            darkMode ? "bg-gray-700" : "bg-white"
          } modal-box relative`}
        >
          <button
            onClick={() => updateModalRef.current.close()}
            className="btn btn-xs bg-[#FF385C] text-xs text-white rounded-full w-8 h-8 absolute right-2 top-2"
          >
            X
          </button>
          <h3 className="font-bold text-center mb-5 mt-5 text-2xl">
            Update Your <span className="text-[#FF385C]">Property</span>
          </h3>
          {/* updateModalRef.current.close() */}
          <div className={`w-full ${darkMode ? "bg-gray-700" : "bg-white"}`}>
            <form
              onSubmit={handleUpdateProperty}
              className={`${
                darkMode ? "bg-gray-700 text-white" : "bg-white"
              } "   shadow-sm rounded-lg p-3 space-y-5"`}
            >
              {/* 1. Property Name & Category */}
              <div className="flex flex-col md:flex-row justify-between gap-5">
                <div className="flex-1">
                  <label className="block font-semibold mb-1">
                    Property Name
                  </label>
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
                  <label className="block font-semibold  mb-1">
                    User Email
                  </label>
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
                className="btn bg-[#ff385c] hover:bg-[#e23352] text-white font-semibold w-full py-2 rounded-full transition-all"
              >
                Update Property
              </button>
            </form>
          </div>

          {/* <div className="modal-action">
            <form method="dialog"> */}
          {/* if there is a button in form, it will close the modal */}
          {/* <button className="btn">Close</button> */}
          {/* </form>
          </div> */}
        </div>
      </dialog>
    </div>
  );
};

export default MyProperty;
