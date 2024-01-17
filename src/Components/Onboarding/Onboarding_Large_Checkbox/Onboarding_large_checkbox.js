import React, { useState } from "react";
import checkbox_unselected from "../../../Assets/Icons/checkbox-unselected.svg";
import checkbox_selected from "../../../Assets/Icons/checkbox-selected.svg";

export default function Onboarding_Checkbox(props) {
  const [selected, setSelected] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div className=' flex flex-row justify-center items-center w-full'>
      <input
        type='checkbox'
        id={props.id}
        className='peer hidden'
        onClick={props.onClick}
        onChange={props.onChange}
      />
      <label
        htmlFor={props.for}
        className={`option-wrapper flex items-center w-full h-auto p-[14px] font-Poppins font-medium text-[16+8px] text-center leading-[28px] text-[#212529] select-none cursor-pointer rounded-[8px]  border  transition-colors duration-200 ease-in-out ${
          hover ? " border-[#556AEB] " : " border-[#6C757D] "
        } ${selected ? " bg-[#EBEFFF] " : " bg-white "}`}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
        onClick={() => {
          setSelected(!selected);
        }}
      >
        <div className='flex flex-row items-center w-full'>
          <div className='flex items-center w-full'>
            <div
              className={`icon-wrapper p-3 rounded-md transition-colors duration-200 ease-in-out ${
                selected || hover ? " bg-[#B9C4FF] " : "bg-[#E9ECEF]"
              }   
              
              `}
              onMouseOver={() => {
                setHover(true);
              }}
              onMouseOut={() => {
                setHover(false);
              }}
            >
              <img className='bg-transparent' src={props.img} alt={props.alt} />
            </div>
            <div className='p-2'>{props.title}</div>
          </div>
          <img
            src={selected ? checkbox_selected : checkbox_unselected}
            alt='checkbox'
            className='checkbox'
          />
        </div>
      </label>
    </div>
  );
}
