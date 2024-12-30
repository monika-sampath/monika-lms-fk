// import React from "react";
// import { useEffect, useState } from "react";
// import { profileDetail } from "../services/api";
// import { useLocation } from "react-router-dom";

// const StudentDashboard = () => {
//   const location = useLocation();
//   const { userId } = location.state || {}; // Retrieve userId passed via state
//   return (
//     <>
//       <div className="bg-blue-50 py-10 gap-y-10 w-5/6  rounded-r-lg flex flex-col justify-evenly px-14">
//         <div className="flex flex-row gap-3 ">
//           <div className="h-72 w-1/5 bg-white rounded-2xl shadow-lg shadow-gray-200 flex flex-col justify-evenly items-center py-5">
//             <p className="text-xl font-medium text-center">My Profile</p>
//             <img
//               className="w-40"
//               src="studentDashboard/145857007_307ce493-b254-4b2d-8ba4-d12c080d6651.svg"
//               alt=""
//             />
//             <p>{userId}</p>
//             <button className="text-center text-xl font-medium">
//               Edit Profile
//             </button>
//           </div>
//           <div className="h-72 w-4/5 px-12 bg-white flex flex-col rounded-2xl shadow-lg shadow-gray-200 justify-evenly items-start">
//             <p className="text-3xl font-medium">Welcome to your Dashboard!</p>
//             <p className="text-lg ">
//               Research shows that setting specific goals boosts effectiveness
//               and seccess. We suggest you start by taking a moment to think
//               about what you want to achieve and set a clear, actionable goal.
//             </p>
//             <button className="text-xl bg-green-500 text-white px-4 py-3 rounded-2xl">
//               Create a Learning Path
//             </button>
//           </div>
//         </div>
//         <div className="py-14 flex flex-col justify-around px-16 w-full bg-white rounded-2xl shadow-lg shadow-gray-200">
//           <div className="flex flex-row gap-x-5 pb-10">
//             <p className="text-3xl font-medium pr-10">My Learning Path </p>
//             <button className="text-xl border-2 px-3 py-1 rounded-xl hover:bg-gray-50">
//               Create New
//             </button>
//           </div>
//           <div className="flex flex-col gap-y-5 py-3">
//             <p className="text-xl">Full Stack Development</p>
//             <div className="w-96 h-2 bg-green-50 border-2 border-green-500 rounded-full py-2 flex justify-around items-center">
//               0%
//             </div>
//           </div>
//           <div className="flex flex-col gap-y-5 py-3">
//             <p className="text-xl">Python </p>
//             <div className="w-96 h-2 bg-green-50 border-2 border-green-500 rounded-full py-2 flex justify-around items-center">
//               0%
//             </div>
//           </div>
//           <div className="flex flex-col gap-y-5 py-3">
//             <p className="text-xl">Mathematics(Algebra)</p>
//             <div className="w-96 h-2 bg-green-50 border-2 border-green-500 rounded-full py-2 flex justify-around items-center">
//               0%
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default StudentDashboard;

// import React, { useState, useEffect } from "react";
// import { profileDetail, updateProfile } from "../services/api"; // Assume `updateProfile` is an API method for updating the profile
// import { useLocation } from "react-router-dom";

// const StudentDashboard = () => {
//   const location = useLocation();
//   const { userId } = location.state || {};
//   const [profile, setProfile] = useState(null); // Store profile details
//   const [isEditing, setIsEditing] = useState(false); // Toggle edit mode
//   const [formData, setFormData] = useState({ name: "", email: "" }); // Form data for editing

//   useEffect(() => {
//     if (userId) {
//       profileDetail(userId).then((data) => setProfile(data));
//     }
//   }, [userId]);

//   const handleEditClick = () => {
//     if (profile) {
//       setFormData({ name: profile.name, email: profile.email }); // Populate form with existing data
//     }
//     setIsEditing(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSaveClick = () => {
//     updateProfile(userId, formData).then((updatedProfile) => {
//       setProfile(updatedProfile); // Update local profile state
//       setIsEditing(false); // Exit edit mode
//     });
//   };

