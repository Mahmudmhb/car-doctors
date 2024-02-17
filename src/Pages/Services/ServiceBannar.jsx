import React from "react";
import bannar from "../../assets/images/banner/4.jpg";

const ServiceBannar = () => {
  return (
    <div className=" relative">
      <img src={bannar} alt="" className="h-[300px] w-full" />
      <div className="w-full absolute top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div className="flex items-center mt-32 ml-20 ">
          <h1 className=" text-5xl text-white  font-bold">Service Details</h1>
        </div>
      </div>
      {/* <div className="hero-content text-center text-neutral-content"> */}

      {/* </div> */}
    </div>
  );
};

export default ServiceBannar;
