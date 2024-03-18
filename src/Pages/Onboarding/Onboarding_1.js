/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import Onboarding_Checkbox_Large from "../../Components/Onboarding/Onboarding_Large_Checkbox/Onboarding_large_checkbox";
import Onboarding_Skip_Continue_Btns from "../../Components/Onboarding/Onboarding_Skip_Continue_Buttons/Onboarding_Skip_Continue_Buttons";
import Onboarding_progress_bar from "../../Components/Onboarding/Onboarding_progress_bar/Onboarding_progress_bar";
import Onboarding_nav from "../../Components/Onboarding/Onboarding_nav/Onboarding_nav";

import Person from "../../Assets/Icons/Onboarding_Icons/person.svg";
import Team from "../../Assets/Icons/Onboarding_Icons/team.svg";
import School from "../../Assets/Icons/Onboarding_Icons/school.svg";
import Work from "../../Assets/Icons/Onboarding_Icons/work.svg";

export default function Onboarding_1() {
  //Press Skip btn at bottom of page to open modal
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

  const workplaceOptions = [
    {
      type: "Personal",
      img: Person,
      alt: "Personal icon",
    },
    {
      type: "Work",
      img: Work,
      alt: "Work icon",
    },
    {
      type: "Team",
      img: Team,
      alt: "Team icon",
    },
    {
      type: "School",
      img: School,
      alt: "School icon",
    },
  ];

  return (
    
    <div className='flex flex-col justify-center items-center'>
      <Onboarding_nav/>
      <div className='title-and-button-wrapper max-w-fit h-auto mt-[50px] flex flex-col justify-center items-center'>
        <div className='text-wrapper relative flex flex-col items-center w-[730px] h-auto gap-[16px] '>
          {/* //TODO: update margin once back and exit Btn's are built */}
          <h2 className='w-[100%] min-h-[54px] mt-[105px] font-Poppins text-[28px] font-semibold text-[#212529] text-center '>
          Hi Judy 👋 nice to meet you!
          </h2>
          <h1 className='w-[100%] min-h-[54px] mt- font-Poppins text-[40px] font-semibold text-[#212529] text-center leading-[54px] '>
            How are you planning to use Sycamore.ai?
          </h1>
          <p className='min-h-[28px] font-Roboto-Flex font-medium text-[18px] text-center text-[#212529] leading-[28px]'>
            You can choose multiple options. We will tailor your workspace
            accordingly.
          </p>
        </div>
        {/* //^ add form action */}
        <form action='' className='w-auto'>
          <div className='first-selection-wrapper max-w-[420px] h-auto mt-[48px]  flex flex-col justify-start items-start '>
            <label className='mb-[24px] flex flex-col items-start gap-[24px] font-Roboto-Flex font-medium text-[16px] text-center text-[212529] leading-[24px]'>
              <div className='checkbox-wrapper flex flex-row flex-wrap gap-[24px]'>
                {/* //* Generate options */}
                {workplaceOptions.map((data) => (
                  <Onboarding_Checkbox_Large
                    title={data.type}
                    id={data.type}
                    for={data.type}
                    img={data.img}
                    alt={data.alt}
                    value={data}
                    handleCheckboxChange={handleCheckboxChange}
                    />
                ))}
              </div>
            </label>
          </div>
          {/* Go Back and Continue Buttons */}

          <Onboarding_Skip_Continue_Btns
            btnText='Continue'
            message='Are you sure you want to skip?'
            modalPosition='top-[100px]'
            skipToPage='/onboarding_2'
            continueToPage='/onboarding_2'
            disabledState={!isAnyCheckboxSelected()}
          />
        </form>
      </div>
      <Onboarding_progress_bar active='page1' />
    </div>
  );
}
