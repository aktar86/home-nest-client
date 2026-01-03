import { useQuery } from "@tanstack/react-query";
import React, { use, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import { Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";

const MyProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isEdited, setIsEdited] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm();

  const { data: userData = {} } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
  });

  const handleUpdateUserInfo = (data) => {
    // setIsEdited(false);
    // setLoading(true);
    console.log(data);
    // setLoading(false);
  };

  const { name, photoURL: image, email, role, createdAt } = userData;

  return (
    <>
      {isEdited ? (
        <>
          <div className="bg-blue-50 h-[calc(100vh-80px)] ">
            <h1 className="font-bold text-4xl text-center py-10">
              Update your info
            </h1>
            <form
              onSubmit={handleSubmit(handleUpdateUserInfo)}
              className="max-w-2xl mx-auto bg-white p-5 space-y-5 rounded-sm "
            >
              {/* name */}
              <div>
                <label className="block">Name</label>
                <input
                  type="text"
                  {...register("name")}
                  defaultValue={user?.displayName}
                  className="border border-gray-300 rounded-sm w-full p-2 focus:border-orange-500 outline-0 bg-white "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  defaultValue={user?.email}
                  className="border border-gray-300 rounded-sm w-full p-2 focus:border-orange-500 outline-0 bg-white "
                />
              </div>

              {/* PhotoURL */}
              <div>
                <label className="block">Photo URL</label>
                <input
                  type="text"
                  {...register("photoURL")}
                  placeholder="Update Your Photo URL"
                  className="border border-gray-300 rounded-sm w-full p-2 focus:border-orange-500 outline-0 bg-white "
                />
              </div>

              {/* Contact No */}
              <div>
                <label className="block">Contact No </label>
                <input
                  type="text"
                  {...register("contact")}
                  placeholder="Update Your Contact No "
                  className="border border-gray-300 rounded-sm w-full p-2 focus:border-orange-500 outline-0 bg-white "
                />
              </div>

              <div className="flex gap-4">
                {/* Country */}
                <div className="flex-1">
                  <label className="block">Country Name </label>
                  <input
                    type="text"
                    {...register("country")}
                    placeholder="Update Your Country Name "
                    className="border border-gray-300 rounded-sm w-full p-2 focus:border-orange-500 outline-0 bg-white "
                  />
                </div>

                {/* company */}
                <div className="flex-1">
                  <label className="block">Company Name </label>
                  <input
                    type="text"
                    {...register("country")}
                    placeholder="Update Your Company Name "
                    className="border border-gray-300 rounded-sm w-full p-2 focus:border-orange-500 outline-0 bg-white "
                  />
                </div>
              </div>

              <div className="flex gap-5 ">
                <input
                  type="submit"
                  // Loading thakle "Updating..." dekhabe, nahoy default "Update" dekhabe
                  value={loading ? "Updating..." : "Update"}
                  className="btn btn-secondary w-full flex-2
              "
                  // Loading obosthay button-ti inactive thakbe jate bar bar click na hoy
                  disabled={loading}
                />

                <button
                  onClick={() => setIsEdited(false)}
                  className="flex-1 btn rounded-full bg-gray-500 text-white"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <div className="flex flex-col md:flex-row  md:gap-4 min-h-[calc(100vh-80px)] ">
          <div className="md:flex-2  bg-[#FF385C] flex flex-col items-center justify-center space-y-5 text-white p-5">
            <div className="rounded-full overflow-hidden ring-5 ring-white object-cover">
              <img src={image} alt={image} className="object-cover" />
            </div>

            {/* name and role and country */}
            <div className="text-center">
              <h1 className=" text-3xl font-bold">{name}</h1>
              <p>
                {role} <br />
                at DreamLand Real Estate Company <br />
                Bangladesh
              </p>
            </div>

            {/* batch info */}
            <div className="text-center mt-5">
              <p>
                Class of 2018 (2014-18), <br /> Bachelor of Social Science
              </p>
            </div>

            {/* statistics */}
            <div className="flex justify-between  py-6 my-4">
              {/* 1 */}
              <div className="text-center px-4">
                <h1 className="text-6xl font-bold ">12</h1>
                <p className="text-sm font-semibold">Years of Experience</p>
              </div>

              {/* 2 */}
              <div className="text-center px-4 border-x-2">
                <h1 className="text-6xl font-bold ">450</h1>
                <p className="text-sm font-semibold ">Properties Sold</p>
              </div>

              {/* 3 */}
              <div className="text-center px-4">
                <h1 className="text-6xl font-bold ">25</h1>
                <p className="text-sm font-semibold ">Active Listings</p>
              </div>
            </div>

            <div className="flex gap-4 ">
              <div className="flex items-center gap-2  px-5 py-2 bg-white text-black rounded-sm">
                <Phone width={20} />
                <p>01728456744</p>
              </div>

              <div className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-sm">
                <Mail width={20} />
                <p>{user?.email}</p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="md:flex-3  p-5">
            <div className="md:flex-1   ">
              {/* Summary Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold border-b-2 border-gray-600 inline-block mb-4">
                  Summary:
                </h2>
                <p className="text-gray-700 leading-relaxed ">
                  A dedicated real estate professional with over 8 years of
                  experience in the property market. Specialized in residential
                  sales, luxury listings, and strategic property management.
                  With a track record of closing 150+ successful deals, I am
                  committed to helping families find their dream homes and
                  assisting investors in maximizing their ROI. My approach
                  combines market expertise with personalized service, ensuring
                  a seamless experience for buyers and sellers alike.
                </p>
              </div>

              {/* Added: Expertise & Focus Area */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                  Expertise & Services:
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Property Valuation",
                    "Market Analysis",
                    "Luxury Estates",
                    "Negotiation",
                    "Virtual Tours",
                    "Investment Consulting",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold border border-blue-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Added: Experience/Education Style Section */}
              <div>
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                  Market Focus:
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <div>
                      <p className="font-bold text-gray-900">
                        Senior Property Consultant
                      </p>
                      <p className="text-sm text-gray-500">
                        Global Realty Group
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                      2021 - Present
                    </p>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <div>
                      <p className="font-bold text-gray-900">
                        Real Estate Agent
                      </p>
                      <p className="text-sm text-gray-500">
                        Elite Home Solutions
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-600">
                      2016 - 2021
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button
                  onClick={() => setIsEdited(true)}
                  className="btn btn-secondary"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyProfile;
