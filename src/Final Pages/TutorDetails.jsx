import React, { useState, useEffect } from "react";
import StuDashNavBar from "../Final Components/StuDashNavBar";
import { getTutors } from "../services/api";
import { Link } from "react-router-dom";
import axios from "axios";
import TutorCard from "../Final Components/TutorCard";

const TutorDetails = () => {
  const [tutors, setTutors] = useState([]);
  const [error, setError] = useState(null); // State to hold error messages
  const [loading, setLoading] = useState(true); // State to show loading indicator
  const [studentProfile, setStudentProfile] = useState(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false); // Flag to toggle editing mode
  const [updatedProfile, setUpdatedProfile] = useState({}); // State to hold updated profile data
  const [filteredTutors, setFilteredTutors] = useState([]); // Tutors after applying filters

  // Filter states
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [availability, setAvailability] = useState("");

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
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://monika-lms-bk.onrender.com/api/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setStudentProfile(response.data);
        setUpdatedProfile(response.data); // Initialize updatedProfile with current profile data
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchTutors();
    fetchProfile();
  }, []);

  const handleEditProfile = () => {
    setIsEditingProfile(!isEditingProfile);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleProfileUpdate = async () => {
    try {
      const response = await axios.put(
        "https://monika-lms-bk.onrender.com/api/profile",
        updatedProfile,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setStudentProfile(response.data);
      setIsEditingProfile(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  // Filter tutors based on search and filter criteria
  const filterTutors = () => {
    let updatedTutors = tutors;

    // Search filter (name or subject)
    if (search) {
      updatedTutors = updatedTutors.filter(
        (tutor) =>
          tutor.name.toLowerCase().includes(search.toLowerCase()) ||
          tutor.subjects.some((sub) =>
            sub.toLowerCase().includes(search.toLowerCase())
          )
      );
    }

    // Subject filter
    if (subject) {
      updatedTutors = updatedTutors.filter((tutor) =>
        tutor.subjects.includes(subject)
      );
    }

    // Rating filter
    if (minRating > 0) {
      updatedTutors = updatedTutors.filter(
        (tutor) => tutor.rating >= parseFloat(minRating)
      );
    }

    // Price range filter
    updatedTutors = updatedTutors.filter(
      (tutor) =>
        tutor.hourlyRate >= priceRange[0] && tutor.hourlyRate <= priceRange[1]
    );

    // Availability filter
    if (availability) {
      updatedTutors = updatedTutors.filter((tutor) =>
        tutor.availability.includes(availability)
      );
    }

    setFilteredTutors(updatedTutors);
  };

  // Handle form submission to apply filters
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    filterTutors();
  };

  const tutorsA = [
    {
      _id: "1",
      name: "John Doe",
      subjects: ["Math", "Physics"],
      hourlyRate: 50,
      experience: 5,
      rating: 4.8,
    },
    // Add more tutor objects as needed
  ];

  // if (loading) {
  //   return <div>Loading...</div>; // Show a loading state while the data is being fetched
  // }

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
      <div className="bg-blue-50 w-5/6 h-full rounded-r-lg flex flex-col justify-evenly px-14">
        <div>
          <p className="text-center font-semibold text-3xl">
            Expand Your Career{" "}
            <span className="text-blue-500">Opportunity</span> With Help of Our
            Tutors
          </p>
        </div>
        {/* from here */}

        {/* <div className="flex items-center space-x-4 mb-8">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile Icon"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">{studentProfile?.name}</h1>
            <p className="text-gray-500">{studentProfile?.email}</p>
            <button
              onClick={handleEditProfile}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              {isEditingProfile ? "Cancel" : "Edit Profile"}
            </button>
          </div>
        </div> */}
        {isEditingProfile && (
          <div className="bg-white p-4 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={updatedProfile.name || ""}
                  onChange={handleProfileChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={updatedProfile.email || ""}
                  onChange={handleProfileChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Preferences</label>
                <textarea
                  name="preferences"
                  value={updatedProfile.preferences || ""}
                  onChange={handleProfileChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                onClick={handleProfileUpdate}
                className="bg-green-500 text-white px-4 py-2 rounded mt-4"
              >
                Save Changes
              </button>
            </div>
          </div>
        )}
        <h1 className="text-2xl font-bold mb-4">Tutors</h1>

        {/* Filters Section */}
        <form onSubmit={handleFilterSubmit} className="filters mb-4">
          <div className="mb-2">
            <label>Search by Name/Subject:</label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-2">
            <label>Subject:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g., Math, Physics"
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-2">
            <label>Minimum Rating:</label>
            <input
              type="number"
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
              min="0"
              max="5"
              step="0.1"
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-2">
            <label>Price Range:</label>
            <div className="flex space-x-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                placeholder="Min"
                className="border p-2 w-1/2"
              />
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                placeholder="Max"
                className="border p-2 w-1/2"
              />
            </div>
          </div>
          <div className="mb-2">
            <label>Availability:</label>
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="border p-2 w-full"
            >
              <option value="">All</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Apply Filters
          </button>
        </form>

        {/* Tutors List */}
        <TutorCard
          tutors={filteredTutors.length === 0 ? tutors : filteredTutors}
          tutorsA={tutors}
        />
        {/* <TutorCard tutors={filteredTutors} /> */}

        {/* till here */}
        {/* <div className="overflow-x-auto p-4">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                  FinalName
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
        </div> */}
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
