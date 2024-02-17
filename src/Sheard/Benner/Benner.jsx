import React from "react";
import bannar1 from "../../assets/images/banner/1.jpg";
import bannar2 from "../../assets/images/banner/2.jpg";
import bannar3 from "../../assets/images/banner/3.jpg";
import bannar4 from "../../assets/images/banner/4.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Benner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={bannar1} className="w-full rounded-lg" />
        <div className=" absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg ">
          <div className=" text-white space-y-7 ml-8  w-1/2">
            <h1 className="text-5xl font-bold ">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button
              className=" text-white 
           p-3 bg-[#ff3811] mr-4"
            >
              Discover More
            </button>
            <button className="p-3 border">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex right-5  transform gap-5 bottom-5 ">
          <a href="#slide4" className="btn btn-circle opacity-90 ">
            <FaArrowLeft />
          </a>
          <a href="#slide2" className=" btn btn-error text-white btn-circle">
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={bannar2} className="w-full rounded-lg" />
        <div className=" absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg">
          <div className=" text-white space-y-7 ml-8  w-1/2">
            <h1 className="text-5xl font-bold ">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button
              className=" text-white 
           p-3 bg-[#ff3811] mr-4"
            >
              Discover More
            </button>
            <button className="p-3 border">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex right-5  transform gap-5 bottom-5 ">
          <a href="#slide1" className="btn btn-circle opacity-90 ">
            <FaArrowLeft />
          </a>
          <a href="#slide3" className=" btn btn-error text-white btn-circle">
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={bannar3} className="w-full rounded-lg" />
        <div className=" absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg ">
          <div className=" text-white space-y-7 ml-8  w-1/2">
            <h1 className="text-5xl font-bold ">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button
              className=" text-white 
           p-3 bg-[#ff3811] mr-4"
            >
              Discover More
            </button>
            <button className="p-3 border">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex right-5  transform gap-5 bottom-5 ">
          <a href="#slide2" className="btn btn-circle opacity-90 ">
            <FaArrowLeft />
          </a>
          <a href="#slide4" className=" btn btn-error text-white btn-circle">
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={bannar4} className="w-full rounded-lg" />
        <div className=" absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg ">
          <div className=" text-white space-y-7 ml-8  w-1/2">
            <h1 className="text-5xl font-bold ">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button
              className=" text-white 
           p-3 bg-[#ff3811] mr-4"
            >
              Discover More
            </button>
            <button className="p-3 border">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex right-5  transform gap-5 bottom-5 ">
          <a href="#slide3" className="btn btn-circle opacity-90 ">
            <FaArrowLeft />
          </a>
          <a href="#slide1" className=" btn btn-error text-white btn-circle">
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Benner;
