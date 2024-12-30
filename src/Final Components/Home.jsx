import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        id="1"
        className="flex flex-row justify-evenly tracking-wide pb-20 pt-10"
      >
        <div className="w-1/2 pt-14 pl-24">
          <p className="text-5xl leading-tight pr-5">
            <span className="font-bold text-5xl text-blue-600">
              BUILD, MANAGE & SCALE{" "}
            </span>
            Your Academy through Online Learning Experience Better Instantly
          </p>
          <p className="pt-9 text-lg">
            We have 20k+ Qnline courses & 500k+ Online registered student. Find
            your desired Courses from them.
          </p>
          <div className="pt-9 flex flex-row gap-5">
            <Link
              to="/login"
              className="transition ease-in-out delay-150 bg-blue-600 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300 text-4xl border-2 px-4 py-2 rounded-xl  text-white hover:ring-2 ring-indigo-500  hover:shadow-xl hover:shadow-green-100"
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

        <div className=" h-96 rounded-lg w-1/2 pr-5">
          <img className="w-full" src="/Home/10613101_10088.svg" alt="" />
          <p className="relative bottom-9 pl-14 text-5xl font-semibold">
            Learning Management System
          </p>
        </div>
      </div>
      <div className="py-16 bg-blue-50 rounded-lg flex flex-col items-center justify-center gap-10">
        <h3 className="text-4xl ">
          We are <span className="text-blue-600">proud of...</span>{" "}
        </h3>
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
      <div className="bg-white" id="2" title="Courses">
        <div className="container-3 mx-auto rounded-2xl bg-gradient-to-t from-[#D9ECFF] via-[#F0F3FF] to-white">
          <div className="main-div flex flex-col justify-around items-center px-10 lg:px-24 lg:relative">
            <div id="part-1" class="text-center lg:pt-14 lg:pb-20">
              <h1 className=" pt-12 lg:text-4xl text-[#323232]">
                Featured <span className="text-[#4883FF]">Course</span>
              </h1>
              <p className=" text-[#323232] uppercase pt-3 pb-12 text-xs lg:text-xl lg:tracking-widest">
                The feature courses are we invented our teaching part
              </p>
            </div>
            <div className="hidden lg:flex lg:absolute lg:top-24 lg:left-44">
              <img
                className="size-20"
                src="/Home/container-3/Ellipse 118.svg"
                alt=""
              />
            </div>
            <div
              id="part-2"
              className=" grid grid-cols-1 items-center gap-y-7 sm:grid-cols-2 gap-x-2 lg:grid-cols-3 lg:gap-10"
            >
              <div className="card bg-white rounded-2xl">
                <img
                  src="/Home/container-3/Mask group.svg"
                  alt="graphics-image"
                />
                <div className="text-[#4E596B]  flex justify-between text-xs pt-6 px-4">
                  1,957 students <span>01h 59m</span>
                </div>
                <div className="text-[#324361]  pt-6 px-4">
                  Motion Graphics: Create a Nice Typography Animation
                </div>
                <div className="flex  text-[#4E596B] justify-between pt-6 px-4 pb-6">
                  Rs.499
                  <span>
                    <img
                      className=""
                      src="/Home/container-3/9054263_bx_cart_alt_icon 1.svg"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="card  bg-white rounded-2xl ">
                <img
                  src="/Home/container-3/Mask group (1).svg"
                  alt="graphics-image"
                />
                <div className="text-[#4E596B]  flex justify-between text-xs pt-6 px-4">
                  1,957 students <span>01h 59m</span>
                </div>
                <div className="text-[#324361]  pt-6 px-4">
                  Motion Graphics: Create a Nice Typography Animation
                </div>
                <div className="flex  text-[#4E596B] justify-between pt-6 px-4 pb-6">
                  Rs.499
                  <span>
                    <img
                      className=""
                      src="/Home/container-3/9054263_bx_cart_alt_icon 1.svg"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="card  bg-white rounded-2xl ">
                <img
                  src="/Home/container-3/Mask group (2).svg"
                  alt="graphics-image"
                />
                <div className="text-[#4E596B] flex justify-between text-xs pt-6 px-4">
                  1,957 students <span>01h 59m</span>
                </div>
                <div className="text-[#324361] pt-6 px-4">
                  Motion Graphics: Create a Nice Typography Animation
                </div>
                <div className="flex text-[#4E596B] justify-between pt-6 px-4 pb-6">
                  Rs.499
                  <span>
                    <img
                      className=""
                      src="/Home/container-3/9054263_bx_cart_alt_icon 1.svg"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="card bg-white rounded-2xl">
                <img
                  src="/Home/container-3/Mask group (3).svg"
                  alt="graphics-image"
                />
                <div className="text-[#4E596B] flex justify-between text-xs pt-6 px-4">
                  1,957 students <span>01h 59m</span>
                </div>
                <div className="text-[#324361] pt-6 px-4">
                  Motion Graphics: Create a Nice Typography Animation
                </div>
                <div className="flex text-[#4E596B] justify-between pt-6 px-4 pb-6">
                  Rs.499
                  <span>
                    <img
                      className=""
                      src="/Home/container-3/9054263_bx_cart_alt_icon 1.svg"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="card bg-white rounded-2xl">
                <img
                  src="/Home/container-3/Mask group (4).svg"
                  alt="graphics-image"
                />
                <div className="text-[#4E596B] flex justify-between text-xs pt-6 px-4">
                  1,957 students <span>01h 59m</span>
                </div>
                <div className="text-[#324361] pt-6 px-4">
                  Motion Graphics: Create a Nice Typography Animation
                </div>
                <div className="flex text-[#4E596B] justify-between pt-6 px-4 pb-6">
                  Rs.499{" "}
                  <span>
                    <img
                      className=""
                      src="/Home/container-3/9054263_bx_cart_alt_icon 1.svg"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="card bg-white rounded-2xl">
                <img
                  src="/Home/container-3/Mask group (5).svg"
                  alt="graphics-image"
                />
                <div className="text-[#4E596B] flex justify-between text-xs pt-6 px-4">
                  1,957 students <span>01h 59m</span>
                </div>
                <div className="text-[#324361] pt-6 px-4">
                  Motion Graphics: Create a Nice Typography Animation
                </div>
                <div className="flex text-[#4E596B] justify-between pt-6 px-4 pb-6">
                  Rs.499{" "}
                  <span>
                    <img
                      className=""
                      src="/Home/container-3/9054263_bx_cart_alt_icon 1.svg"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>
            <div id="part-3" className="py-6 sm:py-10 lg:py-16">
              <button className="text-white rounded-md  bg-gradient-to-r from-[#083F9B] to-[#7F56D9] px-5 py-3 text-sm">
                Explore courses
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-80 relative bg-indigo-950 rounded-2xl flex flex-col justify-center items-start pl-44 gap-7">
        <p className="text-4xl font-medium text-green-500 tracking-wider">
          Kickstart your career
        </p>
        <p className="text-4xl font-medium text-green-500 tracking-wider">
          Get certified by completing a course
        </p>
        <button className="text-white bg-blue-500 px-4 py-2 text-xl rounded-2xl hover:ring-4 hover:ring-offset-4 hover:ring-blue-500">
          Get Started
        </button>
        <div className="bg-indigo-500 w-44 h-44 border-blue-600 border-4 text-5xl font-bold absolute rounded-full text-white content-center text-center right-44 top-48">
          LMS
        </div>
        <img
          className="w-96 absolute left-1/2 color top-20 invert"
          src="/Home/rb_4667.png"
          alt=""
        />
      </div>
      <div
        id="3"
        className="py-20 bg-white flex flex-col items-center px-28 rounded-2xl gap-5"
      >
        <h1 className="text-5xl py-5 text-blue-600">About us...</h1>
        <p className="text-center text-xl tracking-wide text-[#4E596B] px-12">
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
        <p className="text-center text-xl tracking-wide text-[#4E596B] px-12">
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
      <div className="container-5 mx-auto bg-gradient-to-t from-[#D9ECFF] to-transparent lg:py-14">
        <div className="main-div flex flex-col justify-around items-center py-16 space-y-7">
          <div id="part-5" class="text-center space-y-1">
            <h1 className=" text-black sm:text-2xl lg:text-4xl">
              Top<span class="text-[#0E38CD]"> Categories</span>
            </h1>
            <p className=" text-sm text-[#4E596B] pb-16 lg:text-xl">
              100+ unique online course list designs
            </p>
          </div>
          <div
            id="part-6"
            className="grid grid-cols-2 items-center gap-y-7 gap-x-2 sm:grid-cols-3 lg:grid-cols-6 lg:px-16 lg:gap-x-5 lg:justify-items-center"
          >
            <div className="card-2 flex flex-col items-center justify-center bg-white rounded-lg w-44 h-fit gap-y-10 py-8 lg:w-36 xl:w-48">
              <img
                className="size-12 lg:size-16"
                src="/Home/container-5/div.features-box-image.svg"
                alt="icon"
              />
              <p className="text-[#324361] text-sm px-20 text-center">
                Digtal Marketing
              </p>
              <div className="text-[#4F547B] text-xs text-center">
                25 Courses
              </div>
            </div>
            <div className="card-2 flex flex-col items-center justify-center  bg-white rounded-lg w-44 h-fit gap-y-10 py-8 lg:w-36 xl:w-48">
              <img
                className="size-12 lg:size-16"
                src="/Home/container-5/div.features-box-image (1).svg"
                alt="icon"
              />
              <p className="text-[#324361] text-sm px-20 text-center">
                Web Development
              </p>
              <div className="text-[#4F547B] text-xs text-center">
                16 Courses
              </div>
            </div>
            <div className="card-2 flex flex-col items-center justify-center  bg-white rounded-lg w-44 h-fit gap-y-10 py-8 lg:w-36 xl:w-48">
              <img
                className="size-12 lg:size-16"
                src="/Home/container-5/div.features-box-image (2).svg"
                alt="icon"
              />
              <p className="text-[#324361] text-sm px-20 text-center">
                Art & Humanities
              </p>
              <div className="text-[#4F547B] text-xs text-center">
                76 Courses
              </div>
            </div>
            <div className="card-2 flex flex-col items-center justify-center  bg-white rounded-lg w-44 h-fit gap-y-10 py-8 lg:w-36 xl:w-48">
              <img
                className="size-12 lg:size-16"
                src="/Home/container-5/div.features-box-image (3).svg"
                alt="icon"
              />
              <p className="text-[#324361] text-sm px-20 text-center">
                Personal Development
              </p>
              <div className="text-[#4F547B] text-xs text-center">
                22 Courses
              </div>
            </div>
            <div className="card-2 flex flex-col items-center justify-center  bg-white rounded-lg w-44 h-fit gap-y-10 py-8 lg:w-36 xl:w-48">
              <img
                className="size-12 lg:size-16"
                src="/Home/container-5/div.features-box-image (4).svg"
                alt="icon"
              />
              <p className="text-[#324361] text-sm px-20 text-center">
                IT and Software
              </p>
              <div className="text-[#4F547B] text-xs text-center">
                110 Courses
              </div>
            </div>
            <div className="card-2 flex flex-col items-center justify-center  bg-white rounded-lg w-44 h-fit gap-y-10 py-8 lg:w-36 xl:w-48">
              <img
                class="size-12 lg:size-16"
                src="/Home/container-5/div.features-box-image (5).svg"
                alt="icon"
              />
              <p className="text-[#324361] text-sm px-20 text-center">
                Graphic Design
              </p>
              <div className="text-[#4F547B] text-xs text-center">
                85 Courses
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="4"
        className=" bg-indigo-950 text-white items-center text-center"
      >
        <div className=" flex flex-row items-center text-center">
          <div className="w-1/2">
            <img className="pl-16" src="Home/13961232_5385894.svg" alt="" />
          </div>
          <div className="w-1/2 flex flex-col gap-10">
            <p className="text-5xl pr-16 leading-tight">
              Our Students Are{" "}
              <span className="text-blue-500">Our Strength</span> See What They
              Say About Us
            </p>
            <p className="text-xl text-left pr-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              nemo quas expedita maiores ullam corrupti ad dolorum mollitia
              voluptate totam eius id, provident fugiat dolorem tenetur neque
              vero! Asperiores, nesciunt. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quasi, nemo quas expedita maiores ullam corrupti
              ad dolorum mollitia voluptate totam eius id, provident fugiat
              dolorem tenetur neque vero! Asperiores, nesciunt.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 px-8 gap-x-8 gap-y-8 py-8">
          <div className="bg-indigo-800 rounded-2xl flex flex-col px-8 py-5 gap-y-3">
            <div className="flex flex-row gap-5">
              <img
                className="w-10 bg-white rounded-full"
                src="Home/370751043_e67eb556-f125-4e24-95ad-8aff21b9926a.svg"
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-left text-lg">Aniruth</p>
                <p>Student | Cambrige University</p>
              </div>
            </div>
            <p className="text-left text-lg">
              "You have established a positive classroom atmosphere". "Your use
              of multimedia resources effectively enhances lessons". "Your
              lessons are well-structured". "Your unwavering commitment to
              providing the best for our students is truly commendable. Thank
              you for putting in the extra effort during this busy time. The
              client truly appreciates it and your positive attitude has helped
              us all stay motivated."
            </p>
          </div>
          <div className="bg-indigo-800 rounded-2xl flex flex-col px-8 py-5 gap-y-3">
            <div className="flex flex-row gap-5">
              <img
                className="w-10 bg-white rounded-full"
                src="Home/370751043_e67eb556-f125-4e24-95ad-8aff21b9926a.svg"
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-left text-lg">Aniruth</p>
                <p>Student | Cambrige University</p>
              </div>
            </div>
            <p className="text-left text-lg">
              "You have established a positive classroom atmosphere". "Your use
              of multimedia resources effectively enhances lessons". "Your
              lessons are well-structured". "Your unwavering commitment to
              providing the best for our students is truly commendable. Thank
              you for putting in the extra effort during this busy time. The
              client truly appreciates it and your positive attitude has helped
              us all stay motivated."
            </p>
          </div>
          <div className="bg-indigo-800 rounded-2xl flex flex-col px-8 py-5 gap-y-3">
            <div className="flex flex-row gap-5">
              <img
                className="w-10 bg-white rounded-full"
                src="Home/370751043_e67eb556-f125-4e24-95ad-8aff21b9926a.svg"
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-left text-lg">Aniruth</p>
                <p>Student | Cambrige University</p>
              </div>
            </div>
            <p className="text-left text-lg">
              "You have established a positive classroom atmosphere". "Your use
              of multimedia resources effectively enhances lessons". "Your
              lessons are well-structured". "Your unwavering commitment to
              providing the best for our students is truly commendable. Thank
              you for putting in the extra effort during this busy time. The
              client truly appreciates it and your positive attitude has helped
              us all stay motivated."
            </p>
          </div>
          <div className="bg-indigo-800 rounded-2xl flex flex-col px-8 py-5 gap-y-3">
            <div className="flex flex-row gap-5">
              <img
                className="w-10 bg-white rounded-full"
                src="Home/370751043_e67eb556-f125-4e24-95ad-8aff21b9926a.svg"
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-left text-lg">Aniruth</p>
                <p>Student | Cambrige University</p>
              </div>
            </div>
            <p className="text-left text-lg">
              "You have established a positive classroom atmosphere". "Your use
              of multimedia resources effectively enhances lessons". "Your
              lessons are well-structured". "Your unwavering commitment to
              providing the best for our students is truly commendable. Thank
              you for putting in the extra effort during this busy time. The
              client truly appreciates it and your positive attitude has helped
              us all stay motivated."
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 py-5 flex flex-col justify-around gap-y-16">
        <div>
          <p className="text-center font-bold text-xl">Contact Info</p>
          <p className="text-center">Call Us : +92759937778</p>
          <p className="text-center">
            Address: no.8,akkwjdjecm,Los Angeles, 623114
          </p>
          <p className="text-center">Mail Us:sample@elearning.com</p>
        </div>
        <div className="flex flex-row justify-center gap-x-4">
          <p className="text-xl font-bold">Social Links</p>
          <p className="text-xl font-bold">youtube</p>
          <p className="text-xl font-bold">instagram</p>
          <p className="text-xl font-bold">github</p>
        </div>
      </div>
    </>
  );
};

export default Home;
