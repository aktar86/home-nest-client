import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import PropertyPieChart from "../PropertyPieChart/PropertyPieChart";

import Loader from "../Loader/Loader";
import useAuth from "../../Hook/useAuth";
import UserManagement from "../UserManagement/UserManagement";

const Overview = () => {
  const { loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: adminStats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const stats = [
    {
      estDoc: adminStats.totalUsers,
      des: "Total User",
    },
    {
      estDoc: adminStats.totalProperties,
      des: "Total Properties",
    },
    {
      estDoc: adminStats.totalRevenue,
      des: "Total Revenue",
    },
    {
      estDoc: adminStats.totalReviews,
      des: "Total Reviews",
    },
  ];

  const { data: properties = [] } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosSecure.get("/properties");
      return res.data;
    },
  });

  console.log(properties);

  if (isLoading || loading) {
    return <Loader />;
  }

  const categoryCount = properties.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(categoryCount).map((key) => ({
    name: key,
    value: categoryCount[key],
  }));

  return (
    <div className="p-5">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm border border-gray-100  p-5 text-center text-gray-600 "
          >
            <h1 className="text-6xl font-extrabold">{s.estDoc}</h1>
            <p className="text-xl">{s.des}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col xl:flex-row w-full gap-6">
        {/* User Data Table Section */}

        <UserManagement />

        {/* Pie Chart Section */}
        <div className="xl:flex-1 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center min-h-[400px] p-5">
          <PropertyPieChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Overview;

/*
  const categoryCount = {};

  for (let i = 0; i < properties.length; i++) {
    const item = properties[i];
    const category = item.category;

    if (categoryCount[category] === undefined) {
      categoryCount[category] = 1;
    } else {
      categoryCount[category] += 1;
    }
  }

  console.log(categoryCount);

  */
