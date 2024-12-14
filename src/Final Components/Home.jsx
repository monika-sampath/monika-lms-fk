import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="1" className="flex flex-row justify-evenly tracking-wide pb-20 pt-28">
        <div className="w-1/2 pt-14 pl-24">
          <p className="text-5xl leading-tight pr-5">
            <span className="font-bold text-5xl">BUILD, MANAGE & SCALE </span>
            Your Academy through Online Learning Experience Better Instantly
          </p>
          <p className="pt-9 text-lg">
            We have 20k+ Qnline courses & 500k+ Online registered student. Find
            your desired Courses from them.
          </p>
          <div className="pt-9 flex flex-row gap-5">
            <Link
              to="/login"
              className="transition ease-in-out delay-150 bg-blue-600 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300 text-4xl border-2 px-4 py-2 rounded-xl  text-white hover:ring-2 ring-green-500  hover:shadow-xl hover:shadow-green-100"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="transition ease-in-out delay-150 bg-blue-600 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300 text-4xl border-2 px-4 py-2 rounded-xl  text-white hover:ring-2 ring-indigo-500  hover:shadow-xl hover:shadow-green-100"
            >
              Register
            </Link>
          </div>
        </div>

        <div className=" h-96 rounded-lg w-1/2">
          <img
            className="w-full "
            src="/Home/10613101_10088.svg"
            alt=""
          />
          <p className="relative bottom-9 pl-14 text-5xl font-semibold">
            Learning Management System
          </p>
        </div>
      </div>
      <div className="h-64 bg-gray-50 rounded-lg flex flex-col items-center justify-center gap-10">
        <h3 className="text-2xl font-semibold">We are proud of...</h3>
        <div className="flex flex-row gap-x-16">
          <div className="flex flex-col bg-white w-52 h-24 rounded-xl justify-center items-center shadow-md">
            <p className="text-green-500 font-medium text-2xl">325872</p>
            <p className="text-xl">Learners</p>
          </div>
          <div className="flex flex-col bg-white w-52 h-24 rounded-xl justify-center items-center shadow-md">
            <p className="text-green-500 font-medium text-2xl">150</p>
            <p className="text-xl">Tutors</p>
          </div>
          <div className="flex flex-col bg-white w-52 h-24 rounded-xl justify-center items-center shadow-md">
            <p className="text-green-500 font-medium text-2xl">1735548</p>
            <p className="text-xl">Hours of work</p>
          </div>
          <div className="flex flex-col bg-white w-52 h-24 rounded-xl justify-center items-center shadow-md">
            <p className="text-green-500 font-medium text-2xl">183</p>
            <p className="text-xl">Videos</p>
          </div>
        </div>
      </div>
      <div className="h-96 bg-white" id="2" title="Courses">
        Courses
      </div>
      <div className="h-72 relative bg-sky-950 rounded-2xl flex flex-col justify-center items-start pl-44 gap-7">
        <p className="text-4xl font-medium text-red-300 tracking-wider">
          Kickstart your career
        </p>
        <p className="text-4xl font-medium text-red-300 tracking-wider">
          Get certified by completing a course
        </p>
        <button className="text-white bg-green-500 px-4 py-2 text-xl rounded-2xl">
          Get Started
        </button>
        <div className="bg-green-500 w-44 h-44 border-red-300 border-4 text-5xl font-bold absolute rounded-full text-white content-center text-center right-44 top-48">
          LMS
        </div>
        <img
          className="w-96 absolute left-1/2 color top-20 invert"
          src="public/Home/rb_4667.png"
          alt=""
        />
      </div>
      <div
        id="3"
        className="py-20 bg-gray-100 flex flex-col items-center px-28 rounded-2xl gap-5"
      >
        <h1 className="text-5xl font-semibold py-5">About us...</h1>
        <p className="text-center text-xl tracking-wide">
          A Learning Management System (LMS) is a digital platform designed to
          facilitate the creation, management, delivery, and tracking of
          educational content and training programs. It serves as a centralized
          hub where educators and organizations can design courses, upload
          learning materials, and assess learner progress through quizzes,
          assignments, and reports. With features such as course enrollment,
          interactive modules, and progress tracking, an LMS streamlines the
          learning experience for both instructors and students. It is widely
          used in schools, universities, and corporate environments to support
          remote learning and employee training, ensuring easy access to
          learning resources anytime and anywhere.
        </p>
        <p className="text-center text-xl">
          Modern LMS platforms often integrate advanced technologies such as
          artificial intelligence, gamification, and analytics to enhance
          learner engagement and personalization. AI-driven recommendations can
          tailor content based on a learner's progress, while gamified elements
          like badges and leaderboards motivate users to achieve their goals.
          Additionally, data analytics provide insights into learning patterns
          and performance metrics, enabling educators to identify gaps and
          improve course effectiveness. With its versatility and scalability, an
          LMS has become a crucial tool in the digital transformation of
          education and training, empowering learners and educators alike.
        </p>
      </div>
      <div
        id="4"
        className="h-96 bg-sky-950 text-white items-center text-center"
      >
        Feed back
      </div>
      <div className="bg-gray-200 py-20 flex flex-row justify-around">
        <div>
          <p>Social Links</p>
          <p>youtube</p>
          <p>instagram</p>
          <p>github</p>
        </div>
        <div>
          <p>Contact Info</p>
          <p>Call Us : +92759937778</p>
          <p>Address: no.8,akkwjdjecm,Los Angeles, 623114</p>
          <p>Mail Us:sample@elearning.com</p>
        </div>
      </div>
    </>
  );
};

export default Home;
