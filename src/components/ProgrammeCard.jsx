import React from "react";

function ProgrammeCard({
  pic,
  phase,
  standard,
  classname,
  bgbutton,
  openContent,
  setOpenContent,
}) {
  return (
    <div>
      <div className=" w-[254px] xl:w-[284px] p-4 flex flex-col justify-center items-center gap-4 border bg-[#F3F4F6] rounded-tl-[40px] rounded-br-[40px] hover:rounded-tr-[40px] hover:rounded-bl-[40px] hover:rounded-tl-none hover:rounded-br-none duration-200 group">
        <img
          src={pic}
          alt="school-kid"
          className=" w-[220px] h-[180px] object-cover rounded-tl-[40px] rounded-br-[40px] group-hover:rounded-tr-[40px] group-hover:rounded-bl-[40px] group-hover:rounded-tl-none group-hover:rounded-br-none duration-200"
        />

        <div className={` ${classname}`}>
          <h2 className=" font-bold text-xl"> {phase} </h2>
        </div>
        <div className={` ${classname}`}>
          <h5 className=" font-bold text-xl"> {standard} </h5>
        </div>
        <button
          onClick={() => setOpenContent(!openContent)}
          className={` hidden lg:block bg-[#D97706] py-2 px-3 text-white rounded-lg font-semibold hover:cursor-pointer ${bgbutton}`}
        >
          {openContent ? "Show less" : "Know more"}
        </button>
      </div>
    </div>
  );
}

export default ProgrammeCard;
