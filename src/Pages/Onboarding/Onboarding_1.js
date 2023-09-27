import React from "react";
import Onboarding_header from "../../Components/Onboarding/Onboarding_header/Onboarding_header";
import Onboarding_progress_bar from "../../Components/Onboarding/Onboarding_progress_bar/Onboarding_progress_bar";

export default function Onboarding_1() {
  return (
    <div>
      <Onboarding_header />

      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <Onboarding_progress_bar active='page1' />

      <div className='title-and-form-wrapper max-w-[541px] h-auto mx-auto flex flex-col justify-center items-center border border-red-500'>
        <div className='text-wrapper h-[106px] mb-[72px] flex flex-col justify-start items-center border border-blue-500'>
          <h1 className='mb-[24px] font-Poppins text-[40px] font-semibold text-black text-center leading-[54px]'>
            Let's set up your account
          </h1>
          <p className='font-Poppins text-[18px] font-medium leading-[28px] text-center'>
            You can always change them later
          </p>
        </div>
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
    </div>
  );
}
