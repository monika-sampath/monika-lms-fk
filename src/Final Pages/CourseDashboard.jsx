// import React from "react";
// import StuDashNavBar from "../Final Components/StuDashNavBar";

// const CourseDashboard = () => {
//   return (
//     <>
//       <div className="flex flex-row">
//         <StuDashNavBar />
//         <div className="bg-blue-50 w-5/6  rounded-r-lg flex flex-col py-12 px-14"></div>
//       </div>
//     </>
//   );
// };

// export default CourseDashboard;

import React, { useEffect, useState } from "react";
import { getAllCourses } from "../services/api";
import Card from "../Final Components/Card";
import StuDashNavBar from "../Final Components/StuDashNavBar";
import { Link } from "react-router-dom";

const CourseDashboard = ({ addToCart, cart }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getAllCourses();
        setCourses(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  if (loading)
    return <p className="text-center mt-10 text-lg">Loading courses...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-lg text-red-500">
        Error fetching courses: {error}
      </p>
    );

  return (
    <>
      <div className="flex flex-row">
        <StuDashNavBar />

        <div className="bg-blue-50 w-5/6  rounded-r-lg flex flex-col py-12 px-14">
          {/* <div className="p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Available Courses
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course._id} course={course} addToCart={addToCart} />
              ))}
            </div>
          </div> */}
          <div className="p-6">
            {/* Header with Cart Icon */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">
                Available Courses
              </h1>
              <Link to="/cart" className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-800 hover:text-blue-500 transition duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h18l-2 14H5L3 3z"
                  />
                  <circle cx="9" cy="20" r="1" />
                  <circle cx="15" cy="20" r="1" />
                </svg>
                {totalCartItems > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-sm rounded-full px-2 py-1">
                    {totalCartItems}
                  </span>
                )}
              </Link>
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course._id} course={course} addToCart={addToCart} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDashboard;
