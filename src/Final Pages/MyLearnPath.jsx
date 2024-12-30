// import React from "react";
// import StuDashNavBar from "../Final Components/StuDashNavBar";
// import { useLocation, useNavigate } from "react-router-dom";

// const MyLearnPath = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Get the enrolled course from the navigation state
//   const enrolledCourse = location.state?.enrolledCourse;

//   // if (!enrolledCourse) {
//   //   return <h1>No courses enrolled yet!</h1>;
//   // }

//   const handleStartCourse = () => {
//     // Navigate to the course content or learning page
//     navigate(`/courses/${enrolledCourse.courseId}`);
//   };
//   return (
//     <>
//       <div className="flex flex-row">
//         <StuDashNavBar />
//         <div className="bg-blue-50 w-5/6  rounded-r-lg flex flex-col py-12 px-14">
//           <p className="text-3xl font-semibold pb-28">My Learning</p>
//           <div className="flex flex-row gap-x-10 border-b-2">
//             <button className="text-xl underline decoration-gray-100 text-gray-600  underline-offset-8 hover:decoration-green-500  hover:text-green-500 hover:underline hover:underline-offset-8">
//               In progress
//             </button>
//             <button className="text-xl underline decoration-gray-100 text-gray-600 underline-offset-8 hover:decoration-green-500 hover:text-green-500 hover:underline hover:underline-offset-8">
//               Completed
//             </button>
//             <button className="text-xl underline decoration-gray-100 text-gray-600 underline-offset-8 hover:decoration-green-500 hover:text-green-500 hover:underline hover:underline-offset-8">
//               All
//             </button>
//           </div>
//           <div className="flex flex-col gap-y-5 py-24">
//             <p>My Learning Path</p>
//             <div>
//               <div className="w-60 h-60 rounded-lg bg-white border flex flex-col justify-center pr-3 pl-5 shadow-md">
//                 <p className="text-xl font-semibold pb-8 flex flex-row justify-center items-center">
//                   <img
//                     className="h-16"
//                     src="/studentDashboard/dashboard-svgrepo-com.svg"
//                     alt=""
//                   />
//                   FullStack Development
//                 </p>
//                 <p>Topics: </p>
//                 <p className="text-sm text-gray-500">
//                   SQL,CSS,DSA,HTML,Javascript
//                 </p>
//               </div>
//             </div>
//             <div className="w-60 h-60 rounded-lg bg-white border flex flex-col justify-center pr-3 pl-5 shadow-md">
//               <h2>{enrolledCourse.courseTitle}</h2>
//               <p>{enrolledCourse.courseDescription}</p>
//               <button onClick={handleStartCourse}>Start Course</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyLearnPath;

import React, { useState, useEffect } from "react";
import StuDashNavBar from "../Final Components/StuDashNavBar";
import { useLocation, useNavigate } from "react-router-dom";

const MyLearnPath = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the enrolled course and scheduled class details from the navigation state
  // const enrolledCourse = location.state?.enrolledCourse || "monika course 01";
  // const scheduledClass = location.state?.scheduledClass || "monika course 02";

  const [enrolledCourse, setEnrolledCourse] = useState(null);
  const [scheduledClass, setScheduledClass] = useState(null);

  useEffect(() => {
    // Fetch the enrolled course from localStorage
    const storedCourse = localStorage.getItem("enrolledCourse");
    if (storedCourse) {
      setEnrolledCourse(JSON.parse(storedCourse));
    }
    console.log("Useeffects for MylearnPath", storedCourse);
    const storedClasses = localStorage.getItem("scheduledClass");
    if (storedClasses) {
      setScheduledClass(JSON.parse(storedClasses));
    }
    console.log("Useeffects for MylearnPath 1", storedClasses);
  }, []);

  //console.log("Useeffects for MylearnPath", storedClasses);

  const handleStartCourse = () => {
    // Navigate to the course content or learning page
    // navigate(`/courses/${enrolledCourse.courseId}`);
    if (enrolledCourse) {
      navigate(`/courses/${enrolledCourse.courseIds}`);
    }
  };

  const handleReschedule = () => {
    // Navigate to the reschedule page or handle rescheduling logic
    navigate("/reschedule", { state: { scheduledClass } });
  };

  const handleCancel = () => {
    // Handle canceling the scheduled class
    alert("Scheduled class has been canceled.");
    // You can also update the state or send a request to the backend here
  };

  return (
    <>
      <div className="flex flex-row">
        <StuDashNavBar />
        <div className="bg-blue-50 w-5/6 rounded-r-lg flex flex-col py-12 px-14">
          <p className="text-3xl font-semibold pb-28">My Learning</p>
          <div className="flex flex-row gap-x-10 border-b-2">
            <button className="text-xl underline decoration-gray-100 text-gray-600 underline-offset-8 hover:decoration-green-500 hover:text-green-500 hover:underline hover:underline-offset-8">
              In progress
            </button>
            <button className="text-xl underline decoration-gray-100 text-gray-600 underline-offset-8 hover:decoration-green-500 hover:text-green-500 hover:underline hover:underline-offset-8">
              Completed
            </button>
            <button className="text-xl underline decoration-gray-100 text-gray-600 underline-offset-8 hover:decoration-green-500 hover:text-green-500 hover:underline hover:underline-offset-8">
              All
            </button>
          </div>

          {/* Scheduled Classes Section */}
          <div className="py-10">
            <h2 className="text-2xl font-bold mb-6">Scheduled Classes</h2>
            {scheduledClass ? (
              <div className="w-full bg-white border rounded-lg shadow-md p-6 mb-8">
                <p className="text-xl font-semibold mb-4">
                  Tutor: {scheduledClass.tutorName}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Date:</span>{" "}
                  {scheduledClass.date}
                </p>
                <p className="mb-4">
                  <span className="font-semibold">Time:</span>{" "}
                  {scheduledClass.time}
                </p>
                <div className="flex gap-4">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                    onClick={handleReschedule}
                  >
                    Reschedule
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">
                No scheduled classes at the moment.
              </p>
            )}
          </div>

          {/* Enrolled Course Section */}
          <div className="py-10">
            <h2 className="text-2xl font-bold mb-6">My Learning Path</h2>
            {enrolledCourse ? (
              <div className="w-60 h-60 rounded-lg bg-white border flex flex-col justify-center pr-3 pl-5 shadow-md">
                <h2 className="text-xl font-semibold mb-4">
                  {enrolledCourse.courseTitle}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {enrolledCourse.courseDescription}
                </p>
                <button
                  onClick={handleStartCourse}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Start Course
                </button>
              </div>
            ) : (
              <p className="text-gray-500">No courses enrolled yet!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyLearnPath;
