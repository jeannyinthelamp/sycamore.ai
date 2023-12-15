/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Onboarding_progress_bar from "../../Components/Onboarding/Onboarding_progress_bar/Onboarding_progress_bar";
import Onboarding_nav from "../../Components/Onboarding/Onboarding_nav/Onboarding_nav";
import Onboarding_Dropdown from "../../Components/Onboarding/Onboarding_Dropdown/Onboarding_dropdown";
import { Link } from "react-router-dom";
import { safari_input_styling } from "../../Components/Styles/Safari_Input_Styling";
import Globe from "../../Assets/Icons/globe.svg";
import Dropdownarrow from "../../Assets/Icons/dropdownarrow.svg";
import Closeicon from "../../Assets/Icons/Closeicon.svg";

export default function Onboarding_6() {
  // Safari has an issue where its difficult to change input border-radius. This function detects a users browser, then injects classNames into create an outline
  function detectBrowser() {
    if (navigator.userAgent.includes("Safari")) {
      return safari_input_styling;
    }
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <Onboarding_nav/>

      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <Onboarding_progress_bar active='page6' />

      <div className='title-and-form-wrapper max-w-[541px] mx-[20px] h-auto flex flex-col justify-center items-center'>
        <div className='text-wrapper max-w-[541px] h-auto mb-[72px] flex flex-col justify-start items-center'>
          <h1 className='mb-[24px] mx-[22px] font-Poppins text-[40px] font-semibold text-black text-center leading-[54px]'>
            Invite your team members
          </h1>
          <p className='font-Poppins text-[18px] font-medium leading-[28px] text-center'>
            Add members to collaborate within a workspace
          </p>
        </div>
        <form
          action=''
          className='w-[79.8%] h-auto flex flex-col gap-[24px] justify-center items-start'
        >
          <div className='flex flex-row gap-[8px] w-[100%]'>
            <label
              className='w-[100%] flex flex-col gap-[5px] font-Poppins text-[#00000080] text-[16px] font-normal leading-[24px]
                '
            >
              <input
                //
                type='text'
                name='project-title'
                required
                placeholder='Add Email'
                className={`${detectBrowser()} w-[100%] h-auto py-[10px] px-[16px] font-Poppins font-normal text-[#212529] leading-[24px] outline outline-1 outline-[#CED4DA] rounded-lg`}
              />
            </label>
            <button className='bg-[#556AEB] rounded-md px-4 py-2 text-white font-Poppins items-center'>
              Invite
            </button>
          </div>
          <Onboarding_Dropdown
            title='Anyone with the link'
            id='Anyone with the link'
            img1={<img src={Globe} alt='Globe' />}
            img2={<img src={Dropdownarrow} alt='arrow' />}
            img3={<img src={Dropdownarrow} alt='arrow' />}
            description='Can View'
          />
          <div className='border border-[#CED4DA] w-[100%]'></div>

          <div className='flex flex-col gap-8 w-full justify-between overflow-y-auto'>
            <Onboarding_Dropdown
              title='John (you)'
              id='John (you)'
              img1={<img src={Closeicon} alt='cancel' />}
              img3={<img src={Dropdownarrow} alt='arrow' />}
              description='Can Edit'
            />
            <Onboarding_Dropdown
              title='Sarah'
              id='Sarah'
              img1={<img src={Closeicon} alt='cancel' />}
              img3={<img src={Dropdownarrow} alt='arrow' />}
              description='Can Edit'
            />
            <Onboarding_Dropdown
              title='example1234@gmail.com'
              id='example1234@gmail.com'
              img1={<img src={Closeicon} alt='cancel' />}
              img3={<img src={Dropdownarrow} alt='arrow' />}
              description='Comment Only'
            />
          </div>

          <button
            className={`${detectBrowser()} w-[100%] h-auto py-[10px] px-[16px] font-Poppins font-normal text-[#556AEB] leading-[24px] outline outline-1 outline-[#556AEB] rounded-lg`}
          >
            Copy Link
          </button>

          {/* //* Navigation Button and form Submit Input */}
          <Onboarding_nav />
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
