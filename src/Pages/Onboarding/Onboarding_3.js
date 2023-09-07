import React from "react";
import Onboarding_header from "../../Components/ButtonSmall/Onboarding_header/Onboarding_header";
import Onboarding_nav from "../../Components/ButtonSmall/Onboarding_nav/Onboarding_nav";
import Onboarding_progress_bar from "../../Components/ButtonSmall/Onboarding_progress_bar/Onboarding_progress_bar";

export default function Onboarding_3() {
  return (
    <div>
      Onboarding_3
      <Onboarding_header />
      <Onboarding_nav />
      <div className='title-and-button-wrapper max-w-[505px] h-auto mt-[75px] mx-auto flex flex-col justify-center items-center border border-solid border-red-600'>
        <h1 className='w-[100%] h-[124px] mb-[12px] font-[Inter] text-[44px] font-semibold text-black text-center leading-[61.6px] tracking-[-1.9%]'>
          Help us customize your workspace
        </h1>
        <p className='mb-[32px] font-[Inter] font-semibold text-[24px] text-center text-[#717171] leading-[36px] tracking-[-1.9%]'>
          This will not impact your workspace
        </p>
        <div className='button-options-wrapper w-[100%] px-[14px] flex flex-col justify-start items-start'>
          <h2 className=''>What are you doing?</h2>
          {/* //^ select items here, use form select items */}
        </div>
      </div>
      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <Onboarding_progress_bar active='page3' />
    </div>
  );
}
