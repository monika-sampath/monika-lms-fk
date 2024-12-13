import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api"; // Assuming you have an API service for login
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // Initialize the navigate hook
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData); // Call API to log in
      // Assuming the response contains the token
      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token); // Store the token in localStorage
        alert("Login successful!");
        navigate("/studentDashboard"); // Redirect to Dashboard after successful login
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="p-4 bg-blue-100 h-screen flex flex-col justify-center items-center">
      <div className="bg-white h-3/4 w-3/4 rounded-2xl  flex flex-row divide-x-2 shadow-md">
        <div className="h-full w-1/2  flex justify-around ">
          <img
            className="w-3/5"
            src="./public/Login Page/11683784_4795438.svg"
            alt=""
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className=" p-6 rounded gap-5  h-full w-1/2 content-center flex flex-col justify-center items-center"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <label className=" mb-4 w-4/5">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border p-2 mt-2 w-full rounded-lg"
            />
          </label>
          <label className=" mb-4 w-4/5">
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="border p-2 mt-2 w-full rounded-lg"
            />
          </label>
          <p>
            if you dont have an account, Please{" "}
            <Link to="/register" className="text-blue-500 hover:text-blue-600">
              Register
            </Link>{" "}
          </p>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 w-1/4 rounded-xl hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
