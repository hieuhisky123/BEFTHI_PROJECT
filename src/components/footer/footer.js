import React from "react";

const footer = () => {
  return (
    <div class="w-[calc(100%-36px)] mx-auto rounded-[13.5px] border border-[rgba(255,255,255,0.314)] bg-[linear-gradient(rgba(29,32,34,0.59)_0%,rgba(38,40,41,0.59)_100%),rgba(113,113,113,0.26))] backdrop-blur-[7.5px] p-[54px]">
      <div class="flex items-start justify-between w-full max-w-[1280px] mx-auto">
        <div class="flex flex-col gap-[22px] w-[50%]">
          <h3 class="text-[#f9f9f9] text-[18px] font-rubik font-normal leading-[21.6px] uppercase">
            Stay up to date
          </h3>
          <div class="rounded-[6px] border border-[rgba(255,255,255,0.4)] bg-[rgba(3,3,3,0.7)] bg-blend-luminosity shadow-[inset_2px_4px_16px_rgba(248,248,248,0.06)] backdrop-blur-[50px] flex h-[49px] p-[6px_16px_6px_6px] justify-between items-center gap-[6px] self-stretch">
            <input
              class="self-stretch bg-transparent w-[calc(100%-116px)] text-[rgba(255,255,255,0.5)] font-rubik text-[13.395px] font-normal leading-normal tracking-[0.27px]"
              type="text"
              placeholder="Email address"
            />
            <button
              class="rounded-[6px] border border-[rgb(235,238,242)] bg-[linear-gradient(rgb(163,170,180)_0%,rgb(85,88,97)_100%)] flex flex-col p-[14px_16px] justify-center items-center gap-[8px] text-[#111] text-center font-rubik text-[16px] font-medium leading-[12px] uppercase self-stretch"
              type=""
            >
              Sign Up
            </button>
          </div>
        </div>
        <div class="w-[calc(50%-90px)] flex items-start justify-between">
          <ul class="flex flex-col gap-[14px]">
            <li class="text-[#f9f9f9] font-rubik text-[16px] font-normal leading-[18px] list-none no-underline">
              Product
            </li>
            <li class="text-[#f9f9f9] font-rubik text-[16px] font-normal leading-[18px] list-none no-underline">
              Pricing
            </li>
            <li class="text-[#f9f9f9] font-rubik text-[16px] font-normal leading-[18px] list-none no-underline">
              Customers
            </li>
            <li class="text-[#f9f9f9] font-rubik text-[16px] font-normal leading-[18px] list-none no-underline">
              Documentation
            </li>
          </ul>
          <ul class="flex flex-col gap-[14px]">
            <li class="text-[#f9f9f9] font-rubik text-[16px] font-normal leading-[18px] list-none no-underline">
              About
            </li>
            <li class="text-[#f9f9f9] font-rubik text-[16px] font-normal leading-[18px] list-none no-underline">
              Blog
            </li>
            <li class="text-[#f9f9f9] font-rubik text-[16px] font-normal leading-[18px] list-none no-underline">
              Press Kit
            </li>
            <li class="text-[#f9f9f9] font-rubik text-[16px] font-normal leading-[18px] list-none no-underline">
              FAQ
            </li>
          </ul>
          <ul class="flex flex-col gap-[14px]">
            <a
              href="/"
              class="text-[#f9f9f9] font-rubik text-[16px] font-normal leading-[18px] list-none no-underline"
            >
              Twitter (X)
            </a>
            <a
              href="/"
              class="text-[#f9f9f9] font-rubik text-[16px] font-normal leading-[18px] list-none no-underline"
            >
              Youtube
            </a>
            <a
              href="/"
              class="text-[#f9f9f9] font-rubik text-[16px] font-normal leading-[18px] list-none no-underline"
            >
              Telegram Channel
            </a>
            <a
              href="/"
              class="text-[#f9f9f9] font-rubik text-[16px] font-normal leading-[18px] list-none no-underline"
            >
              Telegram Group
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default footer;
