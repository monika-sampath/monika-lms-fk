import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Final Components/Navbar";
import Register from "./Final Pages/Register";
import Login from "./Final Pages/Login";
import Dashboard from "./pages/Dashboard";
import ScheduleLesson from "./pages/ScheduleLesson";
import FrontPage from "./Final Pages/FrontPage";
import StudentDashboard from "./Final Components/StudentDashboard";
import TutorDashboard from "./Final Pages/TutorDashboard";
import StuFPage from "./Final Pages/StuFPage";
import MyLearnPath from "./Final Pages/MyLearnPath";
import TutorDetails from "./Final Pages/TutorDetails";

const App = () => {
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
          path="/studentDashboard/tutorDetails"
          element={<TutorDetails />}
        />
        <Route path="/tutorDashboard" element={<TutorDashboard />} />
        <Route path="/schedule/:tutorId" element={<ScheduleLesson />} />
      </Routes>
    </div>
  );
};

export default App;
