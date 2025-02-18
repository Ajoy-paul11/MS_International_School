import React from "react";
import chairman from "../assets/chairman.jpeg";

function ChairmanSection() {
  return (
    <div className=" py-8">
      <div className=" w-[330px] h-[40px] mx-auto my-4 cta-color rounded-tl-full rounded-br-full flex justify-center items-center">
        <h2 className=" cta-text-color text-xl lg:text-3xl font-bold">Chairman Message</h2>
      </div>
      <div className=" w-full bg-color flex flex-col gap-y-12 lg:flex-row justify-center items-center p-8 lg:p-12">
        <div className=" w-full lg:w-1/2 primary-text-color p-2 order-2 text-lg lg:text-xl xl:text-3xl text-center font-bold">
          <p className="my-2 ">
            We at MS International aim at inspiring our students to dream more,
            learn more, do more, and become more in their respective journeys of
            life.
            <p className="my-2">
              Few things have greater importance to parents than the education
              of their children. They look for academic excellence, good values,
              and discipline for their children. Choosing the right school for
              them is, therefore, a crucial decision.
            </p>
          </p>
        </div>
        <div className=" w-full lg:w-1/2 order-1 lg:order-2">
          <img
            src={chairman}
            alt="chairman-image"
            className=" h-[300px] lg:h-[450px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default ChairmanSection;
