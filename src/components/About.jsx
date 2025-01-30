import React from 'react'
import AboutImage from "../assets/MS_International.png"

function About() {
  return (
    <div>
        <div className=' bg-[#F3F4F6] text-[#4B5563] py-8 font-inter'>
            <h2 className=' text-[#1E3A8A] text-3xl lg:text-4xl text-center font-bold p-4 my-4'>About</h2>
            <section className=' flex flex-col lg:flex-row justify-evenly items-center xl:items-start bg-cover bg-center px-6'>
                <div className=' w-full lg:w-1/2 '>
                    <img src={AboutImage} alt="Scholl-image" 
                    className=' rounded-tr-[50px] rounded-bl-[50px]'/>
                </div>
                <h3 className=' text-[#4B5563] w-full lg:w-1/2 text-base xl:text-xl 2xl:text-3xl font-semibold p-4 pl-8 xl:pl-16'>
                MS International, Mandya is a Co-educational School, founded in 2017 under the chairmanship of Sri. M Srinivas.
                Located in Hanekere, Mandya.
                <p className=' my-4 indent-4'>
                MS International Public School. The only school in Mandya to provide facilities with all the international standards. remains committed to providing an academically rigorous education to students who will walk out of school ready for lives of leadership and service to their community. From Literacy to music and arts, each day at MS International is filled with activities that are both enriching and fun.
                </p>
                <p className=' indent-4'>
                We strive to be committed to the students we are privileged to serve.
                </p>
                </h3>
            </section>
        </div>
    </div>
  )
}

export default About