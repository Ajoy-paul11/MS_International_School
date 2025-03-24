import React, { useState } from "react";
import bgImage from "../assets/bg-image.jpg";
import overviewImage from "../assets/overview-image.jpg";
import ProgrammeCard from "./ProgrammeCard";
import preSchool from "../assets/programme/pre-school-kid.jpg";
import primarySchool from "../assets/programme/primary-kid.jpg";
import secondarySchool from "../assets/programme/secondary-student.jpg";
import ITSkills from "../assets/programme/skill-course.jpg";

function Programme() {
  const [openContent, setOpenContent] = useState(false);

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
                  PROGRAMME
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full cta-color flex flex-col gap-y-12 justify-center items-center p-8 lg:px-4 xl:p-12">
          <div className=" max-w-5xl cta-text-color p-2 text-lg lg:text-xl xl:text-2xl font-bold">
            <p className="my-2 indent-4">
              MS International Public school aims at offering all our students a
              broad and balanced curriculum that provides rewarding and
              stimulating activities to prepare them for the best social and
              cultural life.
            </p>
            <p className="my-2 indent-4">
                Whether it is our books or hands-on training we make sure each
                student gets personal attention to cope up and flourish in every
                subject for better scores and a brighter future.
              </p>
          </div>
          <div className=" container mx-auto flex flex-col lg:flex-row justify-evenly items-center gap-10 lg:grid grid-cols-2 place-items-center xl:flex">
            <ProgrammeCard
              pic={preSchool}
              phase={"Pre-School"}
              standard={"LKG / UKG"}
              classname={"text-[#1E3A8A]"}
              bgbutton={"pre-school"}
              setOpenContent={setOpenContent}
              openContent={openContent}
            />
            <ProgrammeCard
              pic={primarySchool}
              phase={"Primary School"}
              standard={"I - V"}
              classname={"text-[#0D9488]"}
              bgbutton={"primary-school"}
              setOpenContent={setOpenContent}
              openContent={openContent}
            />
            <ProgrammeCard
              pic={secondarySchool}
              phase={"Secondary School"}
              standard={"VI - X"}
              classname={"text-[#4B5563]"}
              bgbutton={"secondary-school"}
              setOpenContent={setOpenContent}
              openContent={openContent}
            />
            <ProgrammeCard
              pic={ITSkills}
              phase={"IT and Skills"}
              standard={"Course"}
              classname={"text-[#7C3AED]"}
              bgbutton={"skill-course"}
              setOpenContent={setOpenContent}
              openContent={openContent}
            />
          </div>
          <div className=" container mx-auto flex flex-col justify-evenly items-center gap-6 cta-text-color">
            {openContent && (
              <div className=" hidden xl:flex w-full gap-6 justify-evenly ">
                <h3 className=" w-[260px] xl:w-[290px] my-2 text-2xl font-bold ">
                  Pre-School
                </h3>
                <h3 className=" w-[260px] xl:w-[290px] my-2 text-2xl font-bold">
                  Primary Grade I-V
                </h3>
                <h3 className=" w-[260px] xl:w-[290px] my-2 text-2xl font-bold ">
                  Secondary School VI- X
                </h3>
                <h3 className=" w-[260px] xl:w-[290px] my-2 text-2xl font-bold ">
                  IT and Skills
                </h3>
              </div>
            )}
            {openContent && (
              <div className=" hidden xl:flex w-full gap-6 justify-evenly ">
                <div className=" w-[260px] xl:w-[290px] text-lg lg:text-xl">
                  Our LKG & UKG classrooms inspire awe and wonder and equate
                  learning with a sense of magic and freedom. We believe that
                  children are not just empty vessels to be filled with facts.
                  They are extraordinary humans capable of understanding complex
                  ideas. We do not water down for academics but rather present a
                  rich feast of ideas.
                </div>
                <div className=" w-[260px] xl:w-[290px] text-lg lg:text-xl">
                  Our Primary classes use a hands-on, multi-disciplinary, and
                  multi-sensory approach to nurture creativity, imagination, and
                  social skills. With personalized one-on-one teaching, our
                  teachers maximize learning. These years emphasize inquiry and
                  wonder, fostering a foundation for lifelong learning.
                </div>
                <div className=" w-[260px] xl:w-[290px]">
                  <ul className=" text-lg lg:text-xl">
                    <li type="circle">
                      Empowering Children with the confidence to face the future
                    </li>
                    <li type="circle">Physical and mental fitness training</li>
                    <li type="circle">Society related activity</li>
                    <li type="circle">Parental involvement</li>
                    <li type="circle">Etiquette grooming</li>
                    <li type="circle">Quality knowledge management</li>
                    <li type="circle">Training in Journalism</li>
                    <li type="circle">Honing life skills</li>
                    <li type="circle">Academic excellence</li>
                  </ul>
                </div>
                <div className=" w-[260px] xl:w-[290px] text-lg lg:text-xl">
                  Our IT and Skills curriculum offers a hands-on, interactive
                  learning experience that builds problem-solving, critical
                  thinking, and technological proficiency. Through practical
                  projects and personalized guidance, students explore digital
                  tools, fostering creativity and confidence. This approach
                  nurtures curiosity and equips students with essential
                  21st-century skills.
                </div>
              </div>
            )}
            {openContent && (
              <div className=" sm:hidden lg:grid grid-cols-2 gap-6 gap-x-64 xl:hidden">
                <div className=" space-y-4  w-[265px]">
                  <h3 className=" my-2 text-2xl font-bold ">Pre-School</h3>
                  <div className=" text-lg lg:text-xl">
                    Our Pre-School Celebrates Childhood. Our LKG & UKG
                    classrooms inspire awe and wonder and equate learning with a
                    sense of magic and freedom. We believe that children are not
                    just empty vessels to be filled with facts. They are
                    extraordinary humans capable of understanding complex ideas.
                    We do not water down for academics but rather present a rich
                    feast of ideas.
                  </div>
                </div>
                <div className=" space-y-4  w-[265px]">
                  <h3 className="  my-2 text-2xl font-bold ">
                    Secondary School VI- X
                  </h3>
                  <div className=" text-lg lg:text-xl">
                    Our Primary classes use a hands-on, multi-disciplinary, and
                    multi-sensory approach to nurture creativity, imagination,
                    and social skills. With personalized one-on-one teaching,
                    our teachers maximize learning. These years emphasize
                    inquiry and wonder, fostering a foundation for lifelong
                    learning.
                  </div>
                </div>
                <div className=" space-y-4  w-[265px]">
                  <h3 className=" my-2 text-2xl font-bold ">
                    Secondary School VI- X
                  </h3>
                  <ul className=" text-lg lg:text-xl">
                    <li type="circle">
                      Empowering Children with the confidence to face the future
                    </li>
                    <li type="circle">Physical and mental fitness training</li>
                    <li type="circle">Society related activity</li>
                    <li type="circle">Parental involvement</li>
                    <li type="circle">Etiquette grooming</li>
                    <li type="circle">Quality knowledge management</li>
                    <li type="circle">Training in Journalism</li>
                    <li type="circle">Honing life skills</li>
                    <li type="circle">Academic excellence</li>
                  </ul>
                </div>
                <div className=" space-y-4  w-[265px]">
                  <h3 className="  my-2 text-2xl font-bold ">IT and Skills</h3>
                  <div className=" text-lg lg:text-xl">
                    Our Primary classes focus on a hands-on, multi-disciplinary
                    and multi-sensory instructional approach that focuses on
                    nurturing our student’s creativity, imagination and
                    interpersonal & social skills. Our teachers are able to
                    maximize teaching & learning through one-on-one teaching to
                    provide the best teaching to kids. These years are focused
                    on inquiry and wonder, which are vital components of
                    becoming life-long learners.
                  </div>
                </div>
              </div>
            )}
            <div className=" lg:hidden flex flex-col gap-6">
              <div className=" space-y-4">
                <h3 className=" my-2 text-2xl font-bold ">Pre-School</h3>
                <div className=" text-lg lg:text-xl">
                  Our Pre-School celebrates Childhood. Our LKG & UKG classrooms
                  inspire awe and wonder and equate learning with a sense of
                  magic and freedom. We believe that children are not just empty
                  vessels to be filled with facts. They are extraordinary humans
                  capable of understanding complex ideas. We do not water down
                  for academics but rather present a rich feast of ideas.
                </div>
              </div>
              <div className=" space-y-4">
                <h3 className="  my-2 text-2xl font-bold ">
                  Secondary School VI- X
                </h3>
                <div className=" text-lg lg:text-xl">
                  Our Primary classes focus on a hands-on, multi-disciplinary
                  and multi-sensory instructional approach that focuses on
                  nurturing our student’s creativity, imagination and
                  interpersonal & social skills. Our teachers are able to
                  maximize teaching & learning through one-on-one teaching to
                  provide the best teaching to kids. These years are focused on
                  inquiry and wonder, which are vital components of becoming
                  life-long learners.
                </div>
              </div>
              <div className=" space-y-4">
                <h3 className=" my-2 text-2xl font-bold ">
                  Secondary School VI- X
                </h3>
                <ul className=" text-lg lg:text-xl">
                  <li type="circle">
                    Empowering Children with the confidence to face the future
                  </li>
                  <li type="circle">Physical and mental fitness training</li>
                  <li type="circle">Society related activity</li>
                  <li type="circle">Parental involvement</li>
                  <li type="circle">Etiquette grooming</li>
                  <li type="circle">Quality knowledge management</li>
                  <li type="circle">Training in Journalism</li>
                  <li type="circle">Honing life skills</li>
                  <li type="circle">Academic excellence</li>
                </ul>
              </div>
              <div className=" space-y-4">
                <h3 className="  my-2 text-2xl font-bold ">IT and Skills</h3>
                <div className=" text-lg lg:text-xl">
                  Our IT and Skills curriculum offers a hands-on, interactive
                  learning experience that builds problem-solving, critical
                  thinking, and technological proficiency. Through practical
                  projects and personalized guidance, students explore digital
                  tools, fostering creativity and confidence. This approach
                  nurtures curiosity and equips students with essential
                  21st-century skills.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programme;
