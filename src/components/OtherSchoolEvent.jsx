import React from "react";
import bgImage from "../assets/other-event-bg.jpeg";
import event1 from "../assets/otherevent/event1.jpg";
import event2 from "../assets/otherevent/event2.jpg";
import event3 from "../assets/otherevent/event3.jpg";
import event4 from "../assets/otherevent/event4.jpg";
import event5 from "../assets/otherevent/event5.jpg";
import event6 from "../assets/otherevent/event6.jpg";
import event7 from "../assets/otherevent/event7.jpg";
import event8 from "../assets/otherevent/event8.jpg";
import event9 from "../assets/otherevent/event9.jpeg";
import event10 from "../assets/otherevent/event10.jpeg";
import event11 from "../assets/otherevent/event11.jpeg";

function OtherSchoolEvent() {
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
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={event1} alt="event-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={event2} alt="event-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={event3} alt="event-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={event4} alt="event-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={event5} alt="event-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={event6} alt="event-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={event7} alt="event-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={event8} alt="event-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={event9} alt="event-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <img src={event10} alt="event-image" className="" />
          </div>
          <div className=" bg-color rounded-lg overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] flex items-center">
            <img src={event11} alt="event-image" className="" />
          </div>
        </div>
        <hr className=" border-color" />
      </div>
    </div>
  );
}

export default OtherSchoolEvent;
