import React from "react";
import { useEffect, useState } from "react";
import { profileDetail } from "../services/api";
import { useLocation } from "react-router-dom";

function StudentDashboard() {
  const location = useLocation();
  const { userId } = location.state || {}; // Retrieve userId passed via state
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
      <div className="bg-blue-50 py-10 gap-y-10 w-5/6  rounded-r-lg flex flex-col justify-evenly px-14">
        <div className="flex flex-row gap-3 ">
          <div className="h-72 w-1/5 bg-white rounded-2xl shadow-lg shadow-gray-200 flex flex-col justify-evenly items-center py-5">
            <p className="text-xl font-medium text-center">My Profile</p>
            <img
              className="w-40"
              src="studentDashboard/145857007_307ce493-b254-4b2d-8ba4-d12c080d6651.svg"
              alt=""
            />
            <p>{userId}</p>
            <button className="text-center text-xl font-medium">
              Edit Profile
            </button>
          </div>
          <div className="h-72 w-4/5 px-12 bg-white flex flex-col rounded-2xl shadow-lg shadow-gray-200 justify-evenly items-start">
            <p className="text-3xl font-medium">Welcome to your Dashboard!</p>
            <p className="text-lg ">
              Research shows that setting specific goals boosts effectiveness
              and seccess. We suggest you start by taking a moment to think
              about what you want to achieve and set a clear, actionable goal.
            </p>
            <button className="text-xl bg-green-500 text-white px-4 py-3 rounded-2xl">
              Create a Learning Path
            </button>
          </div>
        </div>
        <div className="py-14 flex flex-col justify-around px-16 w-full bg-white rounded-2xl shadow-lg shadow-gray-200">
          <div className="flex flex-row gap-x-5 pb-10">
            <p className="text-3xl font-medium pr-10">My Learning Path </p>
            <button className="text-xl border-2 px-3 py-1 rounded-xl hover:bg-gray-50">
              Create New
            </button>
          </div>
          <div className="flex flex-col gap-y-5 py-3">
            <p className="text-xl">Full Stack Development</p>
            <div className="w-96 h-2 bg-green-50 border-2 border-green-500 rounded-full py-2 flex justify-around items-center">
              0%
            </div>
          </div>
          <div className="flex flex-col gap-y-5 py-3">
            <p className="text-xl">Python </p>
            <div className="w-96 h-2 bg-green-50 border-2 border-green-500 rounded-full py-2 flex justify-around items-center">
              0%
            </div>
          </div>
          <div className="flex flex-col gap-y-5 py-3">
            <p className="text-xl">Mathematics(Algebra)</p>
            <div className="w-96 h-2 bg-green-50 border-2 border-green-500 rounded-full py-2 flex justify-around items-center">
              0%
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
