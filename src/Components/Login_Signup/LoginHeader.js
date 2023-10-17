import React from "react";
import syne_logo from "../../Assets/Icons/syne-logo.svg";

export default function LoginHeader() {
  return (
    <div className='header-outer-wrapper w-[100%] h-[65.94px] flex justify-center items-center border-b-[1px] border-[#DEE2E6]'>
      <div className='header-inner-wrapper w-[100%] max-w-[1392px] h-[33.94px] mx-[24px] flex justify-start items-center'>
        <img
          className='w-[30px] h-[30px] mr-[14px]'
          src={syne_logo}
          alt='Syne Logo'
        />
        <p className='font-Poppins text-[20px] font-normal leading-[30px]'>
          Syne
        </p>
      </div>
    </div>
  );
}
