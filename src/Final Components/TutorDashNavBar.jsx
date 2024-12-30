import React from "react";
import { Link } from "react-router-dom";

const TutorDashNavBar = () => {
  return (
    <>
      <div className="bg-white w-1/6 h-screen rounded-l-lg flex flex-col items-start pl-9 pt-10 gap-6">
        <Link
          to="/tutorDashboard"
          className="text-xl tracking-wider flex flex-row gap-2 hover:text-green-500"
        >
          <img
            className="w-8 "
            src="/studentDashboard/dashboard-svgrepo-com.svg"
            alt=""
          />
          Dashboard
        </Link>
        <Link
          to="/turortDashboard/scheduleLesson"
          className="text-xl tracking-wider flex flex-row gap-2 hover:text-green-500"
        >
          <img
            className="w-8"
            src="/studentDashboard/experience-svgrepo-com.svg"
            alt=""
          />
          Schedule Lesson
        </Link>
        <Link
          to="/turortDashboard/createCourses"
          className="text-xl tracking-wider flex flex-row gap-2 hover:text-green-500"
        >
          <img
            className="w-8"
            src="/studentDashboard/teacher-pointing-at-blackboard-svgrepo-com.svg"
            alt=""
          />
          Create Courses
        </Link>
        <button className="text-xl tracking-wider flex flex-row gap-2 hover:text-green-500">
          <img
            className="w-8"
            src="/studentDashboard/i-exam-multiple-choice-svgrepo-com.svg"
            alt=""
          />
          Exams
        </button>
        <button className="text-xl tracking-wider flex flex-row gap-2 hover:text-green-500">
          <img
            className="w-8"
            src="/studentDashboard/diploma-certificate-svgrepo-com.svg"
            alt=""
          />
          Reviews
        </button>
      </div>
    </>
  );
};

export default TutorDashNavBar;
