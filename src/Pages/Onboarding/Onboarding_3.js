/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import Onboarding_progress_bar from "../../Components/Onboarding/Onboarding_progress_bar/Onboarding_progress_bar";
import Onboarding_nav from "../../Components/Onboarding/Onboarding_nav/Onboarding_nav";
import Onboarding_Checkbox from "../../Components/Onboarding/Onboarding_Checkbox/Onboarding_Checkbox";
import Onboarding_Skip_Continue_Btns from "../../Components/Onboarding/Onboarding_Skip_Continue_Buttons/Onboarding_Skip_Continue_Buttons";

export default function Onboarding_3() {
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
      <Onboarding_nav />

      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <div className='title-and-button-wrapper max-w-[714px] h-auto mt-[20px] flex flex-col justify-center items-center'>
        <div className='text-wrapper h-auto flex flex-col gap-[24px]'>
          <h1 className='w-[100%] min-h-[54px] font-Poppins text-[40px] font-semibold text-[#212529] text-center leading-[54px]'>
            What's your role?
          </h1>
          <p className='min-h-[28px] font-Roboto-Flex font-medium text-[18px] text-center text-[#212529] leading-[28px]'>
            Choose 1 or more.
          </p>
        </div>
        {/* //^ add form action */}
        <form action=''>
          <div className='mx-auto mt-[50px] mb-[48px] w-[730px]'>
            <label className='mb-[24px] flex flex-col items-start gap-[24px] font-Roboto-Flex font-medium text-[16px] text-center text-[212529] leading-[24px]'>
              <div className='checkbox-wrapper flex flex-row flex-wrap gap-[12px] justify-center items-center'>
                <Onboarding_Checkbox
                  title='Freelancer'
                  id='Freelancer'
                  for='Freelancer'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='Student / Intern'
                  id='Student / Intern'
                  for='Student / Intern'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='Sales Coordinator'
                  id='Sales Coordinator'
                  for='Sales Coordinator'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='Developer'
                  id='Developer'
                  for='Developer'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='Executive Team'
                  id='Executive Team'
                  for='Executive Team'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='HR Coordinator'
                  id='HR Coordinator'
                  for='HR Coordinator'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='Designer'
                  id='Designer'
                  for='Designer'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='Owner'
                  id='Owner'
                  for='Owner'
                  className=''
                  handleCheckboxChange={handleCheckboxChange}
                />
                <Onboarding_Checkbox
                  title='Manager'
                  id='Manager'
                  for='Manager'
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
            modalPosition='top-[170px]'
            skipToPage='/onboarding_4'
            continueToPage='/onboarding_4'
            disabledState={!isAnyCheckboxSelected()}
          />
        </form>
        <Onboarding_progress_bar active='page3' />
      </div>
    </div>
  );
}
