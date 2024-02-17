import React from "react";
import { useLoaderData } from "react-router-dom";
import bannar from "../assets/images/banner/4.jpg";

const ProcedOut = () => {
  const loader = useLoaderData();
  console.log(loader);
  return (
    <div>
      <div className=" relative">
        <img src={bannar} alt="" className="h-[300px] w-full" />
        <div className="w-full absolute top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="flex items-center mt-32 ml-20 ">
            <h1 className=" text-5xl text-white  font-bold">Check Out </h1>
          </div>
        </div>
      </div>

      <div className="bg-[#f3f3f3] p-20 my-20">
        <div className="space-y-7 w-5/6 mx-auto">
          <div className="md:flex gap-5  my-5">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-warning w-full "
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered input-warning w-full"
            />
          </div>
          <div className="md:flex gap-3 my-5">
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered input-warning w-full "
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered input-warning w-full"
            />
          </div>
          <textarea
            placeholder="Your message"
            className="textarea textarea-bordered textarea-lg w-full "
          ></textarea>

          <button className="w-full text-white p-3 rounded-xl bg-[#ff3811]">
            Oder Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcedOut;
