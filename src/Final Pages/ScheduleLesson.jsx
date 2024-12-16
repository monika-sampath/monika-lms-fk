import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { scheduleLesson } from "../services/api";

import TutorDashNavBar from "../Final Components/TutorDashNavBar";

const ScheduleLesson = () => {
  const { tutorId } = useParams(); // Get tutorId from URL params
  const navigate = useNavigate();
  const [lessonDetails, setLessonDetails] = useState({
    date: "",
    time: "",
    tutorId: tutorId,
  });

  const handleChange = (e) => {
    setLessonDetails({
      ...lessonDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await scheduleLesson(lessonDetails);
      
      navigate("/dashboard"); // Redirect to Dashboard after successful scheduling
    } catch (error) {
     
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-row">
        <TutorDashNavBar />
        <div className="bg-blue-50 w-5/6  rounded-r-lg flex flex-col py-12 px-14">
          <p className="text-3xl font-semibold pb-8">Schedule a Lesson</p>
          <div className="p-4 pb-16">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded shadow-md"
            >
              <label className="block mb-4">
                Date
                <input
                  type="date"
                  name="date"
                  value={lessonDetails.date}
                  onChange={handleChange}
                  required
                  className="border p-2 mt-2 w-full"
                />
              </label>
              <label className="block mb-4">
                Time
                <input
                  type="time"
                  name="time"
                  value={lessonDetails.time}
                  onChange={handleChange}
                  required
                  className="border p-2 mt-2 w-full"
                />
              </label>
              <label className="block mb-4">
                Batch.No
                <input
                  type="text"
                  name="text"
                  value={lessonDetails.BatchNo}
                  onChange={handleChange}
                  required
                  className="border p-2 mt-2 w-full"
                />
              </label>
              <label className="block mb-4">
                Topic Details
                <input
                  type="text"
                  name="text"
                  value={lessonDetails.Topics}
                  onChange={handleChange}
                  required
                  className="border p-2 mt-2 w-full"
                />
              </label>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 w-full"
              >
                Schedule Lesson
              </button>
            </form>
          </div>
          <div className="flex flex-row gap-x-10 border-b-2">
            <button className="text-xl underline decoration-gray-100 text-gray-600  underline-offset-8 hover:decoration-green-500  hover:text-green-500 hover:underline hover:underline-offset-8">
              In progress
            </button>
            <button className="text-xl underline decoration-gray-100 text-gray-600 underline-offset-8 hover:decoration-green-500 hover:text-green-500 hover:underline hover:underline-offset-8">
              Completed
            </button>
            <button className="text-xl underline decoration-gray-100 text-gray-600 underline-offset-8 hover:decoration-green-500 hover:text-green-500 hover:underline hover:underline-offset-8">
              All
            </button>
          </div>
          <div className="flex flex-col gap-y-5 py-24">
            <p>Batch W4-fsd-001 - Learning Path</p>
            <div className="flex flex-row gap-x-5">
              <div className="w-1/4 h-60 rounded-lg bg-white border flex flex-col justify-center pr-3 pl-5 shadow-md">
                <p className="text-xl font-semibold pb-8 flex flex-row  items-center">
                  <img
                    className="h-16"
                    src="/studentDashboard/dashboard-svgrepo-com.svg"
                    alt=""
                  />
                  FullStack Development
                </p>
                <p>Topics: </p>
                <p className="text-sm text-gray-500">
                  SQL,CSS,DSA,HTML,Javascript
                </p>
              </div>
              <div className="w-1/4  h-60 rounded-lg bg-white border flex flex-col  justify-center pr-3 pl-5 shadow-md">
                <p className="text-xl font-semibold pb-8 flex flex-row  items-center">
                  <img
                    className="h-16"
                    src="/studentDashboard/dashboard-svgrepo-com.svg"
                    alt=""
                  />
                  Python
                </p>
                <p>Topics: </p>
                <p className="text-sm text-gray-500">Mongo,CSS,HTML,Python</p>
              </div>
              <div className="w-1/4  h-60 rounded-lg bg-white border flex flex-col justify-center pr-3 pl-5 shadow-md">
                <p className="text-xl font-semibold pb-8 flex flex-row  items-center">
                  <img
                    className="h-16"
                    src="/studentDashboard/dashboard-svgrepo-com.svg"
                    alt=""
                  />
                  Mathematics
                </p>
                <p>Topics: </p>
                <p className="text-sm text-gray-500">
                  Concept,Formulas,Problems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleLesson;
