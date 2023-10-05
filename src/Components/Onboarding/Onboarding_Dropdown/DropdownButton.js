import React from "react";
import arrow from "../../../Assets/Icons/Onboarding/down-arrow.svg";

export default function DropdownButton(props) {
  return (
    //TODO: update button title prop based on what option you select
    <div
      className={`${props.className} select-none  w-[100%] h-auto flex flex-row justify-between py-[10px] px-[12px] font-Poppins font-normal text-[#21252956] leading-[24px] bg-[#FFF] outline outline-1 outline-[#CED4DA] rounded-lg cursor-pointer`}
      onClick={props.onClick}
    >
      {props.title} <img src={arrow} alt='down arrow' className='w-[10.68px]' />
    </div>
  );
}
