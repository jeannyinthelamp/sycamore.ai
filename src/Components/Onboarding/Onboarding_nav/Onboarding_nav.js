import React from "react";
import { Link, useLocation } from "react-router-dom";

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
    //* Navigation Button and form Submit Input
    <div className='navigation-wrapper w-[100%] h-auto flex flex-row gap-[12px]'>
      <Link
        //^  Fonts wont update
        className='w-[50%] max-h-48px py-[12px] px-[24px] flex justify-center items-center bg-[#E9ECEF] rounded-lg font-Poppins text-black text-center text-[16px] font-medium leading-[24px]  outline-none border-none cursor-pointer'
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
        Go Back
      </Link>
      <input
        type='submit'
        value='Continue'
        className=' w-[50%] py-[12px] px-[24px] flex justify-center items-center bg-[#212529] rounded-lg font-Poppins text-[#F8F9FA] text-center text-[16px] font-medium leading-[24px] outline-none border-none cursor-pointer'
      />
    </div>
  );
}
