import React from 'react'
import ProgramCard from './ProgramCard'
import preSchool from "../assets/pre-school-kid.jpg"
import primarySchool from "../assets/primary-kid.jpg"
import secondarySchool from "../assets/secondary-student.jpg"


function Programs() {
  return (
    <div className=' p-4 my-4'>
        <h2 className=' text-[#1E3A8A] text-3xl lg:text-4xl text-center font-bold p-4 my-4'> Programme Offered</h2>
        <div className=' container mx-auto flex flex-col lg:flex-row justify-evenly items-center gap-6 '>
        <ProgramCard pic={preSchool} phase={"Pre-School"} standard={"LKG / UKG"} classname={"text-[#1E3A8A]"} bgbutton={"pre-school"}/>
        <ProgramCard pic={primarySchool} phase={"Primary School"} standard={"I - V"} classname={"text-[#0D9488]"} bgbutton={"primary-school"}/>
        <ProgramCard pic={secondarySchool} phase={"Secondary School"} standard={"VI - X"} classname={"text-[#4B5563]"} bgbutton={"secondary-school"}/>
        </div>
    </div>
  )
}

export default Programs