/* eslint-disable react/jsx-pascal-case */
import React from "react";
import {default as Header} from "../../Components/Onboarding/Onboarding_header/Onboarding_header"
import {default as ProgressBar} from "../../Components/Onboarding/Onboarding_progress_bar/Onboarding_progress_bar"
import { safari_input_styling } from "../../Components/Styles/Safari_Input_Styling";

export default function Onboarding_4() {
  // Safari has an issue where its difficult to change input border-radius. This function detects a users browser, then injects classNames into it to create an rounded outline
  function detectBrowser() {
    if (navigator.userAgent.includes("Safari")) {
      return safari_input_styling;
    }
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <Header />
      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <ProgressBar active='page4' />

      <div className='title-and-form-wrapper max-w-[541px] mx-[20px] h-auto flex flex-col justify-center items-center'>
        <div className='text-wrapper max-w-[541px] h-auto mb-[72px] flex flex-col justify-start items-center'>
          <h1 className='w-[100%] mb-[24px] mx-[22px] font-Poppins text-[40px] font-semibold text-black text-center leading-[54px]'>
            Create your workspace
          </h1>
          <p className='font-Poppins text-[18px] font-medium leading-[28px] text-center'>
            Help us customize your workspace
          </p>
        </div>
        <div className='bg-[#CED4DA] p-[10px] w-[120px] h-[120px] flex flex-col items-center'>
          <h1 className='text-6xl pt-5 text-white font-Poppins font-extrabold'>
            U
          </h1>
        </div>
        <br />
        <br />
        <form
          action=''
          className='w-[79.8%] h-auto flex flex-col gap-[24px] justify-center items-start'
        >
          <label
            className='w-[100%] flex flex-col gap-[5px] font-Poppins text-[#00000080] text-[16px] font-normal leading-[24px] 
                '
          >
            Workspace Name *
            <input
              //
              type='text'
              name='company-name'
              className={`${detectBrowser()} w-[100%] h-auto py-[10px] px-[16px] font-Poppins font-normal text-[#212529] leading-[24px]  outline outline-1 outline-[#CED4DA] rounded-lg`}
            />
          </label>

          {/* TODO: You can use the traverseNext function from onboarding_nav.js for the continue button navigation functionality */}

          <input
            type='submit'
            value='Continue'
            className=' w-[100%] mt-[24px] py-[12px] px-[24px] flex justify-center items-center bg-[#212529] rounded-lg font-Poppins text-[#F8F9FA] text-center text-[16px] font-medium leading-[24px] outline-none border-none cursor-pointer $'
          />
        </form>
      </div>
    </div>
  );
}
