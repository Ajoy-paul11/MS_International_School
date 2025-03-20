import React from "react";
import schoolView from "../assets/top-view.webp";
import logo from "../assets/Logo-02.png";

function AboutSection() {
  return (
    <div>
      <div className=" w-[140px] h-[40px] mx-auto my-4 cta-color rounded-tl-full rounded-br-full flex justify-center items-center">
        <h2 className=" cta-text-color text-xl lg:text-3xl font-bold">About</h2>
      </div>
      <div
        className=" w-full bg-center bg-cover"
        style={{ backgroundImage: `url(${schoolView})` }}
      >
        <div className=" w-full h-full bg-black/70">
          <div className=" p-6 lg:p-8">
            <div className=" container mx-auto h-full flex flex-col justify-center items-center gap-8 lg:gap-10 p-2">
              {/* <div className=" w-[140px] h-[40px] cta-color rounded-tl-full rounded-br-full flex justify-center items-center">
                <h2 className=" cta-text-color text-xl lg:text-3xl font-bold">
                  About
                </h2>
              </div> */}
              <div >
                <img src={logo} alt="logo" className=" w-[300px]" />
              </div>
              <div className=" px-4 lg:px-16 cta-text-color">
                <p className=" text-base lg:text-lg text-center font-semibold">
                  <strong> MS International</strong> Mandya is a Co-educational
                  School, founded in 2017 under the chairmanship of Sri. M
                  Srinivas. Located in Hanekere, Mandya. The only school in
                  Mandya to provide facilities with all the international
                  standards. remains committed to providing an academically
                  rigorous education to students who will walk out of school
                  ready for lives of leadership and service to their community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
