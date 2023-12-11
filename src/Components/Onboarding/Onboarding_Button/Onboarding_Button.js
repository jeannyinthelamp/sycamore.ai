import React from "react";

// To use the button component, pass the button text (btnText) and disabled (true or false) props
export default function Onboarding_Button(props) {
  return (
    <button
      type='submit'
      className='w-[100%] py-[12px] rounded-lg font-Poppins text-[16px] max-w-[420px] cursor-pointer bg-[#556AEB] text-[#FFFFFF] hover:bg-[#1D2F99] active:bg-[#0C1A66] disabled:bg-[#E9ECEF] disabled:text-[#6C757D]'
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.btnText}
    </button>
  );
}
