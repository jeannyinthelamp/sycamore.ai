import React from "react";

export default function DropdownItem(props) {
  const listStyles =
    "w-[100%] h-[36px] py-[6px] px-[8px] justify-start items-center gap-[8px] bg-white font-Poppins text-[14px] text-[#838587] font-normal leading-[21px] rounded-lg flex flex-row hover:bg-[#EBEFFF] select-none";
  return (
    <li className={listStyles} onClick={props.handleItem}>
      <img src={props.itemImg} alt='' />
      {props.name}
    </li>
  );
}
