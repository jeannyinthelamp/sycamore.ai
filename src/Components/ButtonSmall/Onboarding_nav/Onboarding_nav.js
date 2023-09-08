import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Onboarding_nav() {
  const backBtnText = "< Back";
  const location = useLocation();

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

  //Next button functionality
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
    <div className='flex justify-center max-w-[1440px] mx-auto'>
      <div className='w-[100%] h-[92px]  flex justify-between items-center '>
        {/* Build a  */}
        <Link
          to={traverseBack(location.pathname)}
          //OnClick can be safely removed without breaking functionality, it only serves for debugging purposes
          onClick={() => {
            //calculate new path
            traverseBack(location.pathname);
            console.log("traverseBack - current path: " + location.pathname);
            console.log(
              "traverseBack - new path: " + traverseBack(location.pathname)
            );
          }}
          className='font-[inter] text-[16px] font-semibold leading-6 tracking-[-0.304px] ml-[59px]'
        >
          {backBtnText}
          {/* {console.log(location.pathname)} */}
        </Link>
        <div className='mr-[47px]'>
          {/* //! add link 'to' attribute once Ask later page is created */}
          <Link to=''>
            <button
              //
              className='w-[127px] h-[58px] mr-[6px] font-[inter] font-medium  text-base leading-[20.8px] tracking-[-0.304px]'
            >
              Ask Later
            </button>
          </Link>

          <Link
            to={traverseNext(location.pathname)}
            //OnClick can be safely removed without breaking functionality, it only serves for debugging purposes
            onClick={() => {
              //calculate new path
              traverseNext(location.pathname);
              console.log("traverseNext - current path: " + location.pathname);
              console.log(
                "traverseNext - new path: " + traverseNext(location.pathname)
              );
            }}
          >
            <button
              //
              className='w-[127px] h-[58px] font-[inter] font-medium  text-base leading-[20.8px] tracking-[-0.304px] bg-[#D9D9D9]'
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
