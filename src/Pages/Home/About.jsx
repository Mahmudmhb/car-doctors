import React from "react";
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen   ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="md:relative w-1/2">
          <img
            src={person}
            className=" rounded-lg  w-full md:h-[470px] md:w-[460px]"
          />
          <img
            src={parts}
            className="h-[332px] border-8 rounded-lg  md:w-[327px] right-10 md:absolute -bottom-20"
          />
        </div>
        <div className=" w-1/2 space-y-7">
          <h1 className="text-[#ff3811] font-bold">About Us</h1>
          <h1 className="text-4xl font-bold w-7/12 ">
            We are qualified & of experience in this field
          </h1>
          <p className="font-thin w-4/5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className=" font-thin w-4/5">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className=" p-3 rounded text-white bg-[#ff3811]">
            Get More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
