import React from "react";
import bgImage from "../assets/bg-image2.png";



function Faculty() {
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
                  FACULTY
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="  bg-color grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 p-8 lg:px-12 xl:px-16 ">
          {/* <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect classroom">
            <img
              title="Click to see more"
              src={image1}
              alt="alt"
              className=""
            />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect computer-lab">
            <img
              title="Click to see more"
              src={image2}
              alt="alt"
              className=""
            />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect library-hall">
            <img
              title="Click to see more"
              src={image3}
              alt="alt"
              className=""
            />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect school-week">
            <img
              title="Click to see more"
              src={image4}
              alt="alt"
              className=""
            />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect school-week">
            <img
              title="Click to see more"
              src={image5}
              alt="alt"
              className=""
            />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect school-week">
            <img
              title="Click to see more"
              src={image6}
              alt="alt"
              className=""
            />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect orientation-day">
            <img
              title="Click to see more"
              src={image7}
              alt="alt"
              className=""
            />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect orientation-day">
            <img
              title="Click to see more"
              src={image8}
              alt="alt"
              className=""
            />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect orientation-day">
            <img
              title="Click to see more"
              src={image9}
              alt="alt"
              className=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Faculty;
