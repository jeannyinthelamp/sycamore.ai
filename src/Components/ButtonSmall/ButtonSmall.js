import React from "react";

export default function ButtonSmall(props) {
  return (
    <button
      //props.className is for adding any additional styling thats needed when a ButtonSmall component is rendered
      //! add Rubik Font
      className={`${props.className} w-[283px] h-[43px] mb-5 bg-base-black text-white font-Rubik text-center font-normal text-sm leading-[16.59px] cursor-pointer`}
      onClick={props.onClick}
    >
      {props.btnText}
    </button>
  );
}
