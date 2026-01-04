import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";

import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();

  const {
    refetch,
    isLoading,
    data: users = [],
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  console.log(users);

  if (isLoading) {
    return <Loader />;
  }

  const updateAdminRole = (user, role, confirmText, suscessText) => {
    const roleInfo = { role: role };
    Swal.fire({
      title: "Are you sure?",
      text: confirmText,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, make ${role}!`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              title: "Updated!",
              text: suscessText,
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    const confirmText = `Are you sure you want to make ${user.name} an admin?`;
    const suscessText = `${user.name} is now an admin!`;

    updateAdminRole(user, "admin", confirmText, suscessText);
  };

  const handleRemoveAdmin = (user) => {
    const confirmText = `Are you sure you want to remove ${user.name} from admin?`;
    const suscessText = `${user.name} has been removed from admin.`;

    updateAdminRole(user, "user", confirmText, suscessText);
  };

  return (
    <div className="xl:flex-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gray-50/50 p-4 border-b border-gray-100 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">User Management</h1>
        <span className="badge badge-ghost font-medium">
          {users.length} Users Total
        </span>
      </div>

      <div className="overflow-x-auto p-2">
        <table className="table w-full border-separate border-spacing-y-2">
          <thead className="text-gray-500 uppercase text-xs">
            <tr>
              <th className="bg-transparent">SL</th>
              <th className="bg-transparent">User Info</th>
              <th className="bg-transparent">Role</th>
              <th className="bg-transparent">Joined Date</th>
              <th className="bg-transparent text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-gray-50 transition-colors group"
              >
                <td className="font-semibold text-gray-400">{index + 1}</td>
                <td>
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12 shadow-inner">
                        <img src={user.photoURL} alt={user.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-700">{user.name}</div>
                      <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {user?.country || "Bangladesh"}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      user.role === "admin"
                        ? "bg-red-100 text-red-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="text-sm text-gray-500">
                  {new Date(user.createdAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="text-center">
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="btn btn-circle btn-sm bg-rose-50 border-none text-rose-500 hover:bg-rose-500 hover:text-white transition-all shadow-sm"
                    >
                      <FiShieldOff size={16} />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-circle btn-sm bg-emerald-50 border-none text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
                    >
                      <FaUserShield size={16} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
