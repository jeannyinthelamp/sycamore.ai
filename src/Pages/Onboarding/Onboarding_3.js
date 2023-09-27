/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Onboarding_header from "../../Components/Onboarding/Onboarding_header/Onboarding_header";
import Onboarding_progress_bar from "../../Components/Onboarding/Onboarding_progress_bar/Onboarding_progress_bar";
import Onboarding_Checkbox from "../../Components/Onboarding/Onboarding_Checkbox/Onboarding_Checkbox";
import Onboarding_BackButton from "../../Components/Onboarding/Onboarding_BackButton/Onboarding_BackButton";
import { Link } from "react-router-dom";

export default function Onboarding_3() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Onboarding_header />

      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <Onboarding_progress_bar active='page3' />

      <div className='title-and-button-wrapper max-w-[714px] h-auto flex flex-col justify-center items-center'>
        <div className='text-wrapper h-auto flex flex-col gap-[24px]'>
          <h1 className='w-[100%] min-h-[54px] font-Poppins text-[40px] font-semibold text-[#212529] text-center leading-[54px]'>
            Help us learn more about you
          </h1>
          <p className='min-h-[28px] font-Poppins font-medium text-[18px] text-center text-[#212529] leading-[28px]'>
            This will not impact your workspace
          </p>
        </div>
        {/* //^ add form action */}
        <form action=''>
          <div className='first-selection-wrapper max-w-[420px] h-auto mt-[72px] mb-[48px] flex flex-col justify-start items-start'>
            <label className='mb-[24px] flex flex-col items-start gap-[24px] font-Poppins font-medium text-[16px] text-center text-[212529] leading-[24px]'>
              What are you doing?
              {/* //^ select items here, use form select items */}
              <div className='checkbox-wrapper flex flex-row flex-wrap gap-[12px]'>
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
                  title='Marketing'
                  id='Marketing'
                  for='Marketing'
                  className=''
                />
                <Onboarding_Checkbox
                  title='Development'
                  id='Development'
                  for='Development'
                  className=''
                />
                <Onboarding_Checkbox
                  title='Others'
                  id='Others-type'
                  for='Others-type'
                  className='bg-[#F8F9FA] text-[#6C757D]'
                />
              </div>
            </label>
          </div>

          <div className='second-selection-wrapper max-w-[420px] h-auto mb-[48px] flex flex-col justify-start items-start'>
            <h2 className='mb-[24px] font-Poppins font-medium text-[16px] text-center text-[212529] leading-[24px]'>
              Whats's your role
            </h2>
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
              <Onboarding_Checkbox
                title='Assistant'
                id='Assistant'
                for='Assistant'
                className=''
              />
              <Onboarding_Checkbox
                title='Director'
                id='Director'
                for='Director'
                className=''
              />
              <Onboarding_Checkbox
                title='Contractor'
                id='Contractor'
                for='Contractor'
                className=''
              />
              <Onboarding_Checkbox
                title='Others'
                id='Others-role'
                for='Others-role'
                className='bg-[#F8F9FA] text-[#6C757D]'
              />
            </div>
          </div>
          {/* //* Navigation Button and form Submit Input */}
          <div className='navigation-wrapper max-w-[420px] h-auto flex flex-row gap-[12px]'>
            <Onboarding_BackButton />
            <input
              type='submit'
              value='Continue'
              className=' w-[50%] py-[12px] px-[24px] flex justify-center items-center bg-[#212529] rounded-lg font-Poppins text-[#F8F9FA] text-center text-[16px] font-medium leading-[24px] outline-none border-none cursor-pointer'
            />
          </div>
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
