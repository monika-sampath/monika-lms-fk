import React, { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "student",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(form);
      alert("Register successful!");
      console.log("User registered successfully:", response);
      navigate("/login");
      // Handle successful registration (e.g., navigate or show a success message)
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle error (e.g., display error message)
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await registerUser(form);
  //     alert(data.message);
  //   } catch (error) {
  //     alert(error.response.data.message || "Error occurred");
  //   }
  // };

  return (
    <div className="p-4 flex items-center justify-center flex-col  h-screen bg-blue-100">
      <div className="bg-white h-5/6 w-3/4 rounded-2xl flex flex-row divide-x-2 shadow-md">
        <div className="h-full w-1/2  flex justify-around ">
          <img
            className="w-4/5"
            src="/Login Page/20824341_6368590.svg"
            alt=""
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className=" px-6 py-10 gap-3  h-full w-1/2 content-center flex flex-col justify-center items-center"
        >
          <h2 className="text-2xl font-bold text-center">Register</h2>
          <label className=" mb-4 w-4/5">
            Name:
            <input
              type="text"
              name="username"
              placeholder="Name"
              onChange={handleChange}
              className="border p-2 w-full  rounded-lg"
            />
          </label>
          <label className=" mb-4 w-4/5">
            Email:
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="border p-2 w-full  rounded-lg"
            />
          </label>
          <label className=" mb-4 w-4/5">
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="border p-2 w-full rounded-lg"
            />
          </label>
          <label className=" mb-4 w-4/5">
            Role
            <select
              name="role"
              onChange={handleChange}
              className="border p-2 w-full rounded-lg"
            >
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
            </select>
          </label>
          <p>
            if you already have an account, Please{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-600">
              Login
            </Link>{" "}
          </p>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 w-1/4 rounded-xl hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
