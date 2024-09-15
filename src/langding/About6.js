import React from "react";
import imgbox from "../assets/ImgBoxGreen.png";
import BgNextGen2 from "../assets/BgNextGen2.png";
const About6 = () => {
  return (
    <div className="w-full max-w-[1312px] mx-auto mt-[400px] px-4 flex justify-start relative z-10 mb-52">
      <div className="w-full max-w-[585px] flex flex-col items-center">
        <div class="p-[5px_12px] flex items-center gap-[8px] rounded-full mb-[16px]">
          <img src={imgbox} alt="imgbox" className="w-[16px] h-[17px]" />
          <p class="text-[#f7f8f8] text-[16px] font-semibold leading-[21px]">
            ONI Farming/Mining
          </p>
        </div>
        <h3 class="text-[#f7f8f8] text-center font-[Rubik] text-[56px] font-normal leading-[61.6px] tracking-[-1.82px] uppercase mb-[48px]">
          ONI FARMING/ MINING
        </h3>
        <h6 class="text-[rgba(255,255,255,0.75)] text-center text-[20px] font-normal leading-[130%] max-w-[360px] mb-[16px]">
          Creating a DeFi experience and earning profits from DePIN
        </h6>
        <ul class="flex flex-col items-start gap-[12px]">
          <li class="flex items-center gap-[20px] text-[#f9f9f9] text-[20px] font-normal leading-[21.6px] list-none">
            <span class="rounded-full bg-[#81ee97] w-[14px] h-[8px] flex"></span>
            Simple process
          </li>
          <li class="flex items-center gap-[20px] text-[#f9f9f9] text-[20px] font-normal leading-[21.6px] list-none">
            <span class="rounded-full bg-[#81ee97] w-[14px] h-[8px] flex"></span>
            Simple process
          </li>
          <li class="flex items-center gap-[20px] text-[#f9f9f9] text-[20px] font-normal leading-[21.6px] list-none">
            <span class="rounded-full bg-[#81ee97] w-[14px] h-[8px] flex"></span>
            Simple process
          </li>
        </ul>
      </div>
      <img
        src={BgNextGen2}
        alt="BgNextGen2"
        className="absolute inset-0 z-[-1] w-full bg-cover bg-center transform translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2"
        style={{
          height: "200%",
          aspectRatio: "1280 / 576",
        }}
      />
    </div>
  );
};

export default About6;
