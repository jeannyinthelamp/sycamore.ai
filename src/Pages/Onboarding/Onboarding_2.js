/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Onboarding_header from "../../Components/Onboarding/Onboarding_header/Onboarding_header";
import Onboarding_progress_bar from "../../Components/Onboarding/Onboarding_progress_bar/Onboarding_progress_bar";
import Onboarding_nav from "../../Components/Onboarding/Onboarding_nav/Onboarding_nav";
import Onboarding_Checkbox from "../../Components/Onboarding/Onboarding_Checkbox/Onboarding_Checkbox";

import { Link } from "react-router-dom";

export default function Onboarding_2() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Onboarding_header />

      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <Onboarding_progress_bar active='page3' />

      <div className='title-and-button-wrapper max-w-[714px] h-auto flex flex-col justify-center items-center'>
        <div className='text-wrapper h-auto flex flex-col gap-[24px]'>
          <h1 className='w-[100%] min-h-[54px] font-Poppins text-[40px] font-semibold text-[#212529] text-center leading-[54px]'>
            How would you like to use Syne?
          </h1>
          <p className='min-h-[28px] font-Poppins font-medium text-[18px] text-center text-[#212529] leading-[28px]'>
            Choose 1 or more.
          </p>
        </div>
        {/* //^ add form action */}
        <form action=''>
          <div className='mx-auto mt-[72px] mb-[48px]'>
            <label className='mb-[24px] flex flex-col items-start gap-[24px] font-Poppins font-medium text-[16px] text-center text-[212529] leading-[24px]'>
              <div className='checkbox-wrapper flex flex-row flex-wrap gap-[12px]'>
                <Onboarding_Checkbox
                  title='Productivity'
                  id='Productivity'
                  for='Productivity'
                  className=''
                  />
                <Onboarding_Checkbox
                  title='Administration'
                  id='Administration'
                  for='Administration'
                  className=''
                />
                <Onboarding_Checkbox
                  title='Finance Tracking'
                  id='Finance Tracking'
                  for='Finance Tracking'
                  className=''
                />
                <Onboarding_Checkbox
                  title='Time Tracking'
                  id='Time Tracking'
                  for='Time Tracking'
                  className=''
                />
                <Onboarding_Checkbox
                  title='Marketing Pipeline'
                  id='Marketing Pipeline'
                  for='Marketing Pipeline'
                  className=''
                />
                <Onboarding_Checkbox
                title='Organization'
                id='Organization'
                for='Organization'
                className=''
                />
                <Onboarding_Checkbox
                title='Sales Pipeline'
                id='Sales Pipeline'
                for='Sales Pipeline'
                className=''
                />
                <Onboarding_Checkbox
                title='Freelancing'
                id='Freelancing'
                for='Freelancing'
                className=''
                />
                <Onboarding_Checkbox
                title='Project Management'
                id='Project Management'
                for='Project Management'
                className=''
                />
                <Onboarding_Checkbox
                title='Product Management'
                id='Product Management'
                for='Product Management'
                className=''
                />
                <Onboarding_Checkbox
                title='Development Pipeline'
                id='Development Pipeline'
                for='Development Pipeline'
                className=''
                />
              </div>
            </label>
          </div>
          {/* Go Back and Continue Buttons */}
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
