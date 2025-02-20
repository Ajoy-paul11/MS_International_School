import React from "react";
import bgImage from "../assets/governing-bg.jpeg";
import president from "../assets/president.jpeg";


function Principal() {
  return (
    <div>
      <div>
        <div
          className=" w-full h-[245px] bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` , backgroundPosition: "top center" }}
        >
          {/* Background black effect */}
          <div className=" w-full h-full bg-black/60">
            <div className=" absolute top-[120px] w-full">
              <div className=" flex justify-center items-center gap-4">
                <div className="w-2 h-10 cta-color"></div>
                <h2 className=" text-2xl xl:text-3xl cta-text-color font-bold">
                  GOVERNING BODY
                </h2>
              </div>
            </div>
          </div>
          
        </div>
        <div className=" w-full cta-color flex flex-col gap-y-12 lg:flex-row justify-center items-center p-8 lg:p-12">
            <div className=" w-full lg:w-1/2 cta-text-color p-2 order-2 text-lg lg:text-xl xl:text-3xl text-center font-bold">
                <h3 className="my-2 text-3xl font-bold text-center relative top-[-15px] lg:top-[-50px]"> MESSAGE FROM WORKING PRESIDENT</h3>
              <p className="my-2 ">
                We at MS International aim at inspiring our students to dream
                more, learn more, do more, and become more in their respective
                journeys of life.
                <p className="my-2">
                  Few things have greater importance to parents than the
                  education of their children. They look for academic
                  excellence, good values, and discipline for their children.
                  Choosing the right school for them is, therefore, a crucial
                  decision.
                </p>
              </p>
            </div>
            <div className=" w-full lg:w-1/2 order-1 lg:order-2">
              <img
                src={president}
                alt="president-image"
                className=" h-[300px] lg:h-[450px] mx-auto rounded-md"
              />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Principal;
