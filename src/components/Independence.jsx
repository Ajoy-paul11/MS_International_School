import React from "react";
import bgImage from "../assets/independence-bg.jpeg";
import inde1 from "../assets/independenceday/inde1.jpeg";
import inde2 from "../assets/independenceday/inde2.jpeg";
import inde3 from "../assets/independenceday/inde3.jpeg";
import inde4 from "../assets/independenceday/inde4.jpeg";
import inde5 from "../assets/independenceday/inde5.jpeg";
import inde6 from "../assets/independenceday/inde6.jpeg";
import inde7 from "../assets/independenceday/inde7.jpeg";
import inde8 from "../assets/independenceday/inde8.jpeg";
import inde9 from "../assets/independenceday/inde9.jpeg";
import inde10 from "../assets/independenceday/inde10.jpeg";
import inde11 from "../assets/independenceday/inde11.jpeg";
import inde12 from "../assets/independenceday/inde12.jpeg";
import inde13 from "../assets/independenceday/inde13.jpeg";
import inde14 from "../assets/independenceday/inde14.jpeg";
import inde15 from "../assets/independenceday/inde15.jpeg";


function Independence() {
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
                  INDEPENDENCE DAY
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="  bg-color grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 p-8 lg:px-12 xl:px-16 ">
          {/* Images would come */}
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={inde1} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={inde3} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={inde4} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={inde2} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={inde5} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={inde6} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={inde7} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={inde8} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={inde9} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={inde10} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={inde1} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={inde12} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={inde13} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={inde14} alt="science-day-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={inde15} alt="science-day-image" className="" />
          </div>
        </div>
        <hr className=" border-color"/>
      </div>
    </div>
  );
}

export default Independence;
