import React from "react";
import bgImage from "../assets/other-event-bg.jpeg";
import event1 from "../assets/otherevent/event1.webp";
import event2 from "../assets/otherevent/event2.webp";
import event3 from "../assets/otherevent/event3.webp";
import event4 from "../assets/otherevent/event4.webp";
import event5 from "../assets/otherevent/event5.webp";
import event6 from "../assets/otherevent/event6.webp";
import event7 from "../assets/otherevent/event7.webp";
import event8 from "../assets/otherevent/event8.webp";
import event9 from "../assets/otherevent/event9.webp";
// import event10 from "../assets/otherevent/event10.jpeg";
import event11 from "../assets/otherevent/event11.jpeg";
import event12 from "../assets/otherevent/event12.jpeg";
import event13 from "../assets/otherevent/event13.jpeg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function OtherSchoolEvent() {
  const images = [
    event1,
    event2,
    event3,
    event4,
    event5,
    event6,
    event7,
    event8,
    event9,
    event11,
    event12,
    event13,
  ];

  return (
    <div>
      <div>
        <div
          className=" w-full h-[245px] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})`}}
        >
          {/* Background black effect */}
          <div className=" w-full h-full bg-black/60">
            <div className=" absolute top-[120px] w-full">
              <div className=" flex justify-center items-center gap-4">
                <div className="w-2 h-10 cta-color"></div>
                <h2 className=" text-2xl xl:text-3xl cta-text-color font-bold">
                  OTHER SCHOOL EVENT
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
              className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
            >
              <LazyLoadImage src={image} alt="event-image" effect="blur" loading="lazy"/>
            </div>
          ))}
        </div>
        <hr className=" border-color" />
      </div>
    </div>
  );
}

export default OtherSchoolEvent;
