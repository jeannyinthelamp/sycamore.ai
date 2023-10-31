/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Onboarding_header from "../../Components/Onboarding/Onboarding_header/Onboarding_header";
import Onboarding_progress_bar from "../../Components/Onboarding/Onboarding_progress_bar/Onboarding_progress_bar";
import Onboarding_nav from "../../Components/Onboarding/Onboarding_nav/Onboarding_nav";
import Onboarding_Checkbox_Large from "../../Components/Onboarding/Onboarding_Large_Checkbox/Onboarding_large_checkbox";
import Person from "../../Assets/Icons/Person.svg";
import Group from "../../Assets/Icons/Group.svg";
import School from "../../Assets/Icons/School.svg";

import { Link } from "react-router-dom";

export default function Onboarding_2() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Onboarding_header />

      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <Onboarding_progress_bar active='page2' />

      <div className='title-and-button-wrapper max-w-[714px] h-auto flex flex-col justify-center items-center'>
        <div className='text-wrapper h-auto flex flex-col gap-[24px]'>
          <h1 className='w-[100%] min-h-[54px] font-Poppins text-[40px] font-semibold text-[#212529] text-center leading-[54px]'>
            How are you planning to use Syne?
          </h1>
          <p className='min-h-[28px] font-Poppins font-medium text-[18px] text-center text-[#212529] leading-[28px]'>
            Tell us more about your work
          </p>
        </div>
        {/* //^ add form action */}
        <form action=''>
          <div className='first-selection-wrapper max-w-[420px] h-auto mt-[72px] mb-[48px] flex flex-col justify-start items-start'>
            <label className='mb-[24px] flex flex-col items-start gap-[24px] font-Poppins font-medium text-[16px] text-center text-[212529] leading-[24px]'>
              {/* //^ select items here, use form select items */}
              <div className='checkbox-wrapper flex flex-row flex-wrap gap-[12px]'>
                <Onboarding_Checkbox_Large
                  title='For Myself'
                  id='For Myself'
                  for='For Myself'
                  img={<img src={Person} alt='For Myself' />}
                  className=''
                />
                <Onboarding_Checkbox_Large
                  title='With My Team'
                  id='With My Team'
                  for='With My Team'
                  img={<img src={Group} alt='With My Team' />}
                  className=''
                />
                <Onboarding_Checkbox_Large
                  title='For School'
                  id='For School'
                  for='For School'
                  img={<img src={School} alt='For School' />}
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
