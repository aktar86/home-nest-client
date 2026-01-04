import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { isLoading: roleLoading, data: role = "user" } = useQuery({
    queryKey: ["user-role", user?.email],
    enabled: !loading && !!user?.email,

    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data?.role;
    },
  });

  console.log(role);

  return { role, roleLoading };
};

export default useRole;
