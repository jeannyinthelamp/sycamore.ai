import React from "react";
import { Link } from "react-router-dom";
export default function Onboarding_progress_bar(props) {
  const active_style = "w-[127px] h-[8px] mx-[7px] rounded-[100px] bg-black";
  const non_active_style =
    "w-[127px] h-[8px] mx-[7px] rounded-[100px] bg-[#D9D9D9]";

  return (
    <div className='absolute top-[950px] w-[100%] h-auto  flex flex-row justify-center items-center '>
      <Link to='/onboarding_1'>
        <div
          className={`ml-0 ${
            props.active === "page1" ? active_style : non_active_style
          }`}
        ></div>
      </Link>

      <Link to='/onboarding_2'>
        <div
          className={`${
            props.active === "page2" ? active_style : non_active_style
          }`}
        ></div>
      </Link>

      <Link to='/onboarding_3'>
        <div
          className={`${
            props.active === "page3" ? active_style : non_active_style
          }`}
        ></div>
      </Link>

      <Link to='/onboarding_4'>
        <div
          className={`${
            props.active === "page4" ? active_style : non_active_style
          }`}
        ></div>
      </Link>

      <Link to='/onboarding_5'>
        <div
          className={`${
            props.active === "page5" ? active_style : non_active_style
          }`}
        ></div>
      </Link>

      <Link to='/onboarding_6'>
        <div
          className={`mr-0 ${
            props.active === "page6" ? active_style : non_active_style
          }`}
        ></div>
      </Link>
    </div>
  );
}
