import React from "react";

export default function Onboarding_Alert_Modal(props) {
  return (
    <div
      className={`alert-modal-wrapper absolute flex flex-row justify-between items-center gap-[16px] w-[100%] max-w-[730px] h-[60px] py-3 px-5 border rounded-lg ${props.border} ${props.background} ${props.isVisible}`}
    >
      <div className='alert-modal-left flex flex-row justify-center items-center gap-4 w-fit h-8'>
        <img src={props.iconLeft} alt={props.iconLeftAlt} />
        <p className=' min-w-fit font-Poppins font-normal text-[16px] text-[#000] leading-normal select-none'>
          {props.message}
        </p>
      </div>
      <div className='alert-modal-right flex flex-row justify-center items-center gap-5 w-fit h-8'>
        <button
          //^ When providing a value for skipBtnVisible prop, it must be true/false and not a string. Example: true will work while the string 'true' will cause an error
          className={`py-[6px] px-3 bg-[#000] rounded-lg font-Poppins text-center text-[#FFF] text-[14px] font-medium leading-6 cursor-pointer hover:bg-[#1D2E99] transition-colors duration-200 ease-in-out ${
            props.skipBtnVisible ? " visible " : " hidden "
          }`}
          onClick={props.skipBtnOnClick}
        >
          Skip
        </button>
        <img
          className=' p-1 bg-transparent rounded-3xl cursor-pointer hover:bg-[#B9C4FF] transition-colors duration-200 ease-in-out'
          src={props.iconRight}
          alt={props.iconRightAlt}
          onClick={props.exitBtnOnClick}
        />
      </div>
    </div>
  );
}
