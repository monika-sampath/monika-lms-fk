import React from "react";
import StuDashNavBar from "../Final Components/StuDashNavBar";
import StudentDashboard from "../Final Components/StudentDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const StuFPage = () => {
  return (
    <>
      <div className="flex flex-row">
        <StuDashNavBar />
        <StudentDashboard />
      </div>
    </>
  );
};

export default StuFPage;
