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
import scienceEvent14 from "../assets/scienceday/science-day14.jpg";
import scienceEvent15 from "../assets/scienceday/science-day15.jpeg";

const scienceEvents = [
  {
    title: "Drip Irrigation Model",
    image: scienceEvent1,
  },
  {
    title: "Air Pollution Model",
    image: scienceEvent2,
  },
  {
    title: "Town Model",
    image: scienceEvent3,
  },
  {
    title: "The Diagram of Brain",
    image: scienceEvent8,
  },
  {
    title: "Solar System Model",
    image: scienceEvent5,
  },
  {
    title: "Internal Organs Model",
    image: scienceEvent9,
  },
  {
    title: "Live Chemistry Practical",
    image: scienceEvent7,
  },
  {
    title: "Rain Water Harvesting Model",
    image: scienceEvent12,
  },
  {
    title: "Chemical Experiment",
    image: scienceEvent13,
  },
  {
    title: "Volcano Model",
    image: scienceEvent6,
  },
  {
    title: "Physics Project",
    image: scienceEvent10,
  },
  {
    title: "Environmental Model",
    image: scienceEvent11,
  },
  {
    title: "Internal Organ Explanation",
    image: scienceEvent14,
  },
  {
    title: "Science Exhibition",
    image: scienceEvent4,
  },
  {
    title: "Fire Extinguisher Model",
    image: scienceEvent15,
  },
];

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
          {scienceEvents.map((scieve, index) => (
            <div
              key={index}
              className=" relative bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] group"
            >
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/0 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center cta-text-color text-xl lg:text-3xl font-semibold p-4 text-center group-hover:opacity-0 transition-opacity duration-300">
                {scieve.title}
              </div>
              <img src={scieve.image} alt="science-day-image" className="" />
            </div>
          ))}
        </div>
        <hr className=" border-color" />
      </div>
    </div>
  );
}

export default ScienceEvent;
