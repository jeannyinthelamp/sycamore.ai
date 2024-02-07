/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import Onboarding_progress_bar from "../../Components/Onboarding/Onboarding_progress_bar/Onboarding_progress_bar";
import Onboarding_nav from "../../Components/Onboarding/Onboarding_nav/Onboarding_nav";
import Onboarding_Checkbox from "../../Components/Onboarding/Onboarding_Checkbox/Onboarding_Checkbox";
import Onboarding_Skip_Continue_Btns from "../../Components/Onboarding/Onboarding_Skip_Continue_Buttons/Onboarding_Skip_Continue_Buttons";

export default function Onboarding_2() {
  const [checkboxStates, setCheckboxStates] = useState({});

  const handleCheckboxChange = (id, isChecked) => {
    setCheckboxStates(prevStates => ({
        ...prevStates,
        [id]: isChecked
    }));
  };

  const countSelectedCheckboxes = () => {
    return Object.values(checkboxStates).filter(state => state).length; // count of items
  };

  const isAnyCheckboxSelected = () => {
    return countSelectedCheckboxes() > 0;
  };


  return (
    <div className='flex flex-col justify-center items-center'>
      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <Onboarding_nav />

      <div className='title-and-button-wrapper max-w-[714px] h-aut mt-[30px] flex flex-col justify-center items-center'>
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
          <div className='mx-auto mt-[50px] mb-[48px] w-[60%]'>
            <label className='mb-[24px] flex flex-col items-start gap-[24px] font-Poppins font-medium text-[16px] text-center text-[212529] leading-[24px]'>
              <div className='checkbox-wrapper flex flex-row flex-wrap gap-[12px] justify-center items-center'>
                <Onboarding_Checkbox
                  title='Productivity'
                  id='Productivity'
                  for='Productivity'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='Administration'
                  id='Administration'
                  for='Administration'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='Finance Tracking'
                  id='Finance Tracking'
                  for='Finance Tracking'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='Time Tracking'
                  id='Time Tracking'
                  for='Time Tracking'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='Marketing Pipeline'
                  id='Marketing Pipeline'
                  for='Marketing Pipeline'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='Organization'
                  id='Organization'
                  for='Organization'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='Sales Pipeline'
                  id='Sales Pipeline'
                  for='Sales Pipeline'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='Freelancing'
                  id='Freelancing'
                  for='Freelancing'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='Project Management'
                  id='Project Management'
                  for='Project Management'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='Product Management'
                  id='Product Management'
                  for='Product Management'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='Development Pipeline'
                  id='Development Pipeline'
                  for='Development Pipeline'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
              </div>
            </label>
          </div>
          {/* Go Back and Continue Buttons */}

          <Onboarding_Skip_Continue_Btns
            btnText='Continue'
            message='Are you sure you want to skip?'
            modalPosition='top-[180px]'
            skipToPage='/onboarding_3'
            continueToPage='/onboarding_3'
        disabledState={!isAnyCheckboxSelected()}
          />
        </form>
        <Onboarding_progress_bar active='page2' />
      </div>
    </div>
  );
}
