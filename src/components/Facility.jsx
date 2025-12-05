import React from "react";
import bgImage from "../assets/bg-image2.png";
import library from "../assets/facility/library-hall.jpg";
import classroom from "../assets/facility/projector-classroom.jpg";
import computer from "../assets/facility/computer-lab.jpg";
import transport from "../assets/facility/buses.jpg";
import sports from "../assets/facility/sport-room.png";
import lab from "../assets/facility/science-lab.jpg";
import agriLab from "../assets/facility/agriculture-lab.png";

const facility = [
  {
    id: 1,
    title: "LIBRARY",
    description:
      " The Library which is the main resource center for students and the faculty will have a collection of over 1000 volumes with a special reference section and a reading room of CDs and DVDs to supplement the book collection.",
    image: library,
  },
  {
    id: 2,
    title: "PROJECTOR CLASSROOM",
    description:
      "Classrooms are designed such that every student gets the teacher's maximum individual attention. Large well-ventilated classrooms with windows, lights & fans to ensure physical comfort for learning. Each of our classrooms has smart boards to show the topics and concepts more effectively. The huge permanent board is placed at a vantage point for viewing. Also providing classrooms with projectors for better understanding of concepts.",
    image: classroom,
  },
  {
    id: 3,
    title: "COMPUTER LAB",
    description:
      "The computer laboratory has over 50 computers with a dedicated broadband Internet connection for students. Student usage of media and technology is monitored and supervised by teachers.",
    image: computer,
  },
  {
    id: 4,
    title: "TRANSPORT",
    description:
      "MS International assures the safety, and security of each and every student, experienced bus operator, and bus attendant who take care of bus services to and from school to all parts of city.",
    image: transport,
  },
  {
    id: 5,
    title: "SPORTS ROOM",
    description:
      "We at MS International see that kids enjoy each and every aspect of their childhood by giving them the best education as well as providing the best of sports equipment.",
    image: sports,
  },
  {
    id: 6,
    title: "SCIENCE LAB",
    description:
      "Equipped with fully functional physics, chemistry and biology laboratories so that the students can conduct experiments in order to gain first-hand experience of the concepts learned in the classrooms.",
    image: lab,
  },
  {
    id: 7,
    title: "AGRICULTURAL LAB",
    description:
      "At MS International, we have built an agricultural lab for the students for them to stick to their roots and understand the importance & difficulty of farmers, and eventually, train them for the betterment of the society.",
    image: agriLab,
  },
];

function Facility() {
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
                  FACILITIES
                </h2>
              </div>
            </div>
          </div>
        </div>
        {facility.map((item, _) =>
          item.id % 2 !== 0 ? (
            <div key={item.id} className=" w-full cta-color flex flex-col gap-y-12 lg:flex-row justify-center items-center px-2 p-8 md:px-0 lg:px-4 xl:p-12">
              <div className=" w-full lg:w-1/2 cta-text-color p-2 order-2 text-lg lg:text-xl xl:text-2xl font-bold">
                <h3 className="my-2 text-3xl font-bold text-center relative top-[-15px] lg:top-[-30px]">
                  {" "}
                  {item.title}
                </h3>
                <p className="my-2 lg:pr-4 xl:pr-6 text-start lg:text-end">
                  {item.description}
                </p>
              </div>
              <div className=" w-full lg:w-1/2 order-1 lg:order-2">
                <img
                  src={item.image}
                  alt="library-image"
                  className=" h-[300px] lg:h-[450px] mx-auto rounded-md"
                />
              </div>
            </div>
          ) : (
            <div key={item.id} className=" w-full cta-color flex flex-col gap-y-12 lg:flex-row justify-center items-center px-2 p-8 md:px-0 lg:px-4 xl:p-12">
              <div className=" w-full lg:w-1/2 order-1 lg:order-2">
                <img
                  src={item.image}
                  alt="classroom-image"
                  className=" h-[300px] lg:h-[450px] mx-auto rounded-md"
                />
              </div>
              <div className=" w-full lg:w-1/2 cta-text-color p-2 order-2 text-lg lg:text-xl xl:text-2xl font-bold">
                <h3 className="my-2 text-3xl font-bold text-center relative top-[-15px] lg:top-[-30px]">
                  {" "}
                  {item.title}
                </h3>
                <p className="my-2 lg:pl-4 xl:pl-6">{item.description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Facility;
