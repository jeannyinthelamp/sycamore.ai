import React from "react";
import Onboarding_header from "../../Components/Onboarding/Onboarding_header/Onboarding_header";
import checkmark from "../../Assets/Icons/check_circle.svg";
import { Link } from "react-router-dom";

export default function Onboarding_7() {
  //update username
  const userName = undefined;
  return (
    <div className='flex flex-col justify-center items-center'>
      <Onboarding_header />
      <div className='inner-wrapper max-w-[579px] h-auto mt-[240px] flex flex-col justify-center items-center '>
        <img
          src={checkmark}
          alt='check mark'
          className='max-w-[95px] mb-[60.5px]'
        />
        <p className='mb-[72px] font-Poppins text-[18px] font-medium text-[#212529] leading-[28px] text-center'>
          {`Nice! ${userName} has been successfully created in your workspace!`}
        </p>
        <Link to='' className=''>
          {/* //TODO: Update tracking on all buttons for onboarding */}
          <button className=' max-w-[420px] py-[12px] px-[141px] flex justify-center items-center bg-[#212529] rounded-lg font-Poppins text-[#F8F9FA] text-center text-[16px] font-medium leading-[24px] outline-none border-none cursor-pointer tracking-[1px] $'>
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
