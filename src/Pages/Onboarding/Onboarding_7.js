/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Onboarding_Header from "../../Components/Onboarding/Onboarding_Header/Onboarding_Header";

import checkmark from "../../Assets/Icons/check_circle.svg";
import { Link } from "react-router-dom";

export default function Onboarding_7() {
  //update username
  let userName = undefined;
  return (
    <div className='flex flex-col justify-center items-center'>
      <Onboarding_Header />
      <div className='inner-wrapper max-w-[579px] h-auto mt-[240px] mx-[20px] flex flex-col justify-center items-center'>
        <img
          src={checkmark}
          alt='check mark'
          className='max-w-[95px] mb-[60.5px]'
        />
        <p className='w-auto h-auto mb-[72px] font-Poppins text-[18px] font-medium text-[#212529] leading-[28px] text-center'>
          {`Nice! ${userName} has been successfully created in your workspace!`}
        </p>
        <Link to='' className='w-[100%] h-auto'>
          <button className='w-[100%] py-[12px]  flex justify-center items-center bg-[#212529] rounded-lg font-Poppins text-[#F8F9FA] text-center text-[16px] font-medium leading-[24px] outline-none border-none cursor-pointer'>
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
