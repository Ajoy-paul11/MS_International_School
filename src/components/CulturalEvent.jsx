import React from "react";
import bgImage from "../assets/bg-image.jpg";

function CulturalEvent() {
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
                  CULTURAL EVENT
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
            {/* Images would come */}
        </div>
      </div>
    </div>
  );
}

export default CulturalEvent;