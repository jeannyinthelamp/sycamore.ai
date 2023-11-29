//* Modal is triggered when user clicks X icon in Onboarding Navigation
import React from "react";

//TODO: When onboarding navigation is rebuilt, trigger this modal via the nav X btn

//TODO Give buttons functionality via props
//TODO Add modal to each page, note page 5 will have different prop values
export default function Onboarding_Action_Modal(props) {
  return (
    <div
      className={`action-modal-page-wrapper absolute top-0 flex justify-center items-center w-screen h-screen  bg-[#000] bg-opacity-40 ${props.className}`}
    >
      <div className='action-modal-page-inner-wrapper flex justify-center items-start w-[100%] h-[50%]'>
        <div className='action-modal-wrapper flex flex-col justify-center items-center w-[410px] p-6 bg-[#FFF] rounded-lg shadow-sm '>
          <h1 className='action-modal-title mb-4 font-Poppins text-[#000] text-center text-[1.125rem] font-semibold leading-[28px] '>
            {props.title}
          </h1>
          <p className='action-modal-body-text mb-6 font-Poppins text-[#000] text-center text-[0.875rem] font-normal leading-[21px]'>
            {props.message}
          </p>
          <button
            className='action-modal-top-btn w-[100%] h-[48px] py-3 px-6 mb-4 font-Poppins text-[1rem] font-medium text-[#FFF] leading-[21px] bg-[#556AEB] rounded-lg cursor-pointer hover:bg-[#1D2F99] active:bg-[#0C1A66] transition-colors ease-in-out'
            onClick={props.topBtnOnClick}
          >
            {props.topBtnText}
          </button>
          <button
            className='action-modal-bottom-btn w-[100%] h-[48px] py-3 px-6  font-Poppins text-[1rem] font-medium text-[#556AEB] leading-[21px] bg-[#FFF] border border-[#556AEB] rounded-lg cursor-pointer hover:bg-[#EBEFFF] hover:text-[#0C1A66] active:bg-[#B9C4FF] transition-colors ease-in-out'
            onClick={props.bottomBtnOnClick}
          >
            {props.bottomBtnText}
          </button>
        </div>
      </div>
    </div>
  );
}
