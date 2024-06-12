import axios from "axios";
import React, { useEffect, useState } from "react";
import Switch from "react-switch";

const Distributor = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [idLimit, setIdLimit] = useState("");

  const [commission, setCommission] = useState("");
  const [data, setData] = useState([]);

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
      console.log("error", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/createAdminUser", {
        userName,
        password,
        commission,
      });
      alert("User added successfully");

      if (res.data.status === true) {
        fetchData();
        setUserName("");
        setPassword("");
        setCommission("");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const toggleUserStatus = async (userId, newStatus) => {
    try {
      await axios.put("http://localhost:8000/updateAdminUser", {
        userId,
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
    <div className="container mx-auto mt-8">
      <div>
        <div className="p-4 border rounded">
          <h1 className="text-2xl font-semibold">Add User</h1>
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
                   placeholder="Enter UserName"
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
                   placeholder="Enter Password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">ID Limit</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded"
                  value={password}
                  onChange={(e) => setIdLimit(e.target.value)}
                  placeholder="Enter ID Limit"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Commission</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded"
                  value={commission}
                  onChange={(e) => setCommission(e.target.value)}
                   placeholder="Enter Commission"
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="">
        <h1 className="mt-8 text-2xl font-semibold">User List</h1>
        <table className="w-full border border-collapse border-gray-200 table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Sr. No</th>
              <th className="px-4 py-2 border">UserId</th>
              <th className="px-4 py-2 border">User Name</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">%</th>
              <th className="px-4 py-2 border">Commission</th>
              <th className="px-4 py-2 border">Wallet</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((user, index) => (
                <tr key={user._id} className="text-center">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{user._id}</td>
                  <td className="px-4 py-2 border">{user.userName}</td>
                  <td className="px-4 py-2 border">
                    <Switch
                      onChange={() => toggleUserStatus(user._id, !user.status)}
                      checked={user.status}
                      offColor="#f56565"
                      onColor="#3B82F6"
                      uncheckedIcon={false}
                      checkedIcon={false}
                      height={20}
                      width={40}
                      boxShadow="10"
                    />
                  </td>
                  <td className="px-4 py-2 border">{user.percentage}</td>
                  <td className="px-4 py-2 border">{user.commission}</td>
                  <td className="px-4 py-2 border">{user.wallet}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-2 text-center border">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Distributor;
