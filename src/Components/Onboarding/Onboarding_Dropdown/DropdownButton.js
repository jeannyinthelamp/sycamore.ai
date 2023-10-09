/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useState } from "react";
import Onboarding_Dropdown from "./Onboarding_Dropdown";
import arrow from "../../../Assets/Icons/Onboarding/down-arrow.svg";

export default function DropdownButton(props) {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("Not Selected");
  const btnCategory = props.btnCategory;

  return (
    //TODO: update button title prop based on what option you select
    <div
      className={`${props.className} select-none relative  w-[100%] h-auto flex flex-row justify-between py-[10px] px-[12px] font-Poppins font-normal text-[#21252956] leading-[24px] bg-[#FFF] outline outline-1 outline-[#CED4DA] rounded-lg cursor-pointer`}
      btnCategory={props.btnCategory}
      onClick={(e) => {
        setVisible(!visible);
        e.preventDefault();
        // console.log(btnCategory + " selector");
      }}
    >
      {props.title} <img src={arrow} alt='down arrow' className='w-[10.68px]' />
      <Onboarding_Dropdown
        category={btnCategory}
        dropdownClassName={`${visible ? "" : "hidden"}`}
        //^  <li> elements rendered here via map function in onboardingDropdown.js
      />
    </div>
  );
}
