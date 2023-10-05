import React from "react";

export default function Onboarding_Dropdown(props) {
  const dropdownStyles =
    "dropdown-modal-wrapper absolute bottom-[-208px] w-[200px] h-auto flex flex-col gap-[4px] justify-center items-center py-[8px] px-[8px] font-Poppins font-normal text-[#21252956] leading-[24px] bg-[#FFF] outline outline-1 outline-[#CED4DA] rounded-lg cursor-pointer";
  const listStyles =
    "w-[100%] h-[36px] py-[6px] px-[8px] justify-start items-center gap-[8px] bg-white font-Poppins text-[14px] text-[#838587] font-normal leading-[21px] rounded-lg flex flex-row hover:bg-[#EBEFFF]";

  return (
    <div className={`${dropdownStyles} ${props.dropdownClassName}`}>
      {/* //& Dropdown item components here */}
      <ul className='w-[100%] h-auto'>
        {/* //^ Item 1 */}
        <li className={`${listStyles}`} onClick={props.handleItemOne}>
          <img src={props.itemOneImg} alt='' />
          {props.itemOneName}
        </li>
        {/* //^ Item 2 */}
        <li className={`${listStyles}`} onClick={props.handleItemTwo}>
          <img src={props.itemTwoImg} alt='' />
          {props.itemTwoName}
        </li>
        {/* //^ Item 3 */}
        <li className={`${listStyles}`}>
          <img src={props.itemThreeImg} alt='' />
          {props.itemThreeName}
        </li>
        {/* //^ Item 4 */}
        <li className={`${listStyles}`}>
          <img src={props.itemFourImg} alt='' />
          {props.itemFourName}
        </li>
        {/* //^ Add Button */}
        {/* //! conditionally render this via a boolean prop ... category prop === status ? hidden */}
        <li className={`${listStyles}`}>
          <img src={props.itemFiveImg} alt='' />
          {props.itemFiveName}
        </li>
      </ul>
    </div>
  );
}
