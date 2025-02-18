import React from "react";
import { FaPuzzlePiece } from "react-icons/fa6";
import { GiSchoolBag } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";

function ProgrammeSection() {
  return (
    <div>
      <div className=" w-[330px] h-[40px] mx-auto my-4 cta-color rounded-tl-full rounded-br-full flex justify-center items-center">
        <h2 className=" cta-text-color text-xl lg:text-3xl font-bold">Programme Offered</h2>
      </div>
      <div className=" w-full cta-color">
        <div className=" p-6 lg:p-8">
          <div className=" max-w-7xl mx-auto h-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-10 p-2">
            <div className=" w-full p-4 lg:p-6 rounded-lg bg-color primary-text-color">
                <h2 className=" text-3xl lg:text-4xl font-bold text-start mb-8 pl-2">CBSE</h2>
                <div className=" font-bold flex justify-start items-center gap-8 px-8 lg:px-0">
                    <div className=" flex flex-col justify-center items-start gap-8">
                        <FaPuzzlePiece className=" w-8 h-8"/>
                        <GiSchoolBag className=" w-8 h-8"/>
                        <PiStudentFill className=" w-8 h-8"/>
                    </div>
                    <div className=" flex flex-col justify-center items-start gap-8">
                        <p className=" text-2xl lg:text-3xl">Pre-School</p>
                        <p className=" text-2xl lg:text-3xl">Primary</p>
                        <p className=" text-2xl lg:text-3xl">Secondary</p>
                    </div>
                </div>
            </div>
            <div className=" lg:w-[150%] cta-text-color text-lg lg:text-xl font-semibold ">
             <b> MS International Public school</b> aims at offering all our students a
              broad and balanced curriculum that provides rewarding and
              stimulating activities to prepare them for the best social and
              cultural life. Whether it is our books or hands-on training we
              make sure each student gets personal attention to cope up and
              flourish in every subject for better scores and a brighter future.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgrammeSection;
