import React, { useState, useEffect } from "react";
import axios from "axios";
const BACKEND_BASE_URL = "https://monika-lms-bk.onrender.com/api";
const AdminDashboardPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editUserId, setEditUserId] = useState(null);
  const [editUserData, setEditUserData] = useState({});

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${BACKEND_BASE_URL}/auth/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      setUsers(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setIsLoading(false);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`${BACKEND_BASE_URL}/auth/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
      alert("User Deleted Successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = (user) => {
    setEditUserId(user._id);
    setEditUserData(user);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(
        `${BACKEND_BASE_URL}/auth/users/${editUserId}`,
        editUserData
      );
      setUsers(
        users.map((user) =>
          user._id === editUserId ? { ...user, ...editUserData } : user
        )
      );
      setEditUserId(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUserData({ ...editUserData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      {isLoading ? (
        <div className="text-center">Loading users...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="px-4 py-2">{user._id}</td>
                  <td className="px-4 py-2">
                    {editUserId === user._id ? (
                      <input
                        type="text"
                        name="username"
                        value={editUserData.username}
                        onChange={handleInputChange}
                        className="border p-2 rounded"
                      />
                    ) : (
                      user.username
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editUserId === user._id ? (
                      <input
                        type="email"
                        name="email"
                        value={editUserData.email}
                        onChange={handleInputChange}
                        className="border p-2 rounded"
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editUserId === user._id ? (
                      <button
                        onClick={handleSaveEdit}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(user)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboardPage;
