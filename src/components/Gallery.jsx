import React from 'react'
import boardRoom from "../assets/gallery/board-room.jpg";
import brassBand from "../assets/gallery/brass-band.jpg";
import prayerRoom from "../assets/gallery/prayer-room.jpg";
import diningArea from "../assets/gallery/dining-area.jpg";
import schoolCorridor from "../assets/gallery/school-corridor.jpg";
import latheMachine from "../assets/gallery/lathe-machine.png";
import staffRoom from "../assets/gallery/staff-room.jpg";
import classRoom from "../assets/gallery/accounts-classroom.png";
import schoolGround from "../assets/gallery/school-ground.jpg";

function Gallery() {
  return (
    <div className=' py-8 bg-[#0D9488]'>
        <h2 className=" text-white text-3xl lg:text-4xl text-center font-bold p-4 my-4">Gallery</h2>
        <div className=' container mx-auto p-6'>
            <div className='grid grid-cols-3  gap-8 place-items-center'>
             <div className=' board-room'>
              <img src={boardRoom} alt="board-room" className='  w-[450px] h-[250px] rounded-[35px] rounded-bl-none '/>
             </div>
             <div ><img src={boardRoom} alt="board-room" className='  w-[450px] h-[250px] rounded-[35px] rounded-bl-none'/></div>
             {/* <div className=''><img src={brassBand} alt="brass-band" /></div> */}
             <div ><img src={prayerRoom} alt="prayer-room" className='  w-[450px] h-[250px] rounded-[35px] rounded-bl-none'/></div>
             <div ><img src={diningArea} alt="dining-area" className='  w-[450px] h-[250px] rounded-[35px] rounded-bl-none'/></div>
             {/* <div className=''><img src={schoolCorridor} alt="school-corridor" /></div> */}
             <div ><img src={latheMachine} alt="lathe-machine" className='  w-[450px] h-[250px] rounded-[35px] rounded-bl-none'/></div>
             <div ><img src={latheMachine} alt="lathe-machine" className='  w-[450px] h-[250px] rounded-[35px] rounded-bl-none'/></div>
             <div ><img src={staffRoom} alt="staff-room" className='  w-[450px] h-[250px] rounded-[35px] rounded-bl-none'/></div>
             <div ><img src={classRoom} alt="class-room" className='  w-[450px] h-[250px] rounded-[35px] rounded-bl-none'/></div>
             <div ><img src={schoolGround} alt="school-ground" className='  w-[450px] h-[250px] rounded-[35px] rounded-bl-none'/></div>
            </div>
        </div>
        {/* <div>
            <div className='grid grid-cols-3 grid-rows-3 gap-4'>
             <div className=' w-[300px] h-[300px] border-black border'></div>
             <div className=' w-[300px] h-[600px] border-black border'></div>
             <div className=' w-[300px] h-[300px] border-black border'></div>
             <div className=' w-[300px] h-[300px] border-black border'></div>
             <div className=' w-[300px] h-[600px] border-black border'></div>
             <div className=' w-[300px] h-[300px] border-black border'></div>
             <div className=' w-[300px] h-[300px] border-black border'></div>
             <div className=' w-[300px] h-[300px] border-black border'></div>
             <div className=' w-[300px] h-[300px] border-black border'></div>
            </div>
        </div> */}
    </div>
  )
}

export default Gallery