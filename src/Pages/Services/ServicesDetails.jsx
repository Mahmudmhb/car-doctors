import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceBannar from "./ServiceBannar";
import ServiceSidber from "./ServiceSidber";

const ServicesDetails = () => {
  const details = useLoaderData();
  //   console.log(details);
  return (
    <div>
      <ServiceBannar></ServiceBannar>
      <div className="grid md:grid-cols-3 md:gap-5 my-10">
        <div className=" col-span-2 space-y-4">
          {/* <h1>this is details page</h1> */}
          <img src={details.img} alt="" className="w-full" />
          <h1 className="text-2xl font-bold ">{details.title}</h1>
          <p>{details.description}</p>
          <div className="md:grid gap-3 md:grid-cols-2">
            {details.facility.map((facilits, idx) => (
              <div
                key={idx}
                className=" bg-slate-200 p-4 space-y-3 rounded-xl border-t-2 border-rose-600"
              >
                <h1 className="text-2xl">{facilits.name}</h1>
                <p className="font-thin">{facilits.details}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <ServiceSidber></ServiceSidber>
          <h1 className="text-4xl font-bold py-5">Price: ${details.price}</h1>

          <Link to={`/proced/${details._id}`}>
            <button className="text-white bg-[#ff3811] w-full p-3 rounded">
              Proceed Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
