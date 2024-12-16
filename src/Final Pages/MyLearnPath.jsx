import React from "react";
import StuDashNavBar from "../Final Components/StuDashNavBar";

const MyLearnPath = () => {
  return (
    <>
      <div className="flex flex-row">
        <StuDashNavBar />
        <div className="bg-blue-50 w-5/6  rounded-r-lg flex flex-col py-12 px-14">
          <p className="text-3xl font-semibold pb-28">My Learning</p>
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
            <p>My Learning Path</p>
            <div>
              <div className="w-60 h-60 rounded-lg bg-white border flex flex-col justify-center pr-3 pl-5 shadow-md">
                <p className="text-xl font-semibold pb-8 flex flex-row justify-center items-center">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyLearnPath;
