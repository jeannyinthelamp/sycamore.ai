/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useState } from "react";
import Onboarding_Dropdown from "./Onboarding_Dropdown";
import arrow from "../../../Assets/Icons/Onboarding/down-arrow.svg";

export default function DropdownButton(props) {
  const [visible, setVisible] = useState(false);
  const btnCategory = props.btnCategory;
  const btnStyles =
    "select-none relative  w-[100%] h-[44px] flex flex-row justify-between items-center py-[0px] px-[12px] font-Poppins font-normal text-[#21252956] leading-[24px] bg-[#FFF] outline outline-1 outline-[#CED4DA] rounded-lg cursor-pointer";

  return (
    //TODO: Prevent the form from submitting if status and priority aren't selected
    <div
      className={`${props.className} ${btnStyles}`}
      btnCategory={props.btnCategory}
      updateTitle={props.updateTitle}
      onClick={(e) => {
        setVisible(!visible);
        e.preventDefault();
        // console.log(btnCategory + " selector");
      }}
    >
      {props.title} <img src={arrow} alt='down arrow' className='w-[10.68px]' />
      <Onboarding_Dropdown
        updateTitle={props.updateTitle}
        category={btnCategory}
        //the second ternary adjusts the position of the status dropdown window
        dropdownClassName={`${visible ? "" : "hidden"} ${
          btnCategory === "status" ? " h-[196px]" : ""
        }`}
        //^  DropdownItem components rendered here via map function in onboardingDropdown.js
      />
    </div>
  );
}
