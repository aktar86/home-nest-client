import axios from "axios";
import React from "react";

const axiosSecure = axios.create({
  baseUrl: "https://home-nest-server-api.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
