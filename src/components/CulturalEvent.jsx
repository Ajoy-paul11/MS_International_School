import React from "react";
import bgImage from "../assets/cultural-bg.jpeg";
import cultureImage1 from "../assets/culturealevent/cultural1.webp";
import cultureImage2 from "../assets/culturealevent/cultural2.webp";
import cultureImage3 from "../assets/culturealevent/cultural3.webp";
import cultureImage4 from "../assets/culturealevent/cultural4.webp";
import cultureImage5 from "../assets/culturealevent/cultural5.webp";
import cultureImage6 from "../assets/culturealevent/cultural6.webp";
import cultureImage7 from "../assets/culturealevent/cultural7.webp";
import cultureImage8 from "../assets/culturealevent/cultural8.webp";
import cultureImage9 from "../assets/culturealevent/cultural9.webp";
import cultureImage10 from "../assets/culturealevent/cultural10.webp";
import cultureImage11 from "../assets/culturealevent/cultural11.webp";
import cultureImage12 from "../assets/culturealevent/cultural12.webp";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function CulturalEvent() {
  const images = [
    cultureImage1,
    cultureImage2,
    cultureImage3,
    cultureImage4,    
    cultureImage5,
    cultureImage6,
    cultureImage7,
    cultureImage8,
    cultureImage9,
    cultureImage10,
    cultureImage11,
    cultureImage12,
  ];


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
          {images.map((image, index) => (
            <div
              key={index}
              className=" bg-color rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)] w-full h-full"
            >
              <LazyLoadImage src={image} alt="culture-image" effect="blur" loading="lazy" wrapperProps={{
              style: {transitionDelay: "1s" , width: "100%", height: "100%"},
             }} className=" rounded-lg"/>
            </div>
          ))}
        </div>
        <hr className=" border-color" />
      </div>
    </div>
  );
}

export default CulturalEvent;
