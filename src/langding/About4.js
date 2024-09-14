import React from "react";
import imgbox from "../assets/ImgBoxGreen.png";
import depin from "../assets/Depin1.png";

const About4 = () => {
  return (
    <div class="w-full max-w-[1312px] mt-[250px] mx-auto px-4">
      <div class="w-full flex justify-end">
        <div className="w-[65%]">
          <div className="flex items-center gap-[8px] mb-[24px] text-[#f7f8f8] font-[Rubik] text-[14px] font-medium leading-[21px] w-fit">
            <img src={imgbox} alt="imgbox" className="w-[16px] h-[17px]" />
            <p>ONIProtocol</p>
            <span className="rounded-[4px] border border-[#2c2e33] flex h-[20px] px-[5px] py-[2.5px] justify-center items-center text-[#8a8f98] font-[Rubik] text-[12px] font-normal leading-none">
              Project
            </span>
          </div>
        </div>
      </div>
      <div class="flex w-full items-start gap-[88px]">
        <div class="w-[calc(35%-88px)] flex flex-col gap-4 relative z-[2]">
          <h3 class="text-[#f7f8f8] font-rubik text-[64px] font-normal leading-[65px] tracking-[-1.82px] uppercase">
            ONI Protocol Service
          </h3>
          <p class="text-[rgba(255,255,255,0.75)] font-rubik text-[20px] font-normal leading-[28px]">
            <span className="text-white">With Oni Protocol</span>, you not only
            participate in Node mining but also own a piece of the decentralized
            network.
          </p>
          <div class="absolute w-[150%] aspect-square bg-[#111015] top-1/2 left-1/2 transform -translate-y-[40%] -translate-x-1/2 z-[-2]"></div>
        </div>
        <div class="w-[65%] flex items-center gap-4 relative z-30 flex-wrap">
          <div class="w-[calc(33.3333%-10.6667px)] rounded-md border border-[#555555] bg-[#282728] flex flex-col p-6 items-start self-stretch">
            <img
              src={depin}
              alt="depin"
              className="w-[64px] h-[64px] mb-[20px]"
            />
            <h3 class="text-white font-rubik text-base font-medium leading-6">
              Device Indentity
            </h3>
            <p class="text-white/50 font-rubik text-base font-normal leading-6">
              A system built to verify and manage device identities within a
              network, ensuring secure and authorized access.
            </p>
          </div>
          <div class="w-[calc(33.3333%-10.6667px)] rounded-md border border-[#555555] bg-[#282728] flex flex-col p-6 items-start self-stretch">
            <img
              src={depin}
              alt="depin"
              className="w-[64px] h-[64px] mb-[20px]"
            />
            <h3 class="text-white font-rubik text-base font-medium leading-6">
              Device Indentity
            </h3>
            <p class="text-white/50 font-rubik text-base font-normal leading-6">
              A system built to verify and manage device identities within a
              network, ensuring secure and authorized access.
            </p>
          </div>
          <div class="w-[calc(33.3333%-10.6667px)] rounded-md border border-[#555555] bg-[#282728] flex flex-col p-6 items-start self-stretch">
            <img
              src={depin}
              alt="depin"
              className="w-[64px] h-[64px] mb-[20px]"
            />
            <h3 class="text-white font-rubik text-base font-medium leading-6">
              Device Indentity
            </h3>
            <p class="text-white/50 font-rubik text-base font-normal leading-6">
              A system built to verify and manage device identities within a
              network, ensuring secure and authorized access.
            </p>
          </div>
          <div class="w-[calc(33.3333%-10.6667px)] rounded-md border border-[#555555] bg-[#282728] flex flex-col p-6 items-start self-stretch">
            <img
              src={depin}
              alt="depin"
              className="w-[64px] h-[64px] mb-[20px]"
            />
            <h3 class="text-white font-rubik text-base font-medium leading-6">
              Device Indentity
            </h3>
            <p class="text-white/50 font-rubik text-base font-normal leading-6">
              A system built to verify and manage device identities within a
              network, ensuring secure and authorized access.
            </p>
          </div>
          <div class="w-[calc(33.3333%-10.6667px)] rounded-md border border-[#555555] bg-[#282728] flex flex-col p-6 items-start self-stretch">
            <img
              src={depin}
              alt="depin"
              className="w-[64px] h-[64px] mb-[20px]"
            />
            <h3 class="text-white font-rubik text-base font-medium leading-6">
              Device Indentity
            </h3>
            <p class="text-white/50 font-rubik text-base font-normal leading-6">
              A system built to verify and manage device identities within a
              network, ensuring secure and authorized access.
            </p>
          </div>
          <div class="w-[calc(33.3333%-10.6667px)] rounded-md border border-[#555555] bg-[#282728] flex flex-col p-6 items-start self-stretch">
            <img
              src={depin}
              alt="depin"
              className="w-[64px] h-[64px] mb-[20px]"
            />
            <h3 class="text-white font-rubik text-base font-medium leading-6">
              Device Indentity
            </h3>
            <p class="text-white/50 font-rubik text-base font-normal leading-6">
              A system built to verify and manage device identities within a
              network, ensuring secure and authorized access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About4;
