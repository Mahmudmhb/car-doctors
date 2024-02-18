import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const ServiceSidber = () => {
  const [sidebar, setSidebar] = useState([]);
  useEffect(() => {
    fetch(
      "https://y-p5bfrg1bs-mahmudul-hasans-projects-f649235f.vercel.app/services"
    )
      .then((res) => res.json())
      .then((data) => setSidebar(data));
  }, []);
  return (
    <div>
      <div className=" grid bg-slate-200 p-5">
        <h1 className="text-2xl m-4 font-bold">Services</h1>
        {sidebar.map((side) => (
          <div key={side._id} className="m-2">
            <div className=" flex hover:bg-[#ff3811] rounded-lg hover:text-white items-center font-bold bg-white p-3 justify-between">
              <h1>{side.title}</h1>
              <button>
                <Link to={`/servicesdetails/${side._id}`}>
                  {" "}
                  <div className="text-[#ff3811 ">
                    <FaArrowRight />
                  </div>
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center bg-[#151515] p-5 h-[490px] rounded-xl mt-10 space-y-10">
        <img src={logo} alt="" className="mx-auto" />
        <h1 className="text-2xl text-white">
          Need Help? We Are Here To Help You
        </h1>
        <div className="bg-white rounded-3xl ">
          <div className="p-10">
            <h1>
              <span className="text-[#ff3811]">Car Doctor</span>{" "}
              <span className="font-bold">Special</span>
            </h1>
            <h1>
              <span className="font-thin">Save up to </span>{" "}
              <span className="text-[#ff3811]">60% off</span>
            </h1>
          </div>

          <div>
            <button className=" p-3 rounded-lg shadow bg-[#ff3811] -mb-5 text-white">
              Get A Guote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidber;
