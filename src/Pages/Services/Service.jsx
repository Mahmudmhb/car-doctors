import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  return (
    <div className=" p-5 md:w-[364px] md:h-[348px] rounded bg-base-100 border">
      <figure>
        <img
          src={service.img}
          alt={service.title}
          className="md:w-[314px] w-full h-[208px] rounded"
        />
      </figure>
      <div className="space-y-5">
        <h2 className="card-title pt-5">{service.title}</h2>
        <div className="flex justify-between items-center text-[#ff3811] font-bold">
          <p className="">Price: {service.price}</p>
          <button>
            <Link to={`/servicesdetails/${service._id}`}>
              <p>
                <FaArrowRight />
              </p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
