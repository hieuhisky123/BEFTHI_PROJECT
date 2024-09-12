import React from "react";
import logo from "../assets/Logo2.png";
import icon from "../assets/IconLaunchApp_1.png";

const Banner = () => {
  return (
    <div class="w-full relative z-[3] flex flex-col items-center">
      <div class="flex items-center p-[6px] gap-[6px]">
        <span class="rounded-full bg-[#81ee97] w-[14px] h-[8px]"></span>
        <p className="text-white">ONI Protocol</p>
      </div>
      <div className="mt-[53px] text-linearappblack text-center font-[Rubik] text-64px font-normal leading-83px tracking--0.9px">
        <h4>The Key To Open</h4>
        <h3 class="opacity-100 transform translate-z-0 space-x-2 text-[#f7f8f8] text-center font-[Rubik] text-[90px] font-normal leading-[83px] tracking-[-0.9px] uppercase flex items-center gap-[6px]">
          <span>Network</span>
          <div class="flex items-center justify-center aspect-square rounded-full border border-[#565656] w-[85px] h-[85px]">
            <img src={logo} alt="logo" class="w-full h-full object-cover" />
          </div>
          <span>Synergy</span>
        </h3>
      </div>
      <div className="w-full h-[205px] relative z-[3] flex justify-center items-center">
        <div className="rounded-[10px] border w-[333px] h-[44px] flex justify-center items-center">
          <h3 className="text-[#6fff8c] font-[Rubik] text-[16px] font-medium leading-[120%] tracking-[-0.32px]">
            ONI - Open Network Integration
          </h3>
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-[18px] mt-[125px]">
        <div class="rounded-[10px] border flex justify-center items-center p-4 border-customgreen">
          <a href="" class="flex items-center space-x-2">
            <img src={icon} alt="icon" class="w-[20px] h-[21px]" />
            <p class="text-white">Launch App</p>
          </a>
        </div>
        <div class="rounded-[10px] border flex justify-center items-center p-4">
          <a href="" class="flex items-center space-x-2">
            <p class="text-white">Scroll to Discover</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
