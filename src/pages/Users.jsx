import axios from "axios";
import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import Wallet from "./Wallet";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";

const User = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [commission, setCommission] = useState("");
  const [data, setData] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [viewingUser, setViewingUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getAdminUser");
      if (response.data.status === true) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (editingUser) {
        res = await axios.put(
          `http://localhost:8000/updateAdminUser/${editingUser._id}`,
          {
            userName,
            password,
            commission,
          }
        );
      } else {
        res = await axios.post("http://localhost:8000/createAdminUser", {
          userName,
          password,
          commission,
        });
      }

      if (res.data.status === true) {
        alert(
          editingUser ? "User updated successfully" : "User added successfully"
        );
        fetchData(); // Refresh user list after adding/updating a user
        setUserName("");
        setPassword("");
        setCommission("");
        setEditingUser(null);
      }
    } catch (error) {
      console.log("Error adding/updating user:", error);
    }
  };

  const handleEdit = (user) => {
    setUserName(user.userName);
    setPassword(user.password);
    setCommission(user.commission);
    setEditingUser(user);
  };

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/deleteAdminUser/${userId}`
      );
      if (response.data.status === true) {
        alert("User deleted successfully");
        setData(data.filter((user) => user._id !== userId)); // Update state to remove deleted user
      }
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  const handleView = (user) => {
    setViewingUser(user);
  };

  const closeModal = () => {
    setViewingUser(null);
  };

  const toggleUserStatus = async (userId, newStatus) => {
    try {
      await axios.put(`http://localhost:8000/updateAdminUser/${userId}`, {
        status: newStatus,
      });

      setData((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, status: newStatus } : user
        )
      );
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  return (
    <div className="container mx-auto mt-2 p-5">
      <div>
        <div className="p-4 border rounded">
          <h1 className="text-2xl font-semibold">
            {editingUser ? "Edit User" : "Add User"}
          </h1>
          <form onSubmit={handleSubmit} className="">
            <div className="grid grid-cols-2 gap-8">
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Commission</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded"
                  value={commission}
                  onChange={(e) => setCommission(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded"
            >
              {editingUser ? "Update" : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <div className="border border-collapse border-gray-200  mt-5">
        <h1 className="mt-2 p-3 text-2xl font-semibold">User List</h1>
        <table className="w-full table-auto mt-2 ">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Sr. No</th>
              <th className="px-4 py-2 border">UserId</th>
              <th className="px-4 py-2 border">User Name</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">%</th>
              <th className="px-4 py-2 border">Commission</th>
              <th className="px-4 py-2 border">Wallet</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((user, index) => (
                <React.Fragment key={user._id}>
                  <tr className="text-center">
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">{user._id}</td>
                    <td className="px-4 py-2 border">{user.userName}</td>
                    <td className="px-4 py-2 border">
                      <Switch
                        onChange={() =>
                          toggleUserStatus(user._id, !user.status)
                        }
                        checked={user.status === true} // Ensure status is explicitly checked against true
                        offColor="#f56565"
                        onColor="#3B82F6"
                        uncheckedIcon={false}
                        checkedIcon={false}
                        height={20}
                        width={40}
                        boxShadow="10"
                      />
                    </td>
                    <td className="px-4 py-2 border">{user.commission}</td>
                    <td className="px-4 py-2 border">
                      {user.percentage || "0.00"}
                    </td>
                    <td className="px-4 py-2 border">
                      <Wallet value={user.wallet} userId={user._id} />
                    </td>
                    <td className="px-4 py-2 border">
                      <button
                        className="mx-2 text-green-500 border border-green-500 px-2 py-1"
                        onClick={() => handleView(user)}
                      >
                        <GrView />
                      </button>
                      <button
                        className="mx-2 text-blue-500 border border-blue-500 px-2 py-1"
                        onClick={() => handleEdit(user)}
                      >
                        <FaRegEdit />
                      </button>
                      <button
                        className="mx-2 text-red-500 border border-red-500 px-2 py-1"
                        onClick={() => handleDelete(user._id)}
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </td>
                  </tr>
                  {viewingUser?._id === user._id && (
                    <tr>
                      <td colSpan="8" className="px-4 py-2 border bg-gray-100">
                        <div className="p-4">
                          <h2 className="text-xl font-semibold">
                            User Details
                          </h2>
                          <p>
                            <strong>Username:</strong> {user.userName}
                          </p>
                          <p>
                            <strong>Password:</strong> {user.password}
                          </p>
                          <p>
                            <strong>Commission:</strong> {user.commission}
                          </p>
                          <p>
                            <strong>Status:</strong>{" "}
                            {user.status ? "Active" : "Inactive"}
                          </p>
                          <p>
                            <strong>Wallet:</strong> {user.wallet}
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="px-4 py-2 text-center border">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {viewingUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg w-1/2">
            <h2 className="text-xl font-semibold mb-4">User Details</h2>
            <form>
              <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                  <label className="block text-gray-700">Username:</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded"
                    value={viewingUser.userName}
                    readOnly // Ensure the username is read-only
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label className="block text-gray-700">Password:</label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border rounded"
                    value={viewingUser.password}
                    readOnly // Ensure the password is read-only
                  />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                  <label className="block text-gray-700">Commission:</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded"
                    value={viewingUser.commission}
                    readOnly // Ensure the commission is read-only
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label className="block text-gray-700">Status:</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded"
                    value={viewingUser.status ? "Active" : "Inactive"}
                    readOnly // Ensure the status is read-only
                  />
                </div>
              </div>
              <div className="mb-4 w-1/2 ">
                <label className="block text-gray-700">Wallet:</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded"
                  value={viewingUser.wallet}
                  readOnly // Ensure the wallet is read-only
                />
              </div>
              <button
                className="mt-4 px-4 py-2 text-white bg-red-500 rounded"
                onClick={closeModal}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