//   return (
//     <div className="bg-blue-50 py-10 gap-y-10 w-5/6 rounded-r-lg flex flex-col justify-evenly px-14">
//       <div className="flex flex-row gap-3">
//         <div className="h-72 w-1/5 bg-white rounded-2xl shadow-lg shadow-gray-200 flex flex-col justify-evenly items-center py-5">
//           <p className="text-xl font-medium text-center">My Profile</p>
//           <img
//             className="w-40"
//             src="studentDashboard/145857007_307ce493-b254-4b2d-8ba4-d12c080d6651.svg"
//             alt="Profile"
//           />
//           {profile ? (
//             <>
//               <p>{profile.name}</p>
//               <p>{profile.email}</p>
//             </>
//           ) : (
//             <p>Loading...</p>
//           )}
//           <button
//             className="text-center text-xl font-medium"
//             onClick={handleEditClick}
//           >
//             Edit Profile
//           </button>
//         </div>
//         <div className="h-72 w-4/5 px-12 bg-white flex flex-col rounded-2xl shadow-lg shadow-gray-200 justify-evenly items-start">
//           <p className="text-3xl font-medium">Welcome to your Dashboard!</p>
//           <p className="text-lg">
//             Research shows that setting specific goals boosts effectiveness and
//             success. We suggest you start by taking a moment to think about what
//             you want to achieve and set a clear, actionable goal.
//           </p>
//           <button className="text-xl bg-green-500 text-white px-4 py-3 rounded-2xl">
//             Create a Learning Path
//           </button>
//         </div>
//       </div>
//       <div className="py-14 flex flex-col justify-around px-16 w-full bg-white rounded-2xl shadow-lg shadow-gray-200">
//         <div className="flex flex-row gap-x-5 pb-10">
//           <p className="text-3xl font-medium pr-10">My Learning Path</p>
//           <button className="text-xl border-2 px-3 py-1 rounded-xl hover:bg-gray-50">
//             Create New
//           </button>
//         </div>
//         <div className="flex flex-col gap-y-5 py-3">
//           <p className="text-xl">Full Stack Development</p>
//           <div className="w-96 h-2 bg-green-50 border-2 border-green-500 rounded-full py-2 flex justify-around items-center">
//             0%
//           </div>
//         </div>
//         <div className="flex flex-col gap-y-5 py-3">
//           <p className="text-xl">Python</p>
//           <div className="w-96 h-2 bg-green-50 border-2 border-green-500 rounded-full py-2 flex justify-around items-center">
//             0%
//           </div>
//         </div>
//         <div className="flex flex-col gap-y-5 py-3">
//           <p className="text-xl">Mathematics (Algebra)</p>
//           <div className="w-96 h-2 bg-green-50 border-2 border-green-500 rounded-full py-2 flex justify-around items-center">
//             0%
//           </div>
//         </div>
//       </div>

//       {isEditing && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg p-6 shadow-lg">
//             <h3 className="text-xl font-medium mb-4">Edit Profile</h3>
//             <form className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border rounded-lg"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border rounded-lg"
//                 />
//               </div>
//               <div className="flex justify-end space-x-4">
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-gray-300 rounded-lg"
//                   onClick={() => setIsEditing(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-green-500 text-white rounded-lg"
//                   onClick={handleSaveClick}
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentDashboard;

import React, { useState, useEffect } from "react";
import { profileDetail, updateProfile } from "../services/api";
import { useLocation } from "react-router-dom";

const StudentDashboard = () => {
  const location = useLocation();
  const { userId } = location.state || {}; // Retrieve username from state
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ email: "" });

  // Fetch profile on mount
  useEffect(() => {
    if (userId) {
      profileDetail(userId)
        .then((data) => setProfile(data))
        .catch((error) => console.error("Error fetching profile:", error));
    }
  }, [userId]);

  // Handle edit button click
  const handleEditClick = () => {
    if (profile) {
      setFormData({ email: profile.email || "" });
    }
    setIsEditing(true);
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Save updated profile
  const handleSaveClick = () => {
    updateProfile(userId, formData)
      .then((updatedProfile) => {
        setProfile(updatedProfile); // Update the profile in the UI
        setIsEditing(false); // Exit edit mode
      })
      .catch((error) => console.error("Error updating profile:", error));
  };

  return (
    <div className="bg-blue-50 py-10 gap-y-10 w-5/6 rounded-r-lg flex flex-col justify-evenly px-14">
      <div className="flex flex-row gap-3">
        <div className="h-72 w-1/5 bg-white rounded-2xl shadow-lg shadow-gray-200 flex flex-col justify-evenly items-center py-5">
          <p className="text-xl font-medium text-center">My Profile</p>
          <img
            className="w-40"
            src="studentDashboard/145857007_307ce493-b254-4b2d-8ba4-d12c080d6651.svg"
            alt="Profile"
          />
          {profile ? (
            <>
              <p>{profile.username}</p>
              <p>{profile.email}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
          <button
            className="text-center text-xl font-medium"
            onClick={handleEditClick}
          >
            Edit Profile
          </button>
        </div>
        <div className="h-72 w-4/5 px-12 bg-white flex flex-col rounded-2xl shadow-lg shadow-gray-200 justify-evenly items-start">
          <p className="text-3xl font-medium">Welcome to your Dashboard!</p>
          <p className="text-lg">
            Research shows that setting specific goals boosts effectiveness and
            success. We suggest you start by taking a moment to think about what
            you want to achieve and set a clear, actionable goal.
          </p>
          <button className="text-xl bg-green-500 text-white px-4 py-3 rounded-2xl">
            Create a Learning Path
          </button>
        </div>
      </div>
      {isEditing && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-medium mb-4">Edit Profile</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg"
                  onClick={handleSaveClick}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
