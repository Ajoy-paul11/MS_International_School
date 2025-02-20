import React from "react";
import bgImage from "../assets/cultural-bg.jpeg";
import cultureImage1 from "../assets/culturealevent/cultural1.jpg";
import cultureImage2 from "../assets/culturealevent/cultural2.jpg";
import cultureImage3 from "../assets/culturealevent/cultural3.jpg";
import cultureImage4 from "../assets/culturealevent/cultural4.jpg";
import cultureImage5 from "../assets/culturealevent/cultural5.jpg";
import cultureImage6 from "../assets/culturealevent/cultural6.jpg";
import cultureImage7 from "../assets/culturealevent/cultural7.jpg";
import cultureImage8 from "../assets/culturealevent/cultural8.jpg";
import cultureImage9 from "../assets/culturealevent/cultural9.jpg";
import cultureImage10 from "../assets/culturealevent/cultural10.jpg";
import cultureImage11 from "../assets/culturealevent/cultural11.jpg";
import cultureImage12 from "../assets/culturealevent/cultural12.jpg";

function CulturalEvent() {
  return (
    <div>
      <div>
        <div
          className=" w-full h-[245px] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Background black effect */}
          <div className=" w-full h-full bg-black/60">
            <div className=" absolute top-[120px] w-full">
              <div className=" flex justify-center items-center gap-4">
                <div className="w-2 h-10 cta-color"></div>
                <h2 className=" text-2xl xl:text-3xl cta-text-color font-bold">
                  CULTURAL EVENT
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="  bg-color grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 p-8 lg:px-12 xl:px-16 ">
          {/* Images would come */}
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={cultureImage1} alt="culture-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={cultureImage2} alt="culture-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={cultureImage3} alt="culture-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={cultureImage4} alt="culture-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={cultureImage5} alt="culture-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={cultureImage6} alt="culture-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={cultureImage7} alt="culture-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={cultureImage8} alt="culture-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={cultureImage9} alt="culture-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={cultureImage10} alt="culture-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={cultureImage11} alt="culture-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={cultureImage12} alt="culture-image" className="" />
          </div>
        </div>
        <hr className=" border-color" />
      </div>
    </div>
  );
}

export default CulturalEvent;
