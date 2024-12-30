// import React, { useState, useEffect } from "react";
// import TutorDashNavBar from "../Final Components/TutorDashNavBar";
// import axios from "axios";

// const CreateCourses = () => {
//   const [courseData, setCourseData] = useState({
//     course_name: "",
//     sub_title: "",
//     price: "",
//     duration: "",
//     description: "",
//     zoomLink: "",
//     feedback: [],
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [courses, setCourses] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   // Fetch all courses to display
//   useEffect(() => {
//     axios
//       .get("/api/courses")
//       .then((response) => {
//         setCourses(response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching courses!", error);
//       });
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCourseData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       // Update the course
//       axios
//         .put(`/api/courses/${selectedCourse._id}`, courseData)
//         .then((response) => {
//           alert("Course updated successfully!");
//           setIsEditing(false);
//           setSelectedCourse(null);
//           setCourseData({
//             course_name: "",
//             sub_title: "",
//             price: "",
//             duration: "",
//             description: "",
//             zoomLink: "",
//             feedback: [],
//           });
//           setCourses((prevCourses) =>
//             prevCourses.map((course) =>
//               course._id === response.data._id ? response.data : course
//             )
//           );
//         })
//         .catch((error) => {
//           console.error("There was an error updating the course!", error);
//         });
//     } else {
//       // Create a new course
//       axios
//         .post("/api/courses", courseData)
//         .then((response) => {
//           alert("Course created successfully!");
//           setCourses((prevCourses) => [...prevCourses, response.data]);
//           setCourseData({
//             course_name: "",
//             sub_title: "",
//             price: "",
//             duration: "",
//             description: "",
//             zoomLink: "",
//             feedback: [],
//           });
//         })
//         .catch((error) => {
//           console.error("There was an error creating the course!", error);
//         });
//     }
//   };

//   const handleEdit = (course) => {
//     setCourseData({
//       course_name: course.course_name,
//       sub_title: course.sub_title,
//       price: course.price,
//       duration: course.duration,
//       description: course.description,
//       zoomLink: course.zoomLink,
//       feedback: course.feedback,
//     });
//     setIsEditing(true);
//     setSelectedCourse(course);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this course?")) {
//       axios
//         .delete(`/api/courses/${id}`)
//         .then(() => {
//           alert("Course deleted successfully!");
//           setCourses((prevCourses) =>
//             prevCourses.filter((course) => course._id !== id)
//           );
//         })
//         .catch((error) => {
//           console.error("There was an error deleting the course!", error);
//         });
//     }
//   };
//   return (
//     <>
//       <div className="flex flex-row">
//         <TutorDashNavBar />
//         <div className="bg-blue-50 w-5/6 h-screen rounded-r-lg flex flex-col justify-evenly px-14">
//           <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">
//               {isEditing ? "Edit Course" : "Create Course"}
//             </h1>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="course_name"
//                 value={courseData.course_name}
//                 onChange={handleInputChange}
//                 placeholder="Course Name"
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />

//               <input
//                 type="text"
//                 name="sub_title"
//                 value={courseData.sub_title}
//                 onChange={handleInputChange}
//                 placeholder="Sub Title"
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />

//               <input
//                 type="number"
//                 name="price"
//                 value={courseData.price}
//                 onChange={handleInputChange}
//                 placeholder="Price"
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />

//               <input
//                 type="number"
//                 name="duration"
//                 value={courseData.duration}
//                 onChange={handleInputChange}
//                 placeholder="Duration (in days)"
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />

//               <textarea
//                 name="description"
//                 value={courseData.description}
//                 onChange={handleInputChange}
//                 placeholder="Description"
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               ></textarea>

//               <input
//                 type="text"
//                 name="zoomLink"
//                 value={courseData.zoomLink}
//                 onChange={handleInputChange}
//                 placeholder="Zoom Link (optional)"
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />

//               <button
//                 type="submit"
//                 className="w-full p-2 bg-blue-500 text-white rounded-md"
//               >
//                 {isEditing ? "Update Course" : "Create Course"}
//               </button>
//             </form>

