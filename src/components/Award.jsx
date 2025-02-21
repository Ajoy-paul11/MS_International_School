import React from "react";
import bgImage from "../assets/bg-image.jpg";
import award1 from "../assets/award/award1.jpg";
import award2 from "../assets/award/award2.jpg";
import award3 from "../assets/award/award3.jpg";
import award4 from "../assets/award/award4.jpg";
import award5 from "../assets/award/award5.jpg";
import award6 from "../assets/award/award6.jpg";
import award7 from "../assets/award/award7.jpeg";
import award8 from "../assets/award/award8.jpeg";


function Award() {
  return (
    <div>
      <div>
        <div
          className=" w-full h-[245px] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Background black effect */}
          <div className=" w-full h-full bg-black/50">
            <div className=" absolute top-[120px] w-full">
              <div className=" flex justify-center items-center gap-4">
                <div className="w-2 h-10 cta-color"></div>
                <h2 className=" text-2xl xl:text-3xl cta-text-color font-bold">
                  AWARDS
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="  bg-color grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 p-8 lg:px-12 xl:px-16 ">
          {/* Images would come */}
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={award1} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={award2} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={award3} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={award4} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={award5} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={award6} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={award7} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={award8} alt="science-day-image" className="" />
          </div>
        </div>
        <hr className=" border-color"/>
      </div>
    </div>
  );
}

export default Award;
