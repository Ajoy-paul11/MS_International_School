import React, { useState, useEffect } from "react";
// import banner1 from "../assets/banner/banner1.webp";
// import banner2 from "../assets/banner/banner2.webp";
// import banner3 from "../assets/banner/banner3.webp";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Form from "./Form";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
   "https://ik.imagekit.io/ajoy/banner/banner1.webp?updatedAt=1742536811478",
    "https://ik.imagekit.io/ajoy/banner/banner2.webp?updatedAt=1742536810082",
    "https://ik.imagekit.io/ajoy/banner/banner3.webp?updatedAt=1742536810342",
  ];

  const buttonText = "ADMISSIONS"

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]); 

  return (
    <>
    {isOpen && <div className=" fixed inset-0 flex items-center justify-center overflow-hidden z-[100] bg-white/40">
      <div className=" relative  mx-auto">
        <div className=" relative rounded-lg shadow-xl lg:w-[500px]">
          <div className=" absolute right-1 top-3 z-10 hover:cursor-pointer cta-bg-color  hover:bg-gray-300 rounded-full">
            <RxCross2
              className=" primary-text-color h-5 w-5 duration-200 bg-blue-200 rounded-full "
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className=" w-[360px]">
          <Form />
          </div>
        </div>
      </div>
    </div>
    }
    <div className="relative w-full h-full overflow-hidden">
    <button
          className={` block lg:hidden fixed right-0 top-[40%] cta-color text-white z-50 px-2 py-2 rounded-l-md shadow-[0_0_10px_rgba(0,0,0,0.25)] shadow-[#234297] transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
          }`}
          onClick={() => setIsOpen(true)}
          
          >
          <div className="flex flex-col items-center">
            {buttonText.split("\n").map((word, wordIndex) => (
              <React.Fragment key={wordIndex}>
                {word.split("").map((char, charIndex) => (
                  <span
                  key={`${wordIndex}-${charIndex}`}
                  className="text-xs lg:text-sm font-semibold"
                  >
                    {char}
                  </span>
                ))}
                {wordIndex === 0 && <div className="h-1 lg:h-2" />}{" "}
                {/* Add space between words */}
              </React.Fragment>
            ))}
          </div>
      </button>
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
            className={`w-full h-full flex-shrink-0 `}
          >
            <picture>
              <source srcSet={`${image}?w=480`} media="(max-width: 480px)"/>
              <source srcSet={`${image}?w=768`} media="(max-width: 768px)"/>
              <source srcSet={`${image}?w=1024`} media="(min-width: 769px)"/>
              <source srcSet={`${image}?w=1280`} media="(min-width: 1025px)"/>
            <img
              src={image || "/placeholder.svg"}
              loading="lazy"
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
              />
            </picture>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-10 z-10">
        <button
          onClick={prevSlide}
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
        className=" mt-2"
          aria-label="Next slide"
        >
          <FaArrowDown className="h-4 lg:h-5 w-4 lg:w-5 text-white" />
        </button>
      </div>
      <div className="hidden lg:block absolute top-8 xl:top-[15%] right-6 z-10 w-[300px] xl:w-[360px]">
        <Form />
      </div>
    </div>
    </>
  );
}

export default HeroSection;
