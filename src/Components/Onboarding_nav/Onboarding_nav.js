import React from "react";
import { Link } from "react-router-dom";

export default function Onboarding_nav() {
  const backBtnText = "< Back";
  return (
    <div className='flex justify-center'>
      <div className='w-screen h-[92px] max-w-[1440px] flex justify-between items-center '>
        {/* Build a  */}
        <Link
          //   ! add link 'to' attribute  once other onboarding pages are created
          to=''
          className='font-[inter] text-[16px] font-semibold leading-6 tracking-[-0.304px] ml-[59px]'
        >
          {backBtnText}
        </Link>
        <div className='mr-[47px]'>
          {/* //! add link 'to' attribute once Ask later page is created */}
          <Link to=''>
            <button
              //
              className='w-[127px] h-[58px] mr-[6px] font-[inter] font-medium  text-base leading-[20.8px] tracking-[-0.304px]'
            >
              Ask Later
            </button>
          </Link>
          {/* // ! add link 'to' attribute once other onboarding pages are created */}
          <Link to=''>
            <button
              //
              className='w-[127px] h-[58px] font-[inter] font-medium  text-base leading-[20.8px] tracking-[-0.304px] bg-[#D9D9D9]'
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
