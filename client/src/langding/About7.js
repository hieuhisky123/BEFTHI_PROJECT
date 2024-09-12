import React from "react";
import IconReceive1 from "../assets/IconReceive1.png";
const About7 = () => {
  return (
    <div className="w-full max-w-[1312px] mx-auto flex flex-col items-center mb-24">
      <div className="flex items-center mb-4 gap-2">
        <div className="flex items-center p-1.5 gap-1.5">
          <span className="rounded-full bg-[#81ee97] w-[14px] h-[8px]"></span>
          <p className="text-white">ONI Protocol</p>
        </div>
      </div>
      <h5 className="text-[#f7f8f8] text-center font-rubik text-[64px] font-normal leading-[61.6px] tracking-[-1.82px] uppercase mb-[150px]">
        ONI Bots
      </h5>
      <div class="w-full flex items-center gap-4 flex-wrap relative z-[1]">
        <div class="w-[calc(40%-16px)] bg-[url('./assets/Receive1.png')] p-8 rounded-md border border-[#555] self-stretch">
          <img className="mb-[27px]" src={IconReceive1} alt="IconReceive1" />
          <h3 class="block text-[1.17em] my-4 mx-0 font-bold [unicode-bidi:isolate] text-white font-rubik leading-[120%] mb-4">
            Advanced Tools
          </h3>
          <p class="text-white/50 text-[16px] font-[Rubik-Regular] font-normal leading-[124%] block my-4 mx-0 [unicode-bidi:isolate">
            Oni Protocol offers AI-powered tools and decentralized
            infrastructure for building scalable, efficient applications.
          </p>
        </div>
        <div class="w-[60%] bg-[url('./assets/Receive2.png')] p-8 rounded-md border border-[#555] self-stretch">
          <img className="mb-[27px]" src={IconReceive1} alt="IconReceive1" />
          <h3 class="block text-[1.17em] my-4 mx-0 font-bold [unicode-bidi:isolate] text-white font-rubik leading-[120%] mb-4">
            Interoperability
          </h3>
          <p class="text-white/50 text-[16px] font-[Rubik-Regular] font-normal leading-[124%] block my-4 mx-0 [unicode-bidi:isolate">
            Seamlessly integrates with multiple blockchains and appchains for
            cross-chain application development
          </p>
        </div>
        <div class="w-[60%] bg-[url('./assets/Receive3.png')] p-8 rounded-md border border-[#555] self-stretch">
          <img className="mb-[27px]" src={IconReceive1} alt="IconReceive1" />
          <h3 class="block text-[1.17em] my-4 mx-0 font-bold [unicode-bidi:isolate] text-white font-rubik leading-[120%] mb-4">
            Interoperability
          </h3>
          <p class="text-white/50 text-[16px] font-[Rubik-Regular] font-normal leading-[124%] block my-4 mx-0 [unicode-bidi:isolate">
            Seamlessly integrates with multiple blockchains and appchains for
            cross-chain application development
          </p>
        </div>
        <div class="w-[calc(40%-16px)] bg-[url('./assets/Receive4.png')] p-8 rounded-md border border-[#555] self-stretch">
          <img className="mb-[27px]" src={IconReceive1} alt="IconReceive1" />
          <h3 class="block text-[1.17em] my-4 mx-0 font-bold [unicode-bidi:isolate] text-white font-rubik leading-[120%] mb-4">
            Security
          </h3>
          <p class="text-white/50 text-[16px] font-[Rubik-Regular] font-normal leading-[124%] block my-4 mx-0 [unicode-bidi:isolate">
            Advanced protocols and decentralized infrastructure ensure data
            integrity and fraud protection for users
          </p>
        </div>
      </div>
    </div>
  );
};

export default About7;
