import React from "react";
import syne_logo from "../../../Assets/Icons/syne-logo.svg";

export default function Onboarding_header() {
  return (
    <div className='flex justify-center'>
      <div className='w-screen h-[85px] max-w-[1440px] flex justify-start items-center border-b-[0.5px] border-solid border-black '>
        <img
          className='ml-[39px] mr-[57.66px]'
          src={syne_logo}
          alt='Syne Logo'
        />
        <p className='w-[455px] h-[20px] font-[inter] text-sm font-medium leading-[21px] tracking-[-0.266px] uppercase color'>
          About you / <span className='text-[#999]'>About your work</span>
        </p>
      </div>
    </div>
  );
}
