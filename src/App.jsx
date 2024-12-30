import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Final Components/Navbar";
import Register from "./Final Pages/Register";
import Login from "./Final Pages/Login";
import Dashboard from "./pages/Dashboard";

import FrontPage from "./Final Pages/FrontPage";
import StudentDashboard from "./Final Components/StudentDashboard";
import TutorDashboard from "./Final Pages/TutorDashboard";
import StuFPage from "./Final Pages/StuFPage";
import MyLearnPath from "./Final Pages/MyLearnPath";
import TutorDetails from "./Final Pages/TutorDetails";
import ScheduleLesson from "./Final Pages/ScheduleLesson";
import AdminDashboard from "./Final Pages/AdminDashboard";
import CourseDashboard from "./Final Pages/CourseDashboard";
import CartPage from "./Final Pages/CartPage";
import PaymentPage from "./Final Pages/PaymentPage";
import CartPageTutor from "./Final Pages/CartPageTutor";
import CreateCourses from "./Final Pages/CreateCourses";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (course) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === course._id);
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === course._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...course, quantity: 1 }];
      }
    });
  };

  const updateCart = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item._id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const tutors = [
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

  return (
    <div>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/studentDashboard" element={<StuFPage />} />
        <Route path="/studentDashboard/myLearnPath" element={<MyLearnPath />} />
        <Route
          path="/studentDashboard/coursesDashboard"
          element={<CourseDashboard addToCart={addToCart} cart={cart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} updateCart={updateCart} />}
        />
        <Route path="/payment" element={<PaymentPage />} />
        <Route
          path="/studentDashboard/tutorDetails"
          element={<TutorDetails />}
        />
        <Route path="/tutorDashboard" element={<TutorDashboard />} />
        <Route
          path="/turortDashboard/scheduleLesson"
          element={<ScheduleLesson />}
        />
        <Route
          path="/turortDashboard/createCourses"
          element={<CreateCourses />}
        />
        <Route path="/schedule/:tutorId" element={<ScheduleLesson />} />

        <Route path="/adminDashboard" element={<AdminDashboard />} />

        <Route path="/cartTutor" element={<CartPageTutor />} />
      </Routes>
    </div>
  );
};

export default App;
