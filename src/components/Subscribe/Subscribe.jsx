import React, { useEffect, useState } from "react";
import image1 from "../../assets/anna-koval-JZI_1XC1cvM-unsplash.jpg";
import image2 from "../../assets/alexandr-hovhannisyan-OIVvwDIvmsk-unsplash.jpg";
import { toast } from "react-toastify";

const Subscribe = () => {
  const [userMail, setUserMail] = useState([]);

  useEffect(() => {
    fetch("https://home-nest-server-api.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUserMail(data);
      })
      .catch((error) => {
        console.log("Fetch error:", error.message);
      });
  }, []);
  // console.log(userMail);

  const handleSaveUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim().toLowerCase();

    if (!email) {
      toast.error("Please write your email!");
      return;
    }

    // check if email already exists
    const existingCheckMail = userMail.some(
      (m) => m.user_Coll_email.trim().toLowerCase() === email
    );

    if (existingCheckMail) {
      toast.error("User already exists");
      return;
    }

    const newUser = {
      user_Coll_email: email,
    };

    fetch("https://home-nest-server-api.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving user email:", data);
        if (data.insertedId) {
          toast.success("Successfully added user data");
          e.target.reset();
        }
      });
  };

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
      <div className="h-[350px] md:h-[250px] max-w-10/12 md:w-10/12 left-10 md:left-30 bg-red-100 absolute top-50 p-5">
        <h1 className="font-bold text-3xl  text-center mt-5">
          Get the Latest Updates
        </h1>
        <p className="text-lg text-center">
          Subscribe to our newsletter and stay updated on the latest properties
        </p>
        <div>
          <form
            onSubmit={handleSaveUser}
            className=" max-w-xl mx-auto mt-5  bg-white flex flex-col md:flex-row "
          >
            {" "}
            <input
              type="email"
              name="email"
              placeholder="Jhondoe12@gmail.com"
              className=" w-full flex-2 py-2 pl-3 outline-0"
            />
            <input
              type="submit"
              value="Submit Now"
              className=" w-full flex-1 py-2 text-center text-white bg-[#FF385C] outline-0"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
