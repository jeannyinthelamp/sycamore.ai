import React, { useState } from "react";
import OnboardingButton from "../Onboarding_Button/Onboarding_Button";
import Onboarding_Alert_Modal from "../Onboarding_Alert_Modal/Onboarding_Alert_Modal";

// To use the Skip/Continue component: 
//   1) pass the state of the Continue Button (true or false)
//   2) pass the id of the form 
export default function Onboarding_Skip_Continue_Btns(props) {
  

  return (
    <div className="w-[100%]">
      <OnboardingButton
        type="submit"
        form={props.formID}
        btnText='Continue'
        disabled={props.disabledState}
      />
      <button
        onClick={onSkip}
        className='text-[#0A70E8] underline my-[24px]'
      >
        Skip
      </button>
    </div>
  )
}