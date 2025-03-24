import React, { useEffect, useRef, useState } from "react";
import { PiStudentFill } from "react-icons/pi";
import CountUp from "react-countup";
import { SiGoogleclassroom } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";

function CountSection() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <div className=" py-8" ref={containerRef}>
      <div className=" container mx-auto flex flex-col lg:flex-row justify-evenly items-center gap-4 lg:gap-4 bg-[#f4f5ff] p-4 xl:rounded shadow-[0_0_10px_rgba(0,0,0,0.25)]">
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
  );
}

export default CountSection;
