/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Onboarding_header from "../../Components/Onboarding/Onboarding_header/Onboarding_header";
import Onboarding_progress_bar from "../../Components/Onboarding/Onboarding_progress_bar/Onboarding_progress_bar";
import Onboarding_Button from "../../Components/Onboarding/Onboarding_Button/Onboarding_Button";
import { safari_input_styling } from "../../Components/Styles/Safari_Input_Styling";
import { Link } from "react-router-dom"

export default function Onboarding_4() {
  // Safari has an issue where its difficult to change input border-radius. This function detects a users browser, then injects classNames into it to create an rounded outline
  function detectBrowser() {
    if (navigator.userAgent.includes("Safari")) {
      return safari_input_styling;
    }
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <Onboarding_header />

      <div className='title-and-form-wrapper max-w-[730px] mx-[20px] h-auto flex flex-col justify-center items-center'>
        <div className='text-wrapper max-w-[730px] h-auto mb-[72px] flex flex-col justify-start items-center'>
          <h1 className='w-[100%] mb-[24px] mx-[22px] font-Poppins text-[40px] font-semibold text-black text-center leading-[54px]'>
            Let's get your workspace ready
          </h1>
          <p className='font-Poppins text-[18px] font-medium leading-[28px] text-center'>
            Choose an icon and name your workspace (ex. company name). You can always change them later.
          </p>
        </div>
        <div className='bg-[#CED4DA] p-[10px] w-[120px] h-[120px] rounded-full flex flex-col items-center'>
          <h1 className='text-6xl pt-5 text-white font-Poppins font-extrabold'>
            U
          </h1>
        </div>
        <p className='my-[8px] text-[#212529] font-Poppins'>Choose Icon</p>
        <br />
        <br />
        <form
          action=''
          className='w-[79.8%] max-w-[420px] h-auto flex flex-col gap-[24px] justify-center items-center'
        >
          <label
            className='w-[100%] flex flex-col gap-[5px] font-Poppins text-[#00000080] text-[16px] font-normal leading-[24px] 
                '
          >
            <input
              //
              type='text'
              name='company-name'
              placeholder='Example: Syne Studio'
              className={`${detectBrowser()} w-[100%] h-auto py-[10px] px-[16px] font-Poppins font-normal text-[#212529] leading-[24px]  outline outline-1 outline-[#CED4DA] rounded-lg`}
            />
          </label>

          {/* TODO: You can use the traverseNext function from onboarding_nav.js for the continue button navigation functionality */}
          <Onboarding_Button 
            btnText='Continue'
            disabled={true}
          />
        </form>
      </div>
        {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <Link 
        to=''
        className='text-[#0A70E8] underline my-[24px]'
      >
        Skip
      </Link>
      <Onboarding_progress_bar active='page4' />
    </div>
  );
}
