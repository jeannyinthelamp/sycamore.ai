import React from "react";
import Onboarding_Header from "../../Components/Onboarding/Onboarding_Header/Onboarding_header";
import checkmark from "../../Assets/Icons/check_circle.svg";
import { Link } from "react-router-dom";

export default function Onboarding_7() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Onboarding_Header />
      <div className='inner-wrapper max-w-[579px] h-auto mt-[240px] mx-[20px] flex flex-col justify-center items-center'>
        <img
          src={checkmark}
          alt='check mark'
          className='max-w-[95px] mb-[48px]'
        />
        <h1 className='mb-[24px] font-Poppins text-[40px] font-semibold leading-[54px] text-center'>
          Your workspace has been successfully created!
        </h1>
        <p className='w-auto h-auto mb-[72px] font-Poppins text-[18px] font-medium text-[#212529] leading-[28px] text-center'>
          Nice! Go to dashboard to see your newly created project.
        </p>
        <Link to='' className='w-[100%] h-auto flex justify-center'>
          <button className='w-[72.6%] py-[12px]  flex justify-center items-center bg-[#212529] rounded-lg font-Poppins text-[#F8F9FA] text-center text-[16px] font-medium leading-[24px] outline-none border-none cursor-pointer'>
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
