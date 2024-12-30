import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ course, addToCart }) => {

  const navigate = useNavigate();
  
  const handleBuyNow = () => {
    addToCart(course);
    navigate("/cart");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800">{course.course_name}</h2>
      <h4 className="text-lg text-gray-600 mb-4">{course.sub_title}</h4>
      <p className="text-gray-700 mb-4">{course.description}</p>
      <p className="text-sm text-gray-500">
        <strong>Duration:</strong> {course.duration} days
      </p>
      <p className="text-sm text-gray-500">
        <strong>Price:</strong> ${course.price}
      </p>
      {course.zoomLink && (
        <p className="text-sm text-blue-500 mt-2">
          <strong>Zoom Link:</strong>{" "}
          <a
            href={course.zoomLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Join
          </a>
        </p>
      )}
      <button
        onClick={handleBuyNow}
        className="bg-green-500 rounded-lg px-3 py-2"
      >
        Buy Now
      </button>
    </div>
  );
};

export default Card;
