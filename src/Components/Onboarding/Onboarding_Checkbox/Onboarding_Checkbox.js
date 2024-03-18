import React, { useState } from "react";

//Checkbox component that visually resembles a button

export default function Onboarding_Checkbox(props) {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  
  const toggleCheckbox = () => {
    setIsSelected((prevValue) => !prevValue);
    props.handleCheckboxChange(props.id, !isSelected); // Pass id and updated state
  };

  return (
    <div class='flex'>
      <input
        type='checkbox'
        id={props.id}
        class='peer hidden'
        onClick={toggleCheckbox}
      />
      <label
        for={props.for}
        class={`${props.className} flex justify-center text-center items-center w-[195px] h-[64px] py-[8px] px-[20px] font-Roboto-Flex font-medium text-[16px] text-center leading-[24px] text-[#212529] select-none cursor-pointer rounded-[8px] border border-[#6C757D]
        peer bg-[#F8F9FA] hover:bg-[#E5E5E5]
        transition-colors duration-200 ease-in-out peer-checked:bg-[#EBEFFF] peer-checked:text-[#556AEB] peer-checked:border-[#556AEB]`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}  
        >
        <span className=''>{props.title}</span>
      </label>
    </div>
  );
}
