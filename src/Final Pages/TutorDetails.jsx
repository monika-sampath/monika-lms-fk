import React, { useState, useEffect } from "react";
import StuDashNavBar from "../Final Components/StuDashNavBar";
import { getTutors } from "../services/api";
import { Link } from "react-router-dom";
import axios from "axios";

const TutorDetails = () => {
  const [tutors, setTutors] = useState([]);
  const [error, setError] = useState(null); // State to hold error messages
  const [loading, setLoading] = useState(true); // State to show loading indicator

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const tutors = await getTutors();
        console.log("test-1", tutors);
        setTutors(tutors); // Assuming the tutors' data is in the 'tutors' field
      } catch (error) {
        setError("Failed to fetch tutors. Please try again.");
        console.error("Error fetching tutors:", error);
      } finally {
        setLoading(false); // Hide loading after data fetching is complete
      }
    };
    fetchTutors();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>; // Show loading message while data is being fetched
  // }

  // if (error) {
  //   return <div>{error}</div>; // Show error message if the API call fails
  // }
  // console.log("test-2",tutors);

  return (
    <div className="flex flex-row">
      <StuDashNavBar />
      <div className="bg-blue-50 w-5/6 h-screen rounded-r-lg flex flex-col justify-evenly px-14">
        <div><p className="text-center font-semibold text-3xl">Expand Your Career <span className="text-blue-500">Opportunity</span> With Help of Our Tutors</p></div>
        <div className="overflow-x-auto p-4">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Hourly Rate
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Experience
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Ratings
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {tutors && tutors.length > 0 ? (
                tutors.map((tutor) => (
                  <tr key={tutor.id} className="hover:bg-gray-50 border-t">
                    <td className="px-6 py-3 text-sm text-gray-800">
                      {tutor.name}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-800">
                      {tutor.subjects && tutor.subjects.length > 0
                        ? tutor.subjects.join(", ")
                        : "No subjects listed"}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-800">
                      ${tutor.hourlyRate}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-800">
                      {tutor.experience} years
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-800">
                      {tutor.rating}
                    </td>
                    <td className="px-6 py-3 text-sm">
                      <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => alert("View tutor details")}
                      >
                        Schedule Class
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-3 text-sm text-gray-500 text-center"
                  >
                    No tutors available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;

// const TutorDetails = () => {
//   const [tutors, setTutors] = useState([]); // State to hold the tutor list
//   const [error, setError] = useState(null); // State to handle errors
//   const [loading, setLoading] = useState(true); // State for loading indicator

//   // Fetch the user list from API
//   useEffect(() => {
//     const fetchTutors = async () => {
//       try {
//         const response = await axios.get(
//           "http://monika-lms-bk.onrender.com/api/tutors"
//         );
//         // Filter users where role is 'tutor'
//         const filteredTutors = response.data.filter(
//           (user) => user.role === "tutor"
//         );
//         setTutors(filteredTutors);
//       } catch (err) {
//         setError("Failed to fetch tutors.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTutors();
//   }, []);

//   // Render the UI
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h2>Tutor List</h2>
//       {tutors.length > 0 ? (
//         <ul>
//           {tutors.map((tutor) => (
//             <li key={tutor.email}>
//               <strong>{tutor.role}</strong> - {tutor.email}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No tutors found.</p>
//       )}
//     </div>
//   );
// };

// export default TutorDetails;







//  {tutors && tutors.length > 0 ? (
//                 tutors.map((tutor) => (
//                   <tr key={tutor.id} className="hover:bg-gray-50 border-t">
//                     <td className="px-6 py-3 text-sm text-gray-800">
//                       {tutor.name}
//                     </td>
//                     <td className="px-6 py-3 text-sm text-gray-800">
//                       {tutor.subjects && tutor.subjects.length > 0
//                         ? tutor.subjects.join(", ")
//                         : "No subjects listed"}
//                     </td>
//                     <td className="px-6 py-3 text-sm text-gray-800">
//                       ${tutor.hourlyRate}
//                     </td>
//                     <td className="px-6 py-3 text-sm text-gray-800">
//                       {tutor.experience} years
//                     </td>
//                     <td className="px-6 py-3 text-sm text-gray-800">
//                       {tutor.rating}
//                     </td>
//                     <td className="px-6 py-3 text-sm">
//                       <button
//                         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                         onClick={() => alert("View tutor details")}
//                       >
//                         View
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="px-6 py-3 text-sm text-gray-500 text-center"
//                   >
//                     No tutors available
//                   </td>
//                 </tr>
//               )}