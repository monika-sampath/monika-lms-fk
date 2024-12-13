import React, { useEffect, useState } from "react";
import { getTutors } from "../services/api";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [tutors, setTutors] = useState([]);
  const [error, setError] = useState(null); // State to hold error messages
  const [loading, setLoading] = useState(true); // State to show loading indicator

  useEffect(() => {
    const fetchTutors = async () => {
      try {
          const tutors = await getTutors();
          console.log(tutors)
        // setTutors(data.tutors); // Assuming the tutors' data is in the 'tutors' field
      }
      catch (error) {
        setError("Failed to fetch tutors. Please try again.");
        console.error("Error fetching tutors:", error);
      } 
      // finally {
      //   setLoading(false); // Hide loading after data fetching is complete
      // }
    };
    fetchTutors();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Show error message if the API call fails
  }
  console.log(tutors);
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Available Tutors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutors.length === 0 ? (
          <p>No tutors available at the moment. Please try again later.</p>
        ) : (
          tutors.map((tutor) => (
            <div key={tutor._id} className="bg-white p-4 rounded shadow-md">
              <h3 className="text-xl font-semibold">{tutor.name}</h3>
              <p className="text-gray-500">{tutor.subject}</p>
              <p className="text-gray-400">
                Experience: {tutor.experience} years
              </p>
              <Link
                to={`/schedule/${tutor._id}`}
                className="text-blue-500 mt-2 block"
              >
                Schedule a lesson
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
