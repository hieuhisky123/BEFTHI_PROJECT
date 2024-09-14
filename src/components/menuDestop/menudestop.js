import React from "react";
import logo from "../../assets/LogoFull.png";
import icon from "../../assets/IconLaunchApp_1.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Menudestop = () => {
  return (
    <Wapper>
      <div className="mx-auto flex w-main top-0 left-1/2 items-center justify-between pt-6 px-4 pb-0 z-[2147483647] pb-20">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-[210px] h-[34px]" />
        </Link>
        <nav class="rounded-[10px] border border-[rgba(255,255,255,0.1)] bg-[linear-gradient(0deg,rgba(66,66,66,0.2)_0%,rgba(32,32,32,0.2)_85.71%)] backdrop-blur-[12px] flex p-[6px] items-center">
          <a
            href="/"
            className="text-[rgba(255,255,255,0.5)] text-center text-[16px] font-medium leading-[24px] p-[10px_32px] no-underline"
          >
            Home
          </a>
          <a
            href="/paner"
            className="text-[rgba(255,255,255,0.5)] text-center text-[16px] font-medium leading-[24px] p-[10px_32px] no-underline"
          >
            Oni Bot
          </a>
          <a
            href=""
            className="text-[rgba(255,255,255,0.5)] text-center text-[16px] font-medium leading-[24px] p-[10px_32px] no-underline"
          >
            Launchpad
          </a>
          <a
            href=""
            className="text-[rgba(255,255,255,0.5)] text-center text-[16px] font-medium leading-[24px] p-[10px_32px] no-underline"
          >
            Whitepaper
          </a>
          <a
            href=""
            className="text-[rgba(255,255,255,0.5)] text-center text-[16px] font-medium leading-[24px] p-[10px_32px] no-underline"
          >
            LitePaper
          </a>
        </nav>
        <div class="rounded-[10px] border flex justify-center items-center p-4 border-customgreen">
          <a href="" class="flex items-center space-x-2">
            <img src={icon} alt="icon" class="w-[20px] h-[21px]" />
            <p class="text-white">Launch App</p>
          </a>
        </div>
      </div>
    </Wapper>
  );
};
export default Menudestop;
const Wapper = styled.div`
  position: fixed;
  width: 100%;
  max-width: 1920px;
  margin: 0px auto;
  z-index: 1111111111;
`;
