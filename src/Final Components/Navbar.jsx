import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Navbar = () => {
     const handleScroll = (id) => {
       const element = document.getElementById(id);
       if (element) {
         element.scrollIntoView({ behavior: "smooth" });
       }
     };
return (
  <>
    <nav className="bg-gray-50 h-28  w-screen shadow-lg shadow-blue-100 rounded-lg flex flex-row items-center justify-between px-20">
      <div className="flex flex-row items-center">
        <img
          src="/NavBar/book-courses-education-learning-school-study-svgrepo-com.svg"
          alt=""
          className="w-28"
        />
        <h1 className="font-semibold text-2xl">LMS-ELearning</h1>
      </div>
      <div className="flex flex-row gap-x-8">
        <button
          onClick={() => handleScroll("1")}
          className="text-lg hover:font-semibold hover:text-green-500"
        >
          Home
        </button>
        <button
          onClick={() => handleScroll("2")}
          className="text-lg hover:font-semibold hover:text-green-500"
        >
          Courses
        </button>
        <button
          onClick={() => handleScroll("3")}
          className="text-lg hover:font-semibold hover:text-green-500"
        >
          About
        </button>
        <button
          onClick={() => handleScroll("4")}
          className="text-lg hover:font-semibold hover:text-green-500"
        >
          Reviews
        </button>
        <Link
          to="/login"
          className="text-lg hover:font-semibold hover:text-green-500"
        >
          Login
        </Link>
      </div>
    </nav>
  </>
);};

export default Navbar;
