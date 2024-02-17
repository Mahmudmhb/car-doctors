import React from "react";
import { TbCalendarTime } from "react-icons/tb";
import { MdOutlineAddIcCall } from "react-icons/md";
import { FaMapLocation } from "react-icons/fa6";

const AnyQuery = () => {
  return (
    <div className=" flex items-center justify-around bg-[#151515] md:h-[250px]">
      <div className="flex items-center space-x-3 justify-center text-white">
        <div className="h-8 text-3xl">
          <TbCalendarTime />
        </div>
        <div>
          <p>We are open monday-friday</p>
          <p className="text-2xl font-bold">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-3 text-white">
        <div className="h-8 text-3xl">
          <MdOutlineAddIcCall />
        </div>
        <div>
          <p>Have a question?</p>
          <p className="text-2xl font-bold">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex items-center space-x-3 justify-center  text-white">
        <div className="h-8 text-3xl">
          <FaMapLocation />
        </div>
        <div>
          <p>Need a repair? our address</p>
          <p className="text-2xl font-bold">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default AnyQuery;
