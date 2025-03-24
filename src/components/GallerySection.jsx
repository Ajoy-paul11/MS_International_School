import React from "react";
import Tilt from "react-parallax-tilt";
import image1 from "../assets/gallery/image1.jpg";
import image2 from "../assets/gallery/image2.jpg";
import image3 from "../assets/gallery/image3.jpg";
import image4 from "../assets/gallery/image4.webp";
import image5 from "../assets/gallery/image5.webp";
import image6 from "../assets/gallery/image6.webp";
import image7 from "../assets/gallery/image7.webp";
import image8 from "../assets/gallery/image8.webp";
import image9 from "../assets/gallery/image9.webp";

function GallerySection() {
  return (
    <div className=" py-8 xl:py-12">
      <div className=" w-[140px] h-[40px] mx-auto my-4 cta-color rounded-tl-full rounded-br-full flex justify-center items-center">
        <h2 className=" cta-text-color text-xl lg:text-3xl font-bold">
          Gallery
        </h2>
      </div>
      <div className="  bg-color grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 p-8 lg:px-12 xl:px-16 ">
        <Tilt className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect classroom">
          <img src={image1} alt="alt" loading="lazy" />
        </Tilt>
        <Tilt className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect computer-lab">
          <img src={image2} alt="alt" loading="lazy" />
        </Tilt>
        <Tilt className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect library-hall">
          <img src={image3} alt="alt" loading="lazy" />
        </Tilt>
        <Tilt className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect school-week">
          <img src={image4} alt="alt" loading="lazy" />
        </Tilt>
        <Tilt className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect school-week">
          <img src={image5} alt="alt" loading="lazy" />
        </Tilt>
        <Tilt className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect school-week">
          <img src={image6} alt="alt" loading="lazy" />
        </Tilt>
        <Tilt className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect orientation-day">
          <img src={image7} alt="alt" loading="lazy" />
        </Tilt>
        <Tilt className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect orientation-day">
          <img src={image8} alt="alt" loading="lazy" />
        </Tilt>
        <Tilt className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out cursor-pointer glass-effect orientation-day">
          <img src={image9} alt="alt" loading="lazy" />
        </Tilt>
      </div>
    </div>
  );
}

export default GallerySection;
