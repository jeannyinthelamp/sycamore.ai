import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import back from "../../../Assets/Icons/Onboarding_Icons/back.svg"
import back_selected from "../../../Assets/Icons/Onboarding_Icons/back_selected.svg"
import exit from "../../../Assets/Icons/Onboarding_Icons/exit.svg"


export default function Onboarding_Nav() {
  const currentLocation = useLocation();

  const [isHovered, setIsHovered] = useState(false);

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
        
      default:
        return;
    }
  };

  return (
    //* Back and Exit buttons
<div class="flex p-4 md:p-16 justify-between items-center self-stretch">
      <Link
        //^  Fonts wont update
        className='flex'
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
        <div class="flex items-center hover:text-[#556AEB]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)} >
          <img
            class='mr-2'
            src={isHovered ? back_selected : back}
            alt='back'
          />  
          Back
        </div>
      </Link> 
      
    <button 
    className='flex'>
      <img
          className=''
          src={exit}
          alt='exit'
        />
        </button>
    </div>
  );
}
