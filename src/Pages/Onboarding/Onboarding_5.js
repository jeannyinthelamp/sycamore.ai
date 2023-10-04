/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Onboarding_Header from "../../Components/Onboarding/Onboarding_Header/Onboarding_header";
import Onboarding_Progress_Bar from "../../Components/Onboarding/Onboarding_Progress_Bar/Onboarding_Progress_Bar";
import Onboarding_Nav from "../../Components/Onboarding/Onboarding_Nav/Onboarding_Nav";
import dot_blue from "../../Assets/Icons/Onboarding/dot-blue.svg";
import dot_orange from "../../Assets/Icons/Onboarding/dot-orange.svg";
import dot_red from "../../Assets/Icons/Onboarding/dot-red.svg";
import dot_green from "../../Assets/Icons/Onboarding/dot-green.svg";
import add_icon from "../../Assets/Icons/Onboarding/plus.svg";
import { Link } from "react-router-dom";
import { safari_input_styling } from "../../Components/Styles/Safari_Input_Styling";

export default function Onboarding_5() {
  // Safari has an issue where its difficult to change input border-radius. This function detects a users browser, then injects classNames into create an outline
  function detectBrowser() {
    if (navigator.userAgent.includes("Safari")) {
      return safari_input_styling;
    }
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <Onboarding_Header />

      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <Onboarding_Progress_Bar active='page5' />

      <div className='title-and-form-wrapper max-w-[541px] mx-[20px] h-auto flex flex-col justify-center items-center'>
        <div className='text-wrapper max-w-[541px] h-auto mb-[72px] flex flex-col justify-start items-center'>
          <h1 className='mb-[24px] mx-[22px] font-Poppins text-[40px] font-semibold text-black text-center leading-[54px]'>
            Let's create a project
          </h1>
          <p className='font-Poppins text-[18px] font-medium leading-[28px] text-center'>
            Add information about your project
          </p>
        </div>
        <form
          action=''
          className='w-[79.8%] h-auto flex flex-col gap-[24px] justify-center items-start'
        >
          <label
            className='w-[100%] flex flex-col gap-[5px] font-Poppins text-[#00000080] text-[16px] font-normal leading-[24px]
                '
          >
            Project Title *
            <input
              //
              type='text'
              name='project-title'
              required
              className={`${detectBrowser()} w-[100%] h-auto py-[10px] px-[16px] font-Poppins font-normal text-[#212529] leading-[24px] outline outline-1 outline-[#CED4DA] rounded-lg`}
            />
          </label>

          <label
            className='w-[100%] flex flex-col gap-[5px] font-Poppins text-[#00000080] text-[16px] font-normal leading-[24px] 
                '
          >
            Date *
            <input
              //
              type='date'
              name='date'
              required
              className={`${detectBrowser()} w-[100%] h-auto py-[10px] px-[16px] font-Poppins font-normal text-[#212529] leading-[24px]  outline outline-1 outline-[#CED4DA] rounded-lg`}
            />
          </label>

          <div className='status-priority-wrapper flex flex-row gap-[20px]'>
            <label
              for='status'
              className='w-[100%] flex flex-col gap-[5px] font-Poppins text-[#00000080] text-[16px] font-normal leading-[24px] 
                '
            >
              Status *
              <select
                name='status'
                id='status'
                required
                className={`select-selected ${detectBrowser()} w-[100%] h-auto py-[10px] px-[12px] font-Poppins font-normal text-[#21252956] leading-[24px] bg-[#FFF] outline outline-1 outline-[#CED4DA] rounded-lg`}
              >
                {/*value attribute must be an empty string if trying to create a 'Not Selected' default option */}
                <option selected value=''>
                  Not Selected
                </option>
                <option
                  value='To Do'
                  onClick={(e) => {
                    console.log(e.target.value);
                  }}
                >
                  To Do
                </option>
                <option
                  value='In Progress'
                  onClick={(e) => {
                    console.log(e.target.value);
                  }}
                >
                  In Progress
                </option>
                <option value='Paused'>Paused</option>
                <option value='Done'>Done</option>
                <option
                  value='add'
                  onClick={() => {
                    console.log("Add option clicked");
                  }}
                >
                  + Add
                </option>
              </select>
            </label>

            <label
              className='w-[100%] flex flex-col gap-[5px] font-Poppins text-[#00000080] text-[16px] font-normal leading-[24px] 
                '
            >
              Priority *
              <input
                //
                type='text'
                name='priority'
                placeholder='Not Selected'
                required
                className={`${detectBrowser()} w-[100%] h-auto py-[10px] px-[16px] font-Poppins font-normal text-[#212529] leading-[24px]  outline outline-1 outline-[#CED4DA] rounded-lg`}
              />
            </label>
          </div>
          <label
            className='w-[100%] mb-[24px] flex flex-col gap-[5px] font-Poppins text-[#00000080] text-[16px] font-normal leading-[24px] 
                '
          >
            Category (Optional)
            <input
              //
              type='text'
              name='project-title'
              placeholder='Not Selected'
              className={`${detectBrowser()} w-[100%] h-auto py-[10px] px-[16px] font-Poppins font-normal text-[#212529] leading-[24px] outline outline-1 outline-[#CED4DA] rounded-lg`}
            />
          </label>

          {/* //* Navigation Button and form Submit Input */}
          <Onboarding_Nav />
        </form>
        <Link
          to=''
          className='h-[24px] mt-[12px] font-Poppins font-medium text-[16px] leading-[24px] text-[#556AEB] text-center underline underline-offset-2 cursor-pointer'
        >
          Ask Later
        </Link>
      </div>
    </div>
  );
}
