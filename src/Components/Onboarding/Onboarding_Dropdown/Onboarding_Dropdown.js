import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import dotBlue from "../../../Assets/Icons/Onboarding/dot-blue.svg";
import dotOrange from "../../../Assets/Icons/Onboarding/dot-orange.svg";
import dotRed from "../../../Assets/Icons/Onboarding/dot-red.svg";
import dotGreen from "../../../Assets/Icons/Onboarding/dot-green.svg";
import plus from "../../../Assets/Icons/Onboarding/plus.svg";
import asap from "../../../Assets/Icons/Onboarding/ASAP.svg";
import flagRed from "../../../Assets/Icons/Onboarding/flag-red.svg";
import flagYellow from "../../../Assets/Icons/Onboarding/flag-yellow.svg";
import flagGrey from "../../../Assets/Icons/Onboarding/flag-grey.svg";

export default function Onboarding_Dropdown(props) {
  //TODO: function to get user input and create new DropdownItem

  function generateData(category) {
    let dataToMap;

    if (category === "status") {
      dataToMap = statusData;
    } else if (category === "priority") {
      dataToMap = priorityData;
    }

    return dataToMap.map((data) => (
      <DropdownItem
        name={data.name}
        itemImg={data.img}
        key={data.id}
        onClick={data.onClick}
      />
    ));
  }

  const statusData = [
    {
      name: "To Do",
      img: dotBlue,
      id: 1,

      onClick: () => {
        // console.log(statusData[0].name);
        props.updateTitle("status", statusData[0].img, statusData[0].name);
      },
    },
    {
      name: "In Progress",
      img: dotOrange,
      id: 2,
      onClick: () => {
        props.updateTitle("status", statusData[1].img, statusData[1].name);
      },
    },
    {
      name: "Paused",
      img: dotRed,
      id: 3,
      onClick: () => {
        props.updateTitle("status", statusData[2].img, statusData[2].name);
      },
    },
    {
      name: "Done",
      img: dotGreen,
      id: 4,
      onClick: () => {
        props.updateTitle("status", statusData[3].img, statusData[3].name);
      },
    },
    {
      name: "Add",
      img: plus,
      id: 5,
      // userInput: props.userInput,
      onClick: () => {
        props.updateTitle("status", statusData[0].img, statusData[4].name);
      },
    },
  ];

  const priorityData = [
    {
      name: "ASAP",
      img: asap,
      id: 1,
      onClick: () => {
        props.updateTitle(
          "priority",
          priorityData[0].img,
          priorityData[0].name
        );
      },
    },
    {
      name: "High",
      img: flagRed,
      id: 2,
      onClick: () => {
        props.updateTitle(
          "priority",
          priorityData[1].img,
          priorityData[1].name
        );
      },
    },
    {
      name: "Medium",
      img: flagYellow,
      id: 3,
      onClick: () => {
        props.updateTitle(
          "priority",
          priorityData[2].img,
          priorityData[2].name
        );
      },
    },
    {
      name: "Low",
      img: flagGrey,
      id: 4,
      onClick: () => {
        props.updateTitle(
          "priority",
          priorityData[3].img,
          priorityData[3].name
        );
      },
    },
    {
      name: "None",
      // img: plus,
      id: 5,
      onClick: () => {
        props.updateTitle(
          "priority",
          priorityData[4].img,
          priorityData[4].name
        );
      },
    },
  ];

  const dropdownStyles =
    "dropdown-modal-wrapper absolute bottom-[-208px] left-[0px] w-[200px] h-auto flex flex-col gap-[4px] justify-center items-center py-[8px] px-[8px] font-Poppins font-normal text-[#21252956] leading-[24px] bg-[#FFF] outline outline-1 outline-[#CED4DA] rounded-lg cursor-pointer overflow-y-scroll";

  return (
    //TODO: add a shadow to UI
    <div className={`${dropdownStyles} ${props.dropdownClassName}`}>
      {/* Dropdown item components rendered here */}
      <ul className='w-[100%] h-auto'>
        {/* / */}
        {generateData(props.category)}
      </ul>
    </div>
  );
}
