import React from "react";

export default function Onboarding_Checkbox(props) {
  return (
    <div class='flex'>
      <input type='checkbox' id={props.id} class='peer hidden' />
      <label
        for={props.for}
        class={`${props.className} py-[10px] px-[20px] font-[Inter] font-medium text-[18px] leading-[27px] tracking-[-1.9%] text-black select-none cursor-pointer rounded-[10px] border border-black
 transition-colors duration-200 ease-in-out peer-checked:bg-black peer-checked:text-white peer-checked:border-black`}
      >
        {props.title}
      </label>
    </div>
  );
}
