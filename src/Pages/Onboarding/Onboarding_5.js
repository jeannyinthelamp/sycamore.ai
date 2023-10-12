/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useState } from "react";
import Onboarding_Header from "../../Components/Onboarding/Onboarding_Header/Onboarding_header";
import Onboarding_Progress_Bar from "../../Components/Onboarding/Onboarding_Progress_Bar/Onboarding_Progress_Bar";
import Onboarding_Nav from "../../Components/Onboarding/Onboarding_Nav/Onboarding_Nav";
import DropdownButton from "../../Components/Onboarding/Onboarding_Dropdown/DropdownButton";
import DropdownItem from "../../Components/Onboarding/Onboarding_Dropdown/DropdownItem";
import { Link } from "react-router-dom";
import { safari_input_styling } from "../../Components/Styles/Safari_Input_Styling";

export default function Onboarding_5() {
  const [statusTitle, setStatusTitle] = useState("Not Selected");
  const [priorityTitle, setPriorityTitle] = useState("Not Selected");
  const [categoryTitle, setCategoryTitle] = useState("Not Selected");

  function updateTitle(category, img, name) {
    const newDropdownItem = (
      <DropdownItem name={name} itemImg={img} className='hover:bg-[#FFF]' />
    );

    if (category === "status") {
      if (name === "Add") {
        //call function to create new entry
        return createNewEntry(img);
      }
      setStatusTitle(
        // alternatively you can return a li element with the appropriate data
        newDropdownItem
      );
    } else if (category === "priority") {
      setPriorityTitle(newDropdownItem);
    } else if (category === "category") {
      setCategoryTitle(newDropdownItem);
    }
  }

  //TODO: createNewEntry should add the newly created DropdownItems to the Onboarding_Dropdown <ul> element

  function createNewEntry(img) {
    let userInput = prompt("Enter new status: ");
    return setStatusTitle(
      <DropdownItem name={userInput} itemImg={img} className='' />
    );
  }

  // Safari has an issue where its difficult to change input border-radius. This function detects a users browser, then injects classNames into it to create a rounded outline
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
          className='w-[88.38%] h-auto flex flex-col gap-[24px] justify-center items-start'
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

          <div className='status-priority-wrapper w-[100%] flex flex-row justify-between gap-[20px]'>
            <div className='status-wrapper w-[50%] flex flex-col gap-[8px]'>
              <p
                className='label w-[100%] font-Poppins text-[#00000080] text-[16px] font-normal leading-[24px] 
                '
              >
                Status *
              </p>
              {/* //& dropdown components here */}
              <DropdownButton
                updateTitle={updateTitle}
                title={statusTitle}
                btnCategory='status'
              />
            </div>
            <div className='priority-wrapper relative w-[50%] flex flex-col gap-[8px]'>
              <p
                className='label w-[100%] font-Poppins text-[#00000080] text-[16px] font-normal leading-[24px] 
                '
              >
                Priority *
              </p>
              <DropdownButton
                updateTitle={updateTitle}
                title={priorityTitle}
                btnCategory='priority'
              />
            </div>
          </div>
          <p className='label w-[100%] font-Poppins text-[#00000080] text-[16px] font-normal leading-[24px]'>
            Category (Optional)
          </p>
          <DropdownButton
            updateTitle={updateTitle}
            title={categoryTitle}
            btnCategory='category'
          />
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
