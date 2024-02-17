import { Container } from "postcss";
import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/public/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        // console.log(data);
      });

    console.log(services);
  }, []);
  return (
    <div className="my-9">
      <div className="text-center w-1/2 mx-auto my-10 space-y-7">
        <h1 className="text-[#ff3811] font-bold ">About Us</h1>
        <h1 className="text-5xl font-bold  ">Our Service Area</h1>
        <p className="font-thin ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
