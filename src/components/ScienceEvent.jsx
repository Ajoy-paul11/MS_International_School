import React from "react";
import bgImage from "../assets/science-bg.png";
import scienceEvent1 from "../assets/scienceday/science-day1.jpg";
import scienceEvent2 from "../assets/scienceday/science-day2.jpg";
import scienceEvent3 from "../assets/scienceday/science-day3.jpg";
import scienceEvent4 from "../assets/scienceday/science-day4.jpg";
import scienceEvent5 from "../assets/scienceday/science-day5.jpg";
import scienceEvent6 from "../assets/scienceday/science-day6.jpg";
import scienceEvent7 from "../assets/scienceday/science-day7.jpg";
import scienceEvent8 from "../assets/scienceday/science-day8.jpg";
import scienceEvent9 from "../assets/scienceday/science-day9.jpg";
import scienceEvent10 from "../assets/scienceday/science-day10.jpg";
import scienceEvent11 from "../assets/scienceday/science-day11.jpg";
import scienceEvent12 from "../assets/scienceday/science-day12.jpg";
import scienceEvent13 from "../assets/scienceday/science-day13.jpeg";
import scienceEvent14 from "../assets/scienceday/science-day14.jpeg";
import scienceEvent15 from "../assets/scienceday/science-day15.jpeg";

function ScienceEvent() {
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
                  SCIENCE EVENT
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="  bg-color grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 p-8 lg:px-12 xl:px-16">
          {/* Images would come */}
          <div className=" relative bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center cta-text-color text-xl lg:text-3xl font-semibold p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
              Drip Irrigation Model
            </div>
            <img src={scienceEvent1} alt="science-day-image" className="" />
          </div>
          <div className=" relative bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center cta-text-color text-xl lg:text-3xl font-semibold p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
              Air Polution Model
            </div>
            <img src={scienceEvent2} alt="science-day-image" className="" />
          </div>
          <div className=" relative bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center cta-text-color text-xl lg:text-3xl font-semibold p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
              Town Model
            </div>
            <img src={scienceEvent3} alt="science-day-image" className="" />
          </div>
          <div className=" relative bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center cta-text-color text-xl lg:text-3xl font-semibold p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
              The Diagram of Brain
            </div>
            <img src={scienceEvent8} alt="science-day-image" className="" />
          </div>
          <div className=" relative bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300 group" />
            <div className="absolute inset-0 flex items-center justify-center cta-text-color text-xl lg:text-3xl font-semibold p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
              Solar System Model
            </div>
            <img src={scienceEvent5} alt="science-day-image" className="" />
          </div>
          <div className=" relative bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300 group" />
            <div className="absolute inset-0 flex items-center justify-center cta-text-color text-xl lg:text-3xl font-semibold p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
              Internal Organs Model
            </div>
            <img src={scienceEvent9} alt="science-day-image" className="" />
          </div>
          <div className=" relative bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300 group" />
            <div className="absolute inset-0 flex items-center justify-center cta-text-color text-xl lg:text-3xl font-semibold p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
              Live Chemistry Practical
            </div>
            <img src={scienceEvent7} alt="science-day-image" className="" />
          </div>
          <div className=" relative bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center cta-text-color text-xl lg:text-3xl font-semibold p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
              Science Exibition
            </div>
            <img src={scienceEvent4} alt="science-day-image" className="" />
          </div>
          <div className=" relative bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center cta-text-color text-xl lg:text-3xl font-semibold p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
              Volcano Model
            </div>
            <img src={scienceEvent6} alt="science-day-image" className="" />
          </div>
          <div className=" relative bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center cta-text-color text-xl lg:text-3xl font-semibold p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
              Physics Project
            </div>
            <img src={scienceEvent10} alt="science-day-image" className="" />
          </div>
          <div className=" relative bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300 " />
            <div className="absolute inset-0 flex items-center justify-center cta-text-color text-xl lg:text-3xl font-semibold p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
              Environmental Model
            </div>
            <img src={scienceEvent11} alt="science-day-image" className="" />
          </div>
          <div className=" relative bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300 " />
            <div className="absolute inset-0 flex items-center justify-center cta-text-color text-xl lg:text-3xl font-semibold p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
              Rain Water Harvesting Model
            </div>
            <img src={scienceEvent12} alt="science-day-image" className="" />
          </div>
          <div className=" relative bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300 " />
            <div className="absolute inset-0 flex items-center justify-center cta-text-color text-xl lg:text-3xl font-semibold p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
              Chemical Experiment
            </div>
            <img src={scienceEvent13} alt="science-day-image" className="" />
          </div>
          <div className=" relative bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300 " />
            <div className="absolute inset-0 flex items-center justify-center cta-text-color text-xl lg:text-3xl font-semibold p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
              Internal Organ Explaination
            </div>
            <img src={scienceEvent14} alt="science-day-image" className="" />
          </div>
          <div className=" relative bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300 " />
            <div className="absolute inset-0 flex items-center justify-center cta-text-color text-xl lg:text-3xl font-semibold p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
              Fire Extinguisher Model
            </div>
            <img src={scienceEvent15} alt="science-day-image" className="" />
          </div>
        </div>
        <hr className=" border-color" />
      </div>
    </div>
  );
}

export default ScienceEvent;
