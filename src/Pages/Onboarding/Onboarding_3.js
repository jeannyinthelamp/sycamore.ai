/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Onboarding_progress_bar from "../../Components/Onboarding/Onboarding_progress_bar/Onboarding_progress_bar";
import Onboarding_nav from "../../Components/Onboarding/Onboarding_nav/Onboarding_nav";
import Onboarding_Checkbox from "../../Components/Onboarding/Onboarding_Checkbox/Onboarding_Checkbox";
import Onboarding_Skip_Continue_Btns from "../../Components/Onboarding/Onboarding_Skip_Continue_Buttons/Onboarding_Skip_Continue_Buttons";

export default function Onboarding_3() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Onboarding_nav />

      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <div className='title-and-button-wrapper max-w-[714px] h-auto mt-[20px] flex flex-col justify-center items-center'>
        <div className='text-wrapper h-auto flex flex-col gap-[24px]'>
          <h1 className='w-[100%] min-h-[54px] font-Poppins text-[40px] font-semibold text-[#212529] text-center leading-[54px]'>
            What's your role?
          </h1>
          <p className='min-h-[28px] font-Poppins font-medium text-[18px] text-center text-[#212529] leading-[28px]'>
            Choose 1 or more.
          </p>
        </div>
        {/* //^ add form action */}
        <form action=''>
          <div className='mx-auto mt-[50px] mb-[48px] w-[60%]'>
            <label className='mb-[24px] flex flex-col items-start gap-[24px] font-Poppins font-medium text-[16px] text-center text-[212529] leading-[24px]'>
              <div className='checkbox-wrapper flex flex-row flex-wrap gap-[12px] justify-center items-center'>
                <Onboarding_Checkbox
                  title='Product Manager'
                  id='Product Manager'
                  for='Product Manager'
                  className=''
                />
                <Onboarding_Checkbox
                  title='Writer'
                  id='Writer'
                  for='Writer'
                  className=''
                />
                <Onboarding_Checkbox
                  title='Designer'
                  id='Designer'
                  for='Designer'
                  className=''
                />
                <Onboarding_Checkbox
                  title='Project Manager'
                  id='Project Manager'
                  for='Project Manager'
                  className=''
                />
                <Onboarding_Checkbox
                  title='HR Coordinator'
                  id='HR Coordinator'
                  for='HR Coordinator'
                  className=''
                />
                <Onboarding_Checkbox
                  title='Developer'
                  id='Developer'
                  for='Developer'
                  className=''
                />
                <Onboarding_Checkbox
                  title='Software Engineer'
                  id='Software Engineer'
                  for='Software Engineer'
                  className=''
                />
                <Onboarding_Checkbox
                  title='Freelancer'
                  id='Freelancer'
                  for='Freelancer'
                  className=''
                />
                <Onboarding_Checkbox
                  title='Side Gig Starter'
                  id='Side Gig Starter'
                  for='Side Gig Starter'
                  className=''
                />
                <Onboarding_Checkbox
                  title='Student'
                  id='Student'
                  for='Student'
                  className=''
                />
                <Onboarding_Checkbox
                  title='Business Owner'
                  id='Business Owner'
                  for='Business Owner'
                  className=''
                />
              </div>
            </label>
          </div>
          {/* Go Back and Continue Buttons */}

          <Onboarding_Skip_Continue_Btns
            btnText='Continue'
            message='Are you sure you want to skip?'
            modalPosition='top-[170px]'
            skipToPage='/onboarding_4'
            continueOnClick={(e) => {
              // continue logic
            }}
          />
        </form>
        <Onboarding_progress_bar active='page3' />
      </div>
    </div>
  );
}
