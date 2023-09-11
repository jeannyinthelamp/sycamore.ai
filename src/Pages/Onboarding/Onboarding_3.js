/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Onboarding_header from "../../Components/Onboarding/Onboarding_header/Onboarding_header";
import Onboarding_nav from "../../Components/Onboarding/Onboarding_nav/Onboarding_nav";
import Onboarding_progress_bar from "../../Components/Onboarding/Onboarding_progress_bar/Onboarding_progress_bar";
import Onboarding_Checkbox from "./Onboarding_Checkbox/Onboarding_Checkbox";

export default function Onboarding_3() {
  return (
    <div>
      <Onboarding_header />
      <Onboarding_nav />
      <div className='relative title-and-button-wrapper max-w-[505px] h-auto mt-[75px]  mx-auto flex flex-col justify-center items-center'>
        <h1 className='w-[100%] h-[124px] mb-[12px] font-[Inter] text-[44px] font-semibold text-black text-center leading-[61.6px] tracking-[-1.9%]'>
          Help us customize your workspace
        </h1>
        <p className='mb-[32px] font-[Inter] font-semibold text-[24px] text-center text-[#717171] leading-[36px] tracking-[-1.9%]'>
          This will not impact your workspace
        </p>
        <div className='first-selection-wrapper w-[100%] mb-[48px] px-[14px] flex flex-col justify-start items-start'>
          <h2 className='mb-[16px] font-[Inter] font-semibold text-[18px] text-center text-black leading-[27px] tracking-[-1.9%]'>
            What are you doing?
          </h2>
          {/* //^ select items here, use form select items */}
          <div className='checkbox-wrapper flex flex-row gap-[10px]'>
            <Onboarding_Checkbox
              title='Sales'
              id='Sales'
              for='Sales'
              className=''
            />
            <Onboarding_Checkbox
              title='Design'
              id='Design'
              for='Design'
              className=''
            />
            <Onboarding_Checkbox
              title='Finance'
              id='Finance'
              for='Finance'
              className=''
            />
            <Onboarding_Checkbox
              title='Others'
              id='Others'
              for='Others'
              className=''
            />
          </div>
        </div>
        <div className='second-selection-wrapper w-[100%] px-[14px] flex flex-col justify-start items-start'>
          <h2 className='mb-[16px] font-[Inter] font-semibold text-[18px] text-center text-black leading-[27px] tracking-[-1.9%]'>
            Whats's your role
          </h2>
          {/* //^ select items here, use form select items */}
          <div className='checkbox-wrapper flex flex-row flex-wrap gap-[10px]'>
            <Onboarding_Checkbox
              title='Team Member'
              id='Team Member'
              for='Team Member'
              className=''
            />
            <Onboarding_Checkbox
              title='Manager'
              id='Manager'
              for='Manager'
              className=''
            />
            <Onboarding_Checkbox title='Change Me' id='' for='' className='' />
            <Onboarding_Checkbox title='Change Me' id='' for='' className='' />
            <Onboarding_Checkbox title='Change Me' id='' for='' className='' />
            <Onboarding_Checkbox
              title='Others'
              id='Others-Role'
              for='Others-Role'
              className=''
            />
          </div>
        </div>
      </div>
      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <Onboarding_progress_bar active='page3' />
    </div>
  );
}
