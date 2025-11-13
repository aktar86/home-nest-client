import React from "react";
import smartSearchIcon from "../../assets/smart-search.png";
import Support from "../../assets/24-hours.png";
import Guidence from "../../assets/leadership.png";

const WhyChoose = () => {
  const whyChooseUsCards = [
    {
      id: "smart-search",
      icon: smartSearchIcon,
      title: "Smart Search Tools",
      description:
        "Our intuitive filters and smart search system help you find your dream home faster.",
    },
    {
      id: "support",
      icon: Support,
      title: "24/7 Support",
      description:
        "Our dedicated support team is always available to guide you through every step of your property journey.",
    },
    {
      id: "expert-guidance",
      icon: Guidence,
      title: "Expert Guidance",
      description:
        "With years of market experience, our professionals ensure you make informed real estate decisions.",
    },
  ];

  return (
    <div className="py-20 bg-red-100">
      <div className="text-center">
        <h1 className="text-center text-4xl font-bold">
          Why Choose <span className="text-[#FF385C]">Us</span>
        </h1>
        <p className="text-center mb-10">
          At HomeNest, we believe finding your perfect property should be
          simple, transparent, and stress-free.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 px-5 md:px-20">
        {whyChooseUsCards.map((choose, index) => (
          <div
            key={index}
            className="bg-white py-5 rounded-lg shadow-xl  p-3 flex flex-col justify-center items-center space-y-2 "
          >
            <div className=" p-3 bg-red-100 rounded-full transform transition ease-in-out">
              <img
                className="w-25 p-2 rounded-full bg-white"
                src={choose.icon}
                alt={choose.icon}
              />
            </div>
            <h2 className="font-medium text-3xl ">{choose.title}</h2>
            <p className="text-center">{choose.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
