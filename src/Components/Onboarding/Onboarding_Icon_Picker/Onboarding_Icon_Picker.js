import React from "react";
import exit from "../../../Assets/Icons/Onboarding_Icons/exit.svg";
import search from "../../../Assets/Icons/Onboarding_Icons/search.svg";

export default function Onboarding_Icon_Picker() {
  //! temporary stand in for icons
  const tempIcon = () => {
    return (
      <img
        // key={}
        src={exit}
        alt='exit'
        className='flex justify-center items-center p-1'
      />
    );
  };

  //! temporary stand in for icons
  //TODO: update when list of icons is provided
  const icons = [
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
    tempIcon,
  ];

  return (
    <div className='icon-modal-page-wrapper absolute flex justify-center items-center w-screen h-screen bg-black bg-opacity-20'>
      <div className='icon-modal-wrapper flex flex-col justify-center items-center gap-[16px] w-[410px] h-[356px] p-6 bg-white rounded-lg shadow-md'>
        <div className='title-and-exit-wrapper flex flex-row justify-between items-center w-[100%] h-auto'>
          <h1 className='title font-Poppins text-[1.125rem] text-[#000] font-semibold leading-[28px]'>
            Icons
          </h1>

          <img
            src={exit}
            alt='exit icon'
            className='cursor-pointer'
            onClick={() => {
              //TODO: logic for closing modal
            }}
          />
        </div>
        {/* <div className='input-wrapper flex flex-row justify-start gap-1 w-[100%] h-fit py-[10px] px-[14px] bg-white border rounded-lg'> */}

        {/* <img src={search} alt='search icon' className='bg-white' /> */}
        <input
          type='text'
          placeholder='Search'
          className='w-[100%] py-[10px] px-[14px]  bg-white font-Poppins placeholder:font-Poppins placeholder:text-[16px] placeholder:font-normal placeholder:text-[#6C757D] border-none outline-1 outline-[#ADB5BD] outline-none rounded-lg focus:outline-[2px] focus:outline-[#556AEB]'
          onChange={() => {
            //TODO: Logic for searching icons data
          }}
        />
        {/* </div> */}
        <div className='icon-selection-window flex justify-start items-center flex-wrap gap-x-[10px] gap-y-[10px] border w-[100%] h-[200px] p-2 overflow-y-scroll  bg-white border-none outline-none'>
          {/* map over data to populate with icons */}
          {/* use X's for now */}
          {icons.map((element) => (
            <img src={exit} alt='exit icon' className='p-1 cursor-pointer' />
          ))}
        </div>
      </div>
    </div>
  );
}
