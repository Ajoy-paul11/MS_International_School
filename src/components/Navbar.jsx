 import React,{ useState } from 'react'
import msinternational from "../assets/ms_international.jpeg"
import { HiMenu, HiOutlineX } from "react-icons/hi";

function NavItems() {
    return (
        <ul className=' hidden lg:flex justify-between items-center p-4 gap-8 header-background text-white hover:text-[#D97706]'>
            <li className=' text-white hover:text-[#D97706]'><a href="#">Admission</a></li>
            <li className=' text-white hover:text-[#D97706]'><a href="#">About</a></li>
            <li className=' text-white hover:text-[#D97706]'><a href="#">Events</a></li>
            <li className=' text-white hover:text-[#D97706]'><a href="#">Programs</a></li>
            <li className=' text-white hover:text-[#D97706]'><a href="#">Hostel</a></li>
        </ul>
    )
}

function MobileNavItems(){
    return(
        <ul className='flex flex-col justify-between items-center p-4 gap-2  '>
        <li className=' text-white hover:text-[#D97706]'><a href="#">Admission</a></li>
        <li className=' text-white hover:text-[#D97706]'><a href="#">About</a></li>
        <li className=' text-white hover:text-[#D97706]'><a href="#">Events</a></li>
        <li className=' text-white hover:text-[#D97706]'><a href="#">Programs</a></li>
        <li className=' text-white hover:text-[#D97706]'><a href="#">Hostel</a></li>
    </ul> 
    )
}


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=' header-background font-poppins'>
        <div className='  xl:container xl:mx-auto md:mx-5 flex justify-between items-center p-4 '>
            <div className=' rounded-full'>
                <img src={msinternational} alt="school-logo" 
                className=' w-[80px]' 
                style={{ clipPath: "circle(50% at 50% 50%)" }}
                />
            </div>
            <NavItems />
            <div className=' block lg:hidden'>
                {isOpen ? <HiOutlineX className=' w-8 h-8 text-white' onClick={() => setIsOpen(!isOpen)}/> : <HiMenu className=' w-8 h-8 text-white' onClick={() => setIsOpen(!isOpen)}/> }
                { isOpen ? (<div className=' bg-transparent backdrop-blur-lg rounded-lg text-white hover:text-[#D97706] absolute top-[75px] right-3 left-2 z-10 w-full '><MobileNavItems /></div>) : " "}
            </div>
        </div>
    </div>
  )
}

export default Navbar;