import React from "react";

export default function Onboarding_progress_bar(props) {
  const active_style = "w-[127px] h-[8px] mx-[7px] rounded-[100px] bg-black";
  const non_active_style =
    "w-[127px] h-[8px] mx-[7px] rounded-[100px] bg-[#D9D9D9]";

  return (
    <div className='w-[100%] h-auto mt-[140px] flex flex-row justify-center items-center '>
      <div
        className={`ml-0 ${
          props.active === "page1" ? active_style : non_active_style
        }`}
      ></div>
      <div
        className={`${
          props.active === "page2" ? active_style : non_active_style
        }`}
      ></div>
      <div
        className={`${
          props.active === "page3" ? active_style : non_active_style
        }`}
      ></div>
      <div
        className={`${
          props.active === "page4" ? active_style : non_active_style
        }`}
      ></div>
      <div
        className={`${
          props.active === "page5" ? active_style : non_active_style
        }`}
      ></div>
      <div
        className={`mr-0 ${
          props.active === "page6" ? active_style : non_active_style
        }`}
      ></div>
    </div>
  );
}
