import React, { useState, useEffect, useRef } from "react";
import kidImage from "../assets/kid.png";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import CountUp from "react-countup";
import { motion } from "framer-motion"


function FloatingPaths({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-slate-950 dark:text-white" viewBox="0 0 696 316" fill="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (

    <div className=" relative animate-gradient bg-[length:400%_400%] overflow-hidden font-inter">
      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient {
          background: linear-gradient(
            -45deg,
            #0D9488,
            #0891B2,
            #06b6d4,
            #0ea5e9,
            #3b82f6
          );
          background-size: 400% 400%;
          animation: gradient 10s ease infinite;
        }
      `}</style>
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div>
        <div className=" xl:container xl:mx-auto md:mx-5 flex justify-start items-center p-4 h-[90vh] ">
          <div className="text-white mt-[-330px] lg:mt-0 z-10">
            <h1 className=" text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold ">
              Welcome to <br />{" "}
              <span className="text-[#D97706]"> MS INTERNATIONAL </span>
              <br /> <span className="text-[#D97706]">PUBLIC SCHOOL</span>{" "}
            </h1>
            <p className="text-base lg:text-xl mt-2 md:mt-4 text-white">
              " Viveka Vidhya Samsthe "
            </p>
          </div>
        </div>
      </div>
      <div className=" absolute top-[12%] lg:top-[20%] right-[-35px] md:right-[10px] lg:right-[20px] 2xl:right-[10%] z-10">
        <img
          src={kidImage}
          alt=""
          className=" mix-blend-normal w-[200px] lg:w-[400px] "
        />
      </div>
      <div
        className=" absolute top-[320px] left-0 right-0 lg:relative lg:top-0 xl:p-4"
        ref={containerRef}
      >
        <div className=" container mx-auto flex flex-col lg:flex-row justify-evenly items-center gap-4 lg:gap-4 bg-[#f4f5ff] p-4 xl:rounded">
          <div className=" flex flex-col justify-center items-center gap-2 line-violet">
            <PiStudentFill className=" w-8 h-8 text-[#1E3A8A]" />
            <h3 className=" font-bold text-2xl lg:text-4xl text-[#4B5563]">
              {isVisible && <CountUp start={1} end={450} duration={4} />}+
            </h3>
            <p className=" font-semibold text-base">Current Enrollment</p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2 line-teal">
            <SiGoogleclassroom className=" w-8 h-8 text-[#0D9488]" />
            <h3 className=" font-bold text-2xl lg:text-4xl text-[#4B5563]">
              {isVisible && <CountUp start={1} end={24} duration={4} />}+
            </h3>
            <p className=" font-semibold text-base">Current Classroom</p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2 line-gold">
            <FaChalkboardTeacher className=" w-8 h-8 text-[#D97706]" />
            <h3 className=" font-bold text-2xl lg:text-4xl text-[#4B5563]">
              {isVisible && <CountUp start={1} end={50} duration={4} />}+
            </h3>
            <p className=" font-semibold text-base">Qualified Teachers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
