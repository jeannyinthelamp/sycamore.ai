import React from "react";
import Onboarding_header from "../../Components/ButtonSmall/Onboarding_header/Onboarding_header";
import Onboarding_nav from "../../Components/ButtonSmall/Onboarding_nav/Onboarding_nav";
import Onboarding_progress_bar from "../../Components/ButtonSmall/Onboarding_progress_bar/Onboarding_progress_bar";

export default function Onboarding_1() {
  return (
    <div>
      {/* //^ The 'Next' button in header may need to operate as both a submit button for the form and a transition to the next page */}
      <Onboarding_header />
      <Onboarding_nav />
      <div className='title-and-form-wrapper w-[424px] h-auto mt-[75px] mx-auto flex flex-col justify-center items-center'>
        <h1 className='mb-[25px] font-[Inter] text-[44px] font-semibold text-black text-center leading-[140%] tracking-[-0.836px]'>
          Let's set up your account
        </h1>
        <form
          action=''
          className='w-[424px] h-auto flex flex-col justify-center items-start'
        >
          <label className='mb-[10px] flex flex-col font-[Inter] text-[#C8C8C8] text-sm font-medium leading-[21px] tracking-[-0.266px]'>
            Your Name
            <input
              //
              type='text'
              name='name'
              className=' w-[424px] h-auto mt-[8px] mb-[16px] py-[12px] px-[17px] bg-[#F6F6F6] text-[#A7A7A7] font-[Inter] text-sm font-medium leading-[21px] tracking-[-0.266px] border-none outline-none'
            />
          </label>
          <label className='mb-[10px] flex flex-col font-[Inter] text-[#C8C8C8] text-sm font-medium leading-[21px] tracking-[-0.266px]'>
            Email
            <input
              //
              type='email'
              required
              name='email'
              className=' w-[424px] h-auto mt-[8px] mb-[16px] py-[12px] px-[17px] bg-[#F6F6F6] text-[#A7A7A7] font-[Inter] text-sm font-medium leading-[21px] tracking-[-0.266px] border-none outline-none'
            />
          </label>
          <label className='mb-[10px] flex flex-col font-[Inter] text-black text-sm font-medium leading-[21px] tracking-[-0.266px]'>
            Company Name
            <input
              //
              type='text'
              name='company-name'
              placeholder='Optional'
              className=' w-[424px] h-auto mt-[8px] mb-[16px] py-[12px] px-[17px] bg-[#222] text-[#858585] font-[Inter] text-sm font-medium leading-[21px] tracking-[-0.266px] border-none outline-none'
            />
          </label>
          <label className='mb-[10px] flex flex-col font-[Inter] text-black text-sm font-medium leading-[21px] tracking-[-0.266px]'>
            Your Company / Portfolio Link
            <input
              //
              type='text'
              name='portfolio'
              //^ Update placeholder to be permanent
              placeholder='https://'
              className=' w-[424px] h-auto mt-[8px] mb-[16px] py-[12px] px-[17px] bg-[#222] text-[#FFF] font-[Inter] text-sm font-medium leading-[21px] tracking-[-0.266px] border-none outline-none'
            />
          </label>
        </form>
      </div>
      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <Onboarding_progress_bar active='page1' />
    </div>
  );
}
