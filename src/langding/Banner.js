import React from "react";
import logo from "../assets/Logo2.png";
import icon from "../assets/IconLaunchApp_1.png";
import styled from "styled-components";
import br from "../assets/br.png";
import liner from "../assets/PannerLine.svg";

const Banner = () => {
  return (
    <Wapper>
      <Container>
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
          <Opennetwort>
            <div className="w-full h-[205px] relative z-[3] flex justify-center items-center">
              <AllLiner>
                <Button>
                  <Aliner>ONI - Open Network Integration</Aliner>
                </Button>
              </AllLiner>
            </div>
          </Opennetwort>

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
      </Container>
    </Wapper>
  );
};

export default Banner;
const Wapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-image: url(${br});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(17, 16, 21, 0.9);
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    opacity: 0.2;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    mix-blend-mode: lighten;
    box-shadow: 0 0 60px rgba(255, 255, 255, 0.9);
    animation: box 19s infinite linear;
    transition: all 0.25s linear;
  }
  @keyframes box {
    0% {
      transform: translateX(-150%) translateY(-50%);
      transition: all 0.25s linear;
    }
    50% {
      transform: translateX(100%) translateY(-50%);
      transition: all 0.25s linear;
    }
    100% {
      transform: translateX(-150%) translateY(-50%);
      transition: all 0.25s linear;
    }
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Opennetwort = styled.div`
  width: 100%;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    background-image: url(${liner});
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
    top: 80px;
    left: 0;
    z-index: -1;
  }
`;
const AllLiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  z-index: 0;
  width: 100%;
  height: 100%;
  padding-top: -50px;
`;
const Button = styled.div`
  width: 300px;
  height: 50px;
  padding: 2px;
  border-radius: 20px;
  position: relative;
  background-color: rgba(10, 12, 18, 1);
  overflow: hidden;
  z-index: 1111;
  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height:100%;
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(200, 143, 20, 1) 100%
    );
    animation: rotateBg 6s infinite linear;
    z-index: -1;
    opacity: 0.3;
  }

  @keyframes rotateBg {
    0% {
      transform: rotateZ(0deg);
      transition: all 0.25s linear; 
    }
    100% {
      transform: rotateZ(360deg);
      transition: all 0.25s linear; 

    }
 
  }
`;
const Aliner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(0, 0, 0, 1);
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  border-image: radial-gradient(
      ellipse at var(--gradX) var(--gradY),
      var(--c1),
      var(--c1) 10%,
      var(--c2) 40%
    )
    30;
  z-index: 111;
  color: rgb(111, 255, 140);
  text-align: center;
`;
