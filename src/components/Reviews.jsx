import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";

function Reviews() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <div className=" bg-[#f4f5ff]">
      <h2 className=" text-[#1E3A8A] text-3xl lg:text-4xl text-center font-bold p-4 my-4">
        Reviews
      </h2>
      <div className=" md:px-6 py-4 bg-[#f4f5ff] flex justify-center items-center">
        <Carousel
          withIndicators
          height={200}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          className=" w-full lg:w-2/3"
        >
          <Carousel.Slide className=" flex items-center justify-center">
            <div
              className=" p-2 px-4 w-[300px] md:w-[500px] xl:w-[700px] h-[200px] rounded-lg flex justify-center flex-col gap-3 md:gap-5"
              style={{
                background:
                  "linear-gradient(90deg, rgba(252,182,98,1) 0%, rgba(244,245,255,1) 55%, rgba(255,238,225,1) 90%)",
              }}
            >
              <p className=" text-base">
                I’m proud that my child is studying at MS International Public
                School, Mandya. I’m delighted to witness the development the
                school has brought in which eventually is making my son enjoy
                his academic as well as other activities in school.
              </p>
              <h2 className=" font-semibold text-xl"> - Parent</h2>
            </div>
          </Carousel.Slide>
          <Carousel.Slide className=" flex items-center justify-center">
            <div
              className="p-2 px-4 w-[300px] md:w-[500px] xl:w-[700px] h-[200px] rounded-lg flex justify-center flex-col gap-3 md:gap-5"
              style={{
                background:
                  "linear-gradient(90deg, rgba(252,182,98,1) 0%, rgba(244,245,255,1) 55%, rgba(255,238,225,1) 90%)",
              }}
            >
              <p className=" text-base">
                I’m Proud to be at MS International as the teachers have shared
                their knowledge not limited to just books but also educating us
                with day-to-day updates on world news. The school has provided
                us with a great education, a good ambiance to play in as well as
                a good hostel to rest.
              </p>
              <h2 className=" font-semibold text-xl"> - Student</h2>
            </div>
          </Carousel.Slide>
          <Carousel.Slide className=" flex items-center justify-center">
            <div
              className=" p-2 px-4 w-[300px] md:w-[500px] xl:w-[700px] h-[200px] rounded-lg flex justify-center flex-col gap-3 md:gap-5"
              style={{
                background:
                  "linear-gradient(90deg, rgba(252,182,98,1) 0%, rgba(244,245,255,1) 55%, rgba(255,238,225,1) 90%)",
              }}
            >
              <p className=" text-base">
                I have been a part of this school since its inception, and need
                to say the growth in quality of education provided to the growth
                in the students has been great. We have been trained to
                understand that every student is different from the other and as
                a teacher it’s our duty to enhance the performance of every
                student.
              </p>
              <h2 className=" font-semibold text-xl"> - Teacher</h2>
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
}

export default Reviews;
