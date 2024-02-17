import { RiTeamFill } from "react-icons/ri";
import { IoMdTimer } from "react-icons/io";
import { MdOutlineSettingsAccessibility, MdSupportAgent } from "react-icons/md";
import { SiPagseguro } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";

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
        <div className=" flex justify-between ">
          <span className="hover:bg-[#ff3811] border hover:text-white rounded p-2">
            <RiTeamFill className="h-[53px]  w-full mx-auto" />
            <h1 className="text-xl font-bold">Expert Team</h1>
          </span>
          <span className="hover:bg-[#ff3811] border hover:text-white rounded p-2">
            <IoMdTimer className="h-[53px]  w-full mx-auto" />
            <h1 className="text-xl font-bold">Timely Delivery</h1>
          </span>
          <span className="hover:bg-[#ff3811] border hover:text-white rounded p-2">
            <MdSupportAgent className="h-[53px]  w-full mx-auto" />
            <h1 className="text-xl font-bold">24/7 Support</h1>
          </span>
          <span className="hover:bg-[#ff3811] border hover:text-white rounded p-2">
            <MdOutlineSettingsAccessibility className="h-[53px]  w-full mx-auto" />
            <h1 className="text-xl font-bold">Best Equipment</h1>
          </span>
          <span className="hover:bg-[#ff3811] border hover:text-white rounded p-2">
            <SiPagseguro className="h-[53px]  w-full mx-auto" />
            <h1 className="text-xl font-bold">100% Guranty</h1>
          </span>
          <span className="hover:bg-[#ff3811] border hover:text-white rounded p-2">
            <TbTruckDelivery className="h-[53px]  w-full mx-auto" />
            <h1 className="text-xl font-bold">Timely Delivery</h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Features;
