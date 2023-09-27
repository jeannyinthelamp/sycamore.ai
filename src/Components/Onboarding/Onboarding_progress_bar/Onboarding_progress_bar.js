import React from "react";
export default function Onboarding_progress_bar(props) {
  const active_style = "w-[32px] h-[16px] rounded-[100px] bg-[#556AEB]";
  const non_active_style = "w-[16px] h-[16px] rounded-[100px] bg-[#CED4DA]";

  return (
    <div className='max-w-[192px] h-[16px] my-[48px] mx-auto  flex flex-row justify-center items-center gap-[16px] '>
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
