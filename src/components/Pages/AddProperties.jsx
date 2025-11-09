import React from "react";

const AddProperties = () => {
  return (
    <div className=" p-2   min-h-screen">
      <form className="flex flex-col justify-center items-center">
        <div className="bg-white shadow-sm rounded-lg p-10 md:max-w-8/12  lg:max-w-6/12 mx-auto space-y-5">
          {/* 1  row */}
          <div className="flex flex-col md:flex-row justify-between  gap-5">
            <div className=" flex-1">
              <label className="block font-semibold">Property Name</label>
              <input
                type="text"
                name="propertyname"
                placeholder="e.g. Yamaha Fz Guitar for Sale"
                className="w-full border border-gray-300 py-2 rounded-lg outline-0 px-2"
              />
            </div>
            <div className=" flex-1">
              <label className="label">
                <span className=" text-black font-semibold">Category</span>
              </label>
              <select
                name="category"
                className="select select-bordered w-full outline-0"
              >
                <option disabled selected>
                  Select a category
                </option>
                <option>Rent</option>
                <option>Sale</option>
                <option>Commercial</option>
                <option>Land</option>
              </select>
            </div>
          </div>

          {/* 3 Price and location */}
          <div className="flex flex-col justify-between gap-5">
            <div className=" flex-1">
              <label className="block font-semibold">Price</label>
              <input
                type="number"
                name="price"
                placeholder="124500"
                className="w-full border border-gray-300 py-2 rounded-lg outline-0 px-2"
              />
            </div>
            <div className=" flex-1">
              <label className="block font-semibold">Location</label>
              <input
                type="email"
                name="email"
                placeholder="Property Location"
                className="w-full border border-gray-300 py-2 rounded-lg outline-0 px-2"
              />
            </div>
          </div>

          {/* 2 photo link of properties */}
          <div>
            <div className="">
              <label className="block font-semibold">
                Your Property Image URL
              </label>
              <input
                type="text"
                name="photourl"
                placeholder="e.g. https://..."
                className="w-full border border-gray-300 py-2 rounded-lg outline-0 px-2"
              />
            </div>
          </div>

          {/* 4 username and email */}
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className=" flex-1">
              <label className="block font-semibold">User Name</label>
              <input
                type="text"
                name="name"
                placeholder="Jhon Doe"
                className="w-full border border-gray-300 py-2 rounded-lg outline-0 px-2"
              />
            </div>
            <div className=" flex-1">
              <label className="block font-semibold">User Email</label>
              <input
                type="email"
                name="email"
                placeholder="jhondoe@gmail.com"
                className="w-full border border-gray-300 py-2 rounded-lg outline-0 px-2"
              />
            </div>
          </div>

          {/* 5 description */}
          <div>
            <label className="block font-semibold">Description</label>
            <textarea
              name="description"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Your Property Description..."
            ></textarea>
          </div>

          {/* Add property button  */}
          <div>
            <button className="btn btn-primary w-full">Add Property</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProperties;
