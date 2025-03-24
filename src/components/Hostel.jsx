import React from "react";
import bgImage from "../assets/hostel-bg.jpeg";
import hostel1 from "../assets/hostel/hostel1.jpeg";
import hostel2 from "../assets/hostel/hostel2.jpeg";
import hostel3 from "../assets/hostel/hostel3.jpeg";
import hostel4 from "../assets/hostel/hostel4.jpeg";
import hostel5 from "../assets/hostel/hostel5.jpeg";
import kitchen1 from "../assets/hostel/kitchen1.jpeg";
import kitchen2 from "../assets/hostel/kitchen2.jpeg";
import kitchen3 from "../assets/hostel/kitchen3.jpeg";
import kitchen4 from "../assets/hostel/kitchen4.jpeg";
import kitchen5 from "../assets/hostel/kitchen5.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Hostel() {
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
                  HOSTEL
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full cta-color flex flex-col gap-y-12 lg:flex-row justify-center items-center p-8 px-2 md:px-0 lg:px-4 xl:p-12">
          <div className=" w-full lg:w-1/2 cta-text-color p-2 order-2 text-lg lg:text-xl xl:text-2xl md:px-4">
            <div className="my-2 ">
              The Institute provides boarding and lodging facilities for boys
              and students staying away from home. A new hostel provides quality
              food and hygienic living spaces. Students will have to adhere to
              hostel timings and rules without compromise.
              <p className="my-6">
                Being located on the campus, the hostellers are free to make use
                of the amenities.
              </p>
            </div>
          </div>
          <div className=" w-full lg:w-1/2 order-1 lg:order-2">
            <div className=" px-2 md:px-4 lg:px-0 xl:px-4">
              <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div>
                  <img
                    src={hostel1}
                    alt="hostel-image"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src={hostel2}
                    alt="hostel-image"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src={hostel3}
                    alt="hostel-image"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src={hostel4}
                    alt="hostel-image"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src={hostel5}
                    alt="hostel-image"
                    className="rounded-lg"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div className=" w-full cta-color flex flex-col gap-y-12 lg:flex-row justify-center items-center p-8 px-2 md:px-0 lg:px-4 xl:p-12">
          <div className=" w-full lg:w-1/2 order-1 lg:order-2">
            <div className=" px-2 md:px-4 lg:px-0 xl:px-4">
              <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div>
                  <img
                    src={kitchen1}
                    alt="kitchen-image"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src={kitchen2}
                    alt="kitchen-image"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src={kitchen3}
                    alt="kitchen-image"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src={kitchen4}
                    alt="kitchen-image"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src={kitchen5}
                    alt="kitchen-image"
                    className="rounded-lg"
                  />
                </div>
              </Carousel>
            </div>
          </div>
          <div className=" w-full lg:w-1/2 cta-text-color p-2 order-2 text-lg xl:text-2xl md:px-4">
            <div className="my-2 ">
              The Hostel provides quality food and hygienic living space. The
              hostel is located inside the school campus to enable an easy and
              quick commute.
              <div className="mt-2">
                <h4 className="mt-2 font-semibold">Mess Includes:</h4>
                <ul className="list-disc list-inside">
                  <li>
                    Freshly prepared and hygienic meals for kids at the hostel.
                  </li>
                  <li>Breakfast + Lunch + Dinner are provided on all days.</li>
                  <li>
                    Breakfast + Lunch + Dinner on Sundays and school holidays as
                    well.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hostel;
