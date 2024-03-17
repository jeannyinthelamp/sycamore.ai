//* Modal is triggered when user clicks X icon in Onboarding Navigation
import React from "react";

//TODO: When onboarding navigation is rebuilt, trigger this modal via the nav X btn

//TODO Give buttons functionality via props
//TODO Add modal to each page, note page 5 will have different prop values
export default function Onboarding_Loading (props) {
  return (
<div
  className={`action-modal-page-wrapper fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-40 ${props.className} ${props.isVisible} ${props.modalPosition}`}
>
      <div className='action-modal-page-inner-wrapper flex justify-center items-start w-[100%] h-[50%]'>
        <div className='action-modal-wrapper flex flex-col justify-center items-center w-[410px] h-[410px] p-6 bg-[#FFF] rounded-lg shadow-sm '>
          <h1 className='action-modal-title mb-4 font-Poppins text-[#000] text-center text-[40px] font-semibold leading-[28px] '>
            {props.title}
          </h1>
          <p className='action-modal-body-text 6 font-Poppins text-[#000] text-center text-[28px] font-light mt-5 leading-[21px]'>
            {props.message}
          </p>
        </div>
      </div>
    </div>
  );
}
