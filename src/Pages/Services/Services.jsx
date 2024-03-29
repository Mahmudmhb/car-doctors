import React, { useEffect, useState } from "react";
import Service from "./Service";
import { useLoaderData } from "react-router-dom";

const Services = () => {
  // const loader = useLoaderData();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctors-server-pi.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        // console.log(data);
      });
  }, []);
  // console.log(loader);
  return (
    <div data-aos="fade-right" className="my-9">
      <div className="text-center w-1/2 mx-auto my-10 space-y-7">
        <h1 data-aos="fade-up" className="text-[#ff3811] font-bold ">
          Services
        </h1>
        <h1 className="text-5xl font-bold  ">Our Service Area</h1>
        <p className="font-thin ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      {/* <h1>total service: {loader.length}</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
