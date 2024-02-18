import React from "react";

import team1 from "../assets/images/team/1.jpg";
import team2 from "../assets/images/team/2.jpg";
import team3 from "../assets/images/team/3.jpg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CiInstagram, CiTwitter } from "react-icons/ci";

const Teams = () => {
  return (
    <div>
      <div className="text-center w-1/2 mx-auto my-10 space-y-7">
        <h1 className="text-[#ff3811] font-bold text-xl ">Team</h1>
        <h1 className="text-5xl font-bold  ">Meet Our Team</h1>
        <p className="font-thin ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="md:flex md:gap-3">
        <div className=" p-5 md:w-[364px] md:h-[487px] rounded bg-base-100 border">
          <figure>
            <img
              src={team1}
              //   alt={service.title}
              className="md:w-[314px] md:h-[290px] w-full rounded"
            />
          </figure>
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-bold pt-5">Car Engine Plug</h2>
            <h1 className="text-xl font-thin">Engine Expert</h1>

            <div className="flex justify-center space-x-5 ">
              <span className="bg-[#395185] text-white w-10 h-10 flex items-center justify-center text-3xl rounded-full">
                <FaFacebookF />
              </span>
              <span className="bg-[#55acee] text-white w-10 h-10 flex items-center justify-center text-3xl rounded-full">
                <CiTwitter />
              </span>
              <span className="bg-[#0a66c2] text-white w-10 h-10 flex items-center justify-center text-3xl rounded-full">
                <FaLinkedinIn />
              </span>
              <span className="bg-[#ed4365] text-white w-10 h-10 flex items-center justify-center text-3xl rounded-full">
                <CiInstagram />
              </span>
            </div>
          </div>
        </div>
        <div className=" p-5 md:w-[364px] md:h-[487px] rounded bg-base-100 border">
          <figure>
            <img
              src={team2}
              //   alt={service.title}
              className="md:w-[314px] md:h-[290px] w-full rounded"
            />
          </figure>
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-bold pt-5">Car Engine Plug</h2>
            <h1 className="text-xl font-thin">Engine Expert</h1>

            <div className="flex justify-center space-x-5 ">
              <span className="bg-[#395185] text-white w-10 h-10 flex items-center justify-center text-3xl rounded-full">
                <FaFacebookF />
              </span>
              <span className="bg-[#55acee] text-white w-10 h-10 flex items-center justify-center text-3xl rounded-full">
                <CiTwitter />
              </span>
              <span className="bg-[#0a66c2] text-white w-10 h-10 flex items-center justify-center text-3xl rounded-full">
                <FaLinkedinIn />
              </span>
              <span className="bg-[#ed4365] text-white w-10 h-10 flex items-center justify-center text-3xl rounded-full">
                <CiInstagram />
              </span>
            </div>
          </div>
        </div>
        <div className=" p-5 md:w-[364px] md:h-[487px] rounded bg-base-100 border">
          <figure>
            <img
              src={team3}
              //   alt={service.title}
              className="md:w-[314px] md:h-[290px] w-full rounded"
            />
          </figure>
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-bold pt-5">Car Engine Plug</h2>
            <h1 className="text-xl font-thin">Engine Expert</h1>

            <div className="flex justify-center space-x-5 ">
              <span className="bg-[#395185] text-white w-10 h-10 flex items-center justify-center text-3xl rounded-full">
                <FaFacebookF />
              </span>
              <span className="bg-[#55acee] text-white w-10 h-10 flex items-center justify-center text-3xl rounded-full">
                <CiTwitter />
              </span>
              <span className="bg-[#0a66c2] text-white w-10 h-10 flex items-center justify-center text-3xl rounded-full">
                <FaLinkedinIn />
              </span>
              <span className="bg-[#ed4365] text-white w-10 h-10 flex items-center justify-center text-3xl rounded-full">
                <CiInstagram />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
