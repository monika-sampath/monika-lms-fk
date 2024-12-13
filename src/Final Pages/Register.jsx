import React, { useState } from "react";
import { registerUser } from "../services/api";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
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
      console.log("User registered successfully:", response);
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
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border p-2 w-full mb-4 rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2 w-full mb-4 rounded-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-2 w-full mb-4 rounded-lg"
        />
        <select
          name="role"
          onChange={handleChange}
          className="border p-2 w-full mb-4 rounded-lg"
        >
          <option value="student">Student</option>
          <option value="tutor">Tutor</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded-lg"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
