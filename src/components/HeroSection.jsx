import React, { useState, useEffect } from "react";
import banner1 from "../assets/banner/banner1.jpg";
import banner2 from "../assets/banner/banner2.jpg";
import banner3 from "../assets/banner/banner3.jpg";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
//   const [slideDirection, setSlideDirection] = useState("next"); // 'next' or 'prev'

  const images = [
    banner1,
    banner2,
    banner3
  ];

  const nextSlide = () => {
    // setSlideDirection("next");
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    // setSlideDirection("prev");
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    // const timer = setInterval(() => {
    //   setSlideDirection("next");
    //   setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    // }, 5000);
    const timer = setInterval(nextSlide, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]); 

  return (
    // <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:[600px] overflow-hidden">
    <div className="relative w-full h-full overflow-hidden">
    
      {/* Images */}
      <div
        className="w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            // className={`w-full h-full flex-shrink-0 transition-transform duration-500 `}
            className={`w-full h-full flex-shrink-0 `}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
            //   className="w-full h-full object-cover"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-10 z-10">
        <button
          onClick={prevSlide}
        //   className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-colors"
        className=" mb-2"
          aria-label="Previous slide"
        >
          <FaArrowUp className="h-4 lg:h-5 w-4 lg:w-5 text-white" />
        </button>
        {/* Slide Indicators */}
        <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 flex flex-col gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
        //   className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-colors"
        className=" mt-2"
          aria-label="Next slide"
        >
          <FaArrowDown className="h-4 lg:h-5 w-4 lg:w-5 text-white" />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
