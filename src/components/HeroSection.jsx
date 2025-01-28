import React from 'react'
import kidImage from "../assets/pngwing.png"


function HeroSection() {
  return (
    // bg-gradient-to-r from-[#0D9488] to-[#0891B2]

    <div className=' relative animate-gradient bg-[length:400%_400%]'
    ><style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient {
          background: linear-gradient(
            -45deg,
            #0D9488,
            #0891B2,
            #06b6d4,
            #0ea5e9,
            #3b82f6
          );
          background-size: 400% 400%;
          animation: gradient 10s ease infinite;
        }
      `}</style>
        <div>
            <div className=' xl:container xl:mx-auto md:mx-5 flex justify-start items-center p-4 h-[90vh]'>
                <div className='text-white'>
                    <h1 className='text-5xl font-bold'>Welcome to <br /> M S INTERNATIONAL <br /> PUBLIC SCHOOL</h1>
                    <p className='text-xl mt-4 text-[#1E3A8A]'>" Viveka Vidhya Samsthe "</p>
                </div>  
            </div>
        </div>
        <div className=' absolute top-[10%] right-[10%]'>
            <img src={kidImage} alt="" className=' mix-blend-normal w-[400px] '/>
        </div>
    </div>
  )
}

export default HeroSection

