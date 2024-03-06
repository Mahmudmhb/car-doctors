import { RiTeamFill } from "react-icons/ri";
import { IoMdTimer } from "react-icons/io";
import { MdOutlineSettingsAccessibility, MdSupportAgent } from "react-icons/md";
import { SiPagseguro } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import Marquee from "react-fast-marquee";
import icon from "../../assets/icons/check.svg";
import icon1 from "../../assets/icons/deliveryt.svg";
import icon2 from "../../assets/icons/Group 38729.svg";
import icon3 from "../../assets/icons/group.svg";
import icon4 from "../../assets/icons/person.svg";
import icon5 from "../../assets/icons/Wrench.svg";

const Features = () => {
  return (
    <div>
      <div className="text-center w-1/2 mx-auto my-10 space-y-7">
        <h1 className="text-[#ff3811] font-bold text-xl ">Core Features</h1>
        <h1 className="text-5xl font-bold  ">Why Choose Us</h1>
        <p className="font-thin ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div>
        <Marquee>
          <div className=" flex justify-between gap-5 ">
            <span className="hover:bg-[#ff3811] border hover:text-white rounded p-4">
              <img
                className="md:h-[100px] w-full py-10 mx-auto"
                src={icon3}
                alt=""
              />
              <h1 className="text-xl font-bold">Expert Team</h1>
            </span>
            <span className="hover:bg-[#ff3811] border hover:text-white rounded p-2">
              <img className="h-[100px]  w-full mx-auto" src={icon2} alt="" />
              <h1 className="text-xl font-bold">Timely Delivery</h1>
            </span>
            <span className="hover:bg-[#ff3811] border hover:text-white rounded p-2">
              <img className="h-[100px]  w-full mx-auto" src={icon4} alt="" />
              <h1 className="text-xl font-bold">24/7 Support</h1>
            </span>
            <span className="hover:bg-[#ff3811] border hover:text-white rounded p-2">
              <img className="h-[100px]  w-full mx-auto" src={icon5} alt="" />
              <h1 className="text-xl font-bold">Best Equipment</h1>
            </span>
            <span className="hover:bg-[#ff3811] border hover:text-white rounded p-2">
              <img className="h-[100px]  w-full mx-auto" src={icon} alt="" />
              <h1 className="text-xl font-bold">100% Guranty</h1>
            </span>
            <span className="hover:bg-[#ff3811] border hover:text-white rounded p-2">
              <img className="h-[100px]  w-full mx-auto" src={icon1} alt="" />
              <h1 className="text-xl font-bold">Timely Delivery</h1>
            </span>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Features;
