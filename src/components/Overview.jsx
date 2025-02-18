import React from "react";
import bgImage from "../assets/bg-image.jpg";
import overviewImage from "../assets/overview-image.jpg";
import { AspectRatio } from "@mantine/core";

function Overview() {
  return (
    <div>
      <div>
        <div
          className=" w-full h-[245px] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Background black effect */}
          <div className=" w-full h-full bg-black/50">
            <div className=" absolute top-[120px] w-full">
              <div className=" flex justify-center items-center gap-4">
                <div className="w-2 h-10 cta-color"></div>
                <h2 className=" text-2xl xl:text-3xl cta-text-color font-bold">
                  OVERVIEW
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full cta-color flex flex-col gap-y-12 lg:flex-row justify-center items-center p-8 px-2 md:px-0 lg:px-4 xl:p-12">
          <div className=" w-full lg:w-1/2 cta-text-color p-2 order-2 text-lg lg:text-xl xl:text-2xl text-center font-bold">
            <p className="my-2 ">
              MS International Public School. The only school in Mandya to
              provide facilities with all the international standards. remains
              committed to providing an academically rigorous education to
              students who will walk out of school ready for lives of leadership
              and service to their community. From Literacy to music and arts,
              each day at MS International is filled with activities that are
              both enriching and fun.
              <p className="my-2">
                We strive to be committed to the students we are privileged to
                serve. We have the best of teachers & staff working each day for
                the betterment of students. Providing them education with
                speech, written and practical’s.
              </p>
            </p>
          </div>
          <div className=" w-full lg:w-1/2 order-1 lg:order-2">
            <img
              src={overviewImage}
              alt="chairman-image"
              className=" h-[300px] lg:h-[450px] mx-auto rounded-md"
            />
          </div>
        </div>
        <div className=" primary-text-color py-8 lg:py-12 bg-color">
          <h3 className=" my-2 text-2xl md:text-3xl xl:text-4xl font-bold text-center mb-8 lg:mb-12">
            Life at MS International Public School
          </h3>
          <div className=" px-4 max-w-3xl mx-auto">
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/XkvMDB2_FG8?si=L9xWxOmc5JeRQPzd"
                title="YouTube video player"
                style={{ border: 0, borderRadius: "12px" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>
          </div>
        </div>
        <hr className=" border-color"/>
      </div>
    </div>
  );
}

export default Overview;
