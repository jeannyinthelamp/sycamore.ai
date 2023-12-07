/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import Onboarding_header from "../../Components/Onboarding/Onboarding_header/Onboarding_header";
import Onboarding_Alert_Modal from "../../Components/Onboarding/Onboarding_Alert_Modal/Onboarding_Alert_Modal";
import Onboarding_Checkbox_Large from "../../Components/Onboarding/Onboarding_Large_Checkbox/Onboarding_large_checkbox";
import Onboarding_Skip_Continue_Btns from "../../Components/Onboarding/Onboarding_Skip_Continue_Buttons/Onboarding_Skip_Continue_Buttons";

import Person from "../../Assets/Icons/Onboarding_Icons/person.svg";
import Team from "../../Assets/Icons/Onboarding_Icons/team.svg";
import School from "../../Assets/Icons/Onboarding_Icons/school.svg";
import Work from "../../Assets/Icons/Onboarding_Icons/work.svg";
import warning from "../../Assets/Icons/Onboarding_Icons/warning.svg";
import exit from "../../Assets/Icons/Onboarding_Icons/exit.svg";

export default function Onboarding_1() {
  //Press Skip btn at bottom of page to open modal
  const [visible, setVisible] = useState(false);

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
      type: "With Team",
      img: Team,
      alt: "Team icon",
    },
    {
      type: "School",
      img: School,
      alt: "School icon",
    },
  ];

  // Placeholder function for handling skip btn in Alert Modal
  const handleSkip = () => {
    alert("skip btn pressed");
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <Onboarding_header />

      <div className='title-and-button-wrapper max-w-fit h-auto flex flex-col justify-center items-center'>
        <div className='text-wrapper relative flex flex-col items-center w-[100%] h-auto gap-[16px] '>
          {/* //TODO: update margin once back and exit Btn's are built */}
          <h1 className='w-[100%] min-h-[54px] mt-[75px] font-Poppins text-[40px] font-semibold text-[#212529] text-center leading-[54px] '>
            How are you planning to use Syne?
          </h1>
          <p className='min-h-[28px] font-Poppins font-medium text-[18px] text-center text-[#212529] leading-[28px]'>
            You can choose multiple options. We will tailor your workspace
            accordingly.
          </p>
        </div>
        {/* //^ add form action */}
        <form action='' className='w-auto'>
          <div className='first-selection-wrapper max-w-[420px] h-auto mt-[48px]  flex flex-col justify-start items-start '>
            <label className='mb-[24px] flex flex-col items-start gap-[24px] font-Poppins font-medium text-[16px] text-center text-[212529] leading-[24px]'>
              <div className='checkbox-wrapper flex flex-row flex-wrap gap-[24px]'>
                {/* //* Generate options */}
                {workplaceOptions.map((data) => (
                  <Onboarding_Checkbox_Large
                    title={data.type}
                    id={data.type}
                    for={data.type}
                    img={data.img}
                    alt={data.alt}
                  />
                ))}
              </div>
            </label>
          </div>
          {/* Go Back and Continue Buttons */}
          {/* <Onboarding_nav /> */}
          <Onboarding_Skip_Continue_Btns
            btnText='Continue'
            skipToPage='/onboarding_2'
          />
        </form>
      </div>
    </div>
  );
}
