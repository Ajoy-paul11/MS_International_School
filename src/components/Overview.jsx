import React from "react";
import bgImage from "../assets/bg-image.jpg";
import overviewImage from "../assets/overview-image.jpg";

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
        <div className=" w-full cta-color flex flex-col gap-y-12 lg:flex-row justify-center items-center p-8 lg:px-4 xl:p-12">
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
      </div>
    </div>
  );
}

export default Overview;
