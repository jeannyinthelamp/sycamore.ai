import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingButton from "../Onboarding_Button/Onboarding_Button";
import Onboarding_Loading from "../Onboarding_Loading/Onboarding_Loading";

// To use the Skip/Continue component, pass the following props:
//   1) pass the filepath to navigate to (skipToPage)
//   2) pass the id of the form (formID)
//   3) pass the button text of the Continue Btn (btnText)
//   4) pass the state of the Continue Button (disabledState will be true or false)
//   5) pass skip message (skipMessage)

// Issues: Modal doesn't appear at top of the page

export default function Onboarding_Skip_Continue_Btns(props) {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleSkip = () => {
    navigate(props.skipToPage);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    setShowAlert(true);

    // navigate(props.continueToPage);
  };


  return (
    <div className='w-[100%] flex flex-col justify-center items-center'>
      <OnboardingButton
        type='submit'
        form={props.formID}
        btnText={props.btnText}
        disabled={props.disabledState}
        className='w-[100%]'
        onClick={handleContinue}
      />
      {showAlert && (<div className='fixed inset-0 z-[100] flex items-center justify-center'>

      <Onboarding_Loading
        isVisible={showAlert ? "visible" : "hidden"}
        modalPosition={props.modalPosition}
        title="Please wait"
        message="We are loading your amazing workspace."
      />

      </div>
      )}
      <button
        onClick={(e) => {
          e.preventDefault();
          setShowAlert(true);
        }}
        className='text-[#0A70E8] hover:underline my-[24px]'
      >
        {props.skipMessage ? props.skipMessage : "Skip"}
      </button>
    </div>
  );
}
