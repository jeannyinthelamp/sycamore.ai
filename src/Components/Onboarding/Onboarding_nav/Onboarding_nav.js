import React from "react";
import { Link, useLocation } from "react-router-dom";

import back from "../../../Assets/Icons/Onboarding_Icons/back.svg"
import exit from "../../../Assets/Icons/Onboarding_Icons/exit.svg"


export default function Onboarding_Nav() {
  const currentLocation = useLocation();

  //Back button functionality
  const traverseBack = (currentPath) => {
    switch (currentPath) {
      case "/onboarding_1":
        return;

      case "/onboarding_2":
        return "/onboarding_1";

      case "/onboarding_3":
        return "/onboarding_2";

      case "/onboarding_4":
        return "/onboarding_3";

      case "/onboarding_5":
        return "/onboarding_4";

      case "/onboarding_6":
        return "/onboarding_5";

      default:
        return;
    }
  };

  //Continue button functionality
  const traverseNext = (currentPath) => {
    switch (currentPath) {
      case "/onboarding_1":
        return "/onboarding_2";

      case "/onboarding_2":
        return "/onboarding_3";

      case "/onboarding_3":
        return "/onboarding_4";

      case "/onboarding_4":
        return "/onboarding_5";

      case "/onboarding_5":
        return "/onboarding_6";

      //TODO: Update path for page 6
      case "/onboarding_6":
        return;

      default:
        return;
    }
  };
  return (
    //* Back and Exit buttons
    <div className='navigation-wrapper max-h-48px py-[12px] px-[24px] flex justify-start items-center font-Poppins text-black text-center text-[16px] font-medium leading-[24px] outline-none border-none cursor-pointer'>
      <Link
        //^  Fonts wont update
        className='flex justify-start ml-auto pr-[800px]'
        to={traverseBack(currentLocation.pathname)}
        onClick={() => {
          //calculate new path
          traverseBack(currentLocation.pathname);
          console.log(
            "traverseBack - current path: " + currentLocation.pathname
          );
          console.log(
            "traverseBack - new path: " + traverseBack(currentLocation.pathname)
          );
        }}
      >
        <img
          className=''
          src={back}
          alt='back'
        />
        Back
      </Link> 
      <button 
    className='flex justify-end'>
      <img
          className=''
          src={exit}
          alt='exit'
        />
        </button>
      {/* Account for Onboarding1 - where there is no back button */}
    </div>
  );
}
