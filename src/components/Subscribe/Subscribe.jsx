import React from "react";
import image1 from "../../assets/anna-koval-JZI_1XC1cvM-unsplash.jpg";
import image2 from "../../assets/alexandr-hovhannisyan-OIVvwDIvmsk-unsplash.jpg";

const Subscribe = () => {
  return (
    <div className="bg-white relative">
      <div className="flex h-[600px]">
        <div className="flex-2 overflow-hidden opacity-10">
          <img className="h-full w-full " src={image1} alt={image1} />
        </div>
        <div className=" flex-1  overflow-hidden ">
          <img
            className="h-full w-full object-cover opacity-20"
            src={image2}
            alt={image2}
          />
        </div>
      </div>
      <div className="h-[250px] w-10/12 left-30 bg-red-100 absolute top-50 p-5">
        <h1 className="font-bold text-3xl  text-center mt-5">
          Get the Latest Updates
        </h1>
        <p className="text-lg text-center">
          Subscribe to our newsletter and stay updated on the latest properties
        </p>
        <div className=" max-w-xl mx-auto mt-5   bg-white flex">
          <input
            type="text"
            placeholder="Jhondoe12@gmail.com"
            className=" w-full flex-2 py-2 pl-3 outline-0"
          />
          <input
            type="text"
            value="Submit Now"
            className=" w-full flex-1 py-2 text-center text-white bg-[#FF385C] outline-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
