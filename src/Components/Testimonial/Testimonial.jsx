import React from "react";
import logo from "../../assets/images/team/1.jpg";
import { FaQuoteRight } from "react-icons/fa";
const Testimonial = () => {
  return (
    <div className="my-10">
      <div className="text-center w-1/2 mx-auto my-10 space-y-7">
        <h1 className="text-[#ff3811] font-bold text-xl ">Testimonial</h1>
        <h1 className="text-5xl font-bold  ">What Customer Says</h1>
        <p className="font-thin ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="flex gap-5">
        <div className="border p-10 rounded space-y-3">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img src={logo} alt="" className="w-16 rounded-full h-16" />
              <div>
                <h1 className="text-2xl">Awlad Hossain</h1>
                <p className="font-thin">Businessman</p>
              </div>
            </div>
            <span>
              <FaQuoteRight className="text-4xl text-[#ffd7cf]" />
            </span>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <div className="border p-10 rounded space-y-3">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img src={logo} alt="" className="w-16 rounded-full h-16" />
              <div>
                <h1 className="text-2xl">Awlad Hossain</h1>
                <p className="font-thin">Businessman</p>
              </div>
            </div>
            <span>
              <FaQuoteRight className="text-4xl text-[#ffd7cf]" />
            </span>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <div className="rating ">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
