import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router";
import Footer from "./components/Footer.jsx";
import { ToastContainer } from "react-toastify";
import { FaGraduationCap } from "react-icons/fa";

function App() {
  const [visible, setVisible] = useState(true);
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setTextAnimationComplete(true);
    }, 2000);

    const splashTimer = setTimeout(() => {
      setVisible(false);
    }, 6000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(splashTimer);
    };
  }, []);

  if (!visible) {
    return (
      <>
        <Navbar />
        <ToastContainer />
        <Outlet />
        <Footer />
      </>
    );
  }

  return (
    <div className=" fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#234297] to-[#234297]/60 text-[#f4f5ff]">
      <FaGraduationCap className=" w-20 h-20 animate-bounce" />
      <div className=" text-center">
        <h1 className=" text-4xl md:text-6xl font-bold mb-4 overflow-hidden">
          <span
            className={` mx-2 inline-block transition-all duration-1000 ${
              textAnimationComplete
                ? " translate-y-0 opacity-100"
                : " -translate-y-full opacity-0"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            Welcome
          </span>
          <span
            className={` mx-2 inline-block transition-all duration-1000 ${
              textAnimationComplete
                ? " translate-y-0 opacity-100"
                : " -translate-y-full opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            to
          </span>
          <span
            className={` mx-2 inline-block transition-all duration-1000 ${
              textAnimationComplete
                ? " translate-y-0 opacity-100"
                : " -translate-y-full opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            MS
          </span>
          <span
            className={` mx-2 inline-block transition-all duration-1000 ${
              textAnimationComplete
                ? " translate-y-0 opacity-100"
                : " -translate-y-full opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            International
          </span>
          <span
            className={` mx-2 inline-block transition-all duration-1000 ${
              textAnimationComplete
                ? " translate-y-0 opacity-100"
                : " -translate-y-full opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            School
          </span>
        </h1>
      </div>
      {textAnimationComplete && (
        <div className=" mt-8 animate-fade-in">
          <div className=" w-64 h-1 bg-white/30 rounded-full overflow-hidden">
            <div
              className=" h-full bg-white rounded-full"
              style={{
                width: "100%",
                animation: " progress 7s linear forwards",
              }}
            ></div>
          </div>
        </div>
      )}
      <style>
        {`
          @keyframes progress {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }

          .animate-fade-in {
            animation: fadeIn 0.5s ease-in forwards;
          }

          @keyframes fadeIn {
            from : {
              opacity: 0;
            }
            to : {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
