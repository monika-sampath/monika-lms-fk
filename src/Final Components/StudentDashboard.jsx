import React from "react";

function StudentDashboard() {
  return (
    <>
      {/* <nav className="h-16 bg-gray-50 shadow-lg rounded-lg flex flex-row justify-between px-20 mb-10">
        <button className="text-2xl font-medium hover:text-green-500 hover:underline hover:underline-offset-2">
          Home
        </button>
        <button className="text-2xl font-medium hover:text-red-500 hover:underline hover:underline-offset-2">
          Logout
        </button>
      </nav> */}

        {/* <div className="bg-white w-1/6 rounded-l-lg flex flex-col items-start pl-9 pt-10 gap-6">
          <button className="text-xl tracking-wider flex flex-row gap-2 hover:text-green-500">
            <img
              className="w-8"
              src="./public/studentDashboard/dashboard-svgrepo-com.svg"
              alt=""
            />
            Dashboard
          </button>
          <button className="text-xl tracking-wider flex flex-row gap-2 hover:text-green-500">
            <img
              className="w-8"
              src="./public/studentDashboard/experience-svgrepo-com.svg"
              alt=""
            />
            My Learning
          </button>
          <button className="text-xl tracking-wider flex flex-row gap-2 hover:text-green-500">
            <img
              className="w-8"
              src="./public/studentDashboard/teacher-pointing-at-blackboard-svgrepo-com.svg"
              alt=""
            />
            Tutors Details
          </button>
          <button className="text-xl tracking-wider flex flex-row gap-2 hover:text-green-500">
            <img
              className="w-8"
              src="./public/studentDashboard/i-exam-multiple-choice-svgrepo-com.svg"
              alt=""
            />
            Exams
          </button>
          <button className="text-xl tracking-wider flex flex-row gap-2 hover:text-green-500">
            <img
              className="w-8"
              src="./public/studentDashboard/diploma-certificate-svgrepo-com.svg"
              alt=""
            />
            Certificates
          </button>
        </div> */}
        <div className="bg-blue-50 w-5/6 h-screen rounded-r-lg flex flex-col justify-evenly px-14">
          <div className="flex flex-row gap-3 ">
            <div className="h-72 w-1/4 bg-white rounded-2xl shadow-lg shadow-gray-200">
              my profile
            </div>
            <div className="h-72 w-3/4 bg-white rounded-2xl shadow-lg shadow-gray-200">
              side bar
            </div>
          </div>
          <div className="h-72 w-full bg-white rounded-2xl shadow-lg shadow-gray-200">
            my learning path
          </div>
        </div>

    </>
  );
}

export default StudentDashboard;