//             <div className="mt-8">
//               <h2 className="text-xl font-bold">Courses List</h2>
//               <ul className="space-y-4 mt-4">
//                 {courses.map((course) => (
//                   <li
//                     key={course._id}
//                     className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
//                   >
//                     <div>
//                       <h3 className="font-bold">{course.course_name}</h3>
//                       <p>{course.sub_title}</p>
//                     </div>
//                     <div className="space-x-2">
//                       <button
//                         onClick={() => handleEdit(course)}
//                         className="px-4 py-2 bg-yellow-500 text-white rounded-md"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(course._id)}
//                         className="px-4 py-2 bg-red-500 text-white rounded-md"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreateCourses;
import React, { useState, useEffect } from "react";
import TutorDashNavBar from "../Final Components/TutorDashNavBar";
import {
  createCourse,
  updateCourse,
  deleteCourse,
  getAllCourses,
} from "../services/api"; // Importing the necessary API functions

const CreateCourses = () => {
  const [courseData, setCourseData] = useState({
    course_name: "",
    sub_title: "",
    price: "",
    duration: "",
    description: "",
    // zoomLink: "",
    feedback: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Fetch all courses to display
  useEffect(() => {
    getAllCourses()
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.error("There was an error fetching courses!", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update the course
      updateCourse(selectedCourse._id, courseData)
        .then((response) => {
          alert("Course updated successfully!");
          setIsEditing(false);
          setSelectedCourse(null);
          setCourseData({
            course_name: "",
            sub_title: "",
            price: "",
            duration: "",
            description: "",
            // zoomLink: "",
            feedback: [],
          });
          setCourses((prevCourses) =>
            prevCourses.map((course) =>
              course._id === response._id ? response : course
            )
          );
        })
        .catch((error) => {
          console.error("There was an error updating the course!", error);
        });
    } else {
      // Create a new course
      createCourse(courseData)
        .then((response) => {
          alert("Course created successfully!");
          setCourses((prevCourses) => [...prevCourses, response]);
          setCourseData({
            course_name: "",
            sub_title: "",
            price: "",
            duration: "",
            description: "",
            // zoomLink: "",
            feedback: [],
          });
        })
        .catch((error) => {
          console.error("There was an error creating the course!", error);
        });
    }
  };

  const handleEdit = (course) => {
    setCourseData({
      course_name: course.course_name,
      sub_title: course.sub_title,
      price: course.price,
      duration: course.duration,
      description: course.description,
      //   zoomLink: course.zoomLink,
      feedback: course.feedback,
    });
    setIsEditing(true);
    setSelectedCourse(course);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      deleteCourse(id)
        .then(() => {
          alert("Course deleted successfully!");
          setCourses((prevCourses) =>
            prevCourses.filter((course) => course._id !== id)
          );
        })
        .catch((error) => {
          console.error("There was an error deleting the course!", error);
        });
    }
  };

  return (
    <>
      <div className="flex flex-row">
        <TutorDashNavBar />
        <div className="bg-blue-50 w-5/6 h-screen rounded-r-lg flex flex-col justify-evenly px-14">
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">
              {isEditing ? "Edit Course" : "Create Course"}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="course_name"
                value={courseData.course_name}
                onChange={handleInputChange}
                placeholder="Course Name"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />

              <input
                type="text"
                name="sub_title"
                value={courseData.sub_title}
                onChange={handleInputChange}
                placeholder="Sub Title"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />

              <input
                type="number"
                name="price"
                value={courseData.price}
                onChange={handleInputChange}
                placeholder="Price"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />

              <input
                type="number"
                name="duration"
                value={courseData.duration}
                onChange={handleInputChange}
                placeholder="Duration (in days)"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />

              <textarea
                name="description"
                value={courseData.description}
                onChange={handleInputChange}
                placeholder="Description"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
              {/* 
              <input
                type="text"
                name="zoomLink"
                value={courseData.zoomLink}
                onChange={handleInputChange}
                placeholder="Zoom Link (optional)"
                className="w-full p-2 border border-gray-300 rounded-md"
              /> */}

              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded-md"
              >
                {isEditing ? "Update Course" : "Create Course"}
              </button>
            </form>

            <div className="mt-8">
              <h2 className="text-xl font-bold">Courses List</h2>
              <ul className="space-y-4 mt-4">
                {courses.map((course) => (
                  <li
                    key={course._id}
                    className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-bold">{course.course_name}</h3>
                      <p>{course.sub_title}</p>
                    </div>
                    <div className="space-x-2">
                      <button
                        onClick={() => handleEdit(course)}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-md"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(course._id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCourses;
