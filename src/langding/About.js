import React from 'react'
import imgbox from '../assets/ImgBoxGreen.png'
import bgAbout from '../assets/BgAbout.png'

const About = () => {
  return (
    <div className="w-full max-w-[1312px] mx-auto flex items-center gap-[100px] relative px-[16px] z-[1]">
      <div className="w-full max-w-[450px]">
        <div className="flex items-center gap-[8px] mb-[24px] text-[#f7f8f8] font-[Rubik] text-[14px] font-medium leading-[21px] w-fit">
            <img src={imgbox} alt="imgbox" className='w-[16px] h-[17px]'/>
            <p>ONIProtocol</p>
            <span className="rounded-[4px] border border-[#2c2e33] flex h-[20px] px-[5px] py-[2.5px] justify-center items-center text-[#8a8f98] font-[Rubik] text-[12px] font-normal leading-none">Project</span>
        </div>
        <h3 className="opacity-100 translate-z-0 text-[#f7f8f8] font-[Rubik] text-[64px] font-normal leading-[61.6px] tracking-[-1.82px] uppercase">About <br/> ONI Protocol</h3>
        <h6 className="text-gray-500 font-['Rubik'] text-lg font-normal leading-7">
            <span className="text-white">ONI Protocol</span>
            is a next-generation decentralized platform designed to empower users with advanced tools in DePIN and seamless experiences in the DeFi landscape.
        </h6>
      </div>
      <div className="w-full max-w-[calc(100%-550px)] aspect-[830/920] relative">
        <img src={bgAbout} alt="bgAbout" class="absolute inset-0 -z-10 aspect-[1245/920] bg-center bg-cover mt-28"/>
      </div>
    </div>
  )
}

export default About
