import React from "react";
import Onboarding_header from "../../Components/ButtonSmall/Onboarding_header/Onboarding_header";
import Onboarding_nav from "../../Components/ButtonSmall/Onboarding_nav/Onboarding_nav";
import Onboarding_progress_bar from "../../Components/ButtonSmall/Onboarding_progress_bar/Onboarding_progress_bar";

export default function Onboarding_1() {
  return (
    <div>
      {/* The 'Next' button in header may need to operate as both a submit button for the form and a transition to the next page */}
      <Onboarding_header />
      <Onboarding_nav />
      <div className='title-and-form-wrapper w-[424px] h-auto mx-auto flex flex-col justify-center items-center border border-solid border-red-500'>
        <h1 className='mb-[25px] font-[Inter] text-[44px] font-semibold text-black text-center leading-[140%] tracking-[-0.836px]'>
          Let's set up your account
        </h1>
        <form
          action=''
          className='w-[424px] h-auto flex flex-col justify-center items-start border border-solid border-blue-500'
        >
          <label className='mb-[10px] flex flex-col font-[Inter] text-[#C8C8C8] text-sm font-medium leading-[21px] tracking-[-0.266px]'>
            Your Name
            <input type='text' name='name' />
          </label>
          <label className='mb-[10px] flex flex-col font-[Inter] text-[#C8C8C8] text-sm font-medium leading-[21px] tracking-[-0.266px]'>
            Email
            <input type='text' name='name' />
          </label>
        </form>
      </div>
      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <Onboarding_progress_bar active='page1' />
    </div>
  );
}
