import React from "react";
import DropdownItem from "./DropdownItem";
import dotBlue from "../../../Assets/Icons/Onboarding/dot-blue.svg";
import dotYellow from "../../../Assets/Icons/Onboarding/dot-yellow.svg";
import dotOrange from "../../../Assets/Icons/Onboarding/dot-orange.svg";
import dotGreen from "../../../Assets/Icons/Onboarding/dot-green.svg";
import dotRed from "../../../Assets/Icons/Onboarding/dot-red.svg";
import dotGrey from "../../../Assets/Icons/Onboarding/dot-grey.svg";
import dotPurple from "../../../Assets/Icons/Onboarding/dot-purple.svg";
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
        className={data.className}
      />
    ));
  }

  const statusData = [
    {
      name: "To Do",
      img: dotBlue,
      id: 0,
      onClick: () => {
        // console.log(statusData[0].name);
        props.updateTitle("status", statusData[0].img, statusData[0].name);
      },
    },
    {
      name: "In Progress",
      img: dotYellow,
      id: 1,
      onClick: () => {
        props.updateTitle("status", statusData[1].img, statusData[1].name);
      },
    },
    {
      name: "Paused",
      img: dotOrange,
      id: 2,
      onClick: () => {
        props.updateTitle("status", statusData[2].img, statusData[2].name);
      },
    },
    {
      name: "Done",
      img: dotGreen,
      id: 3,
      onClick: () => {
        props.updateTitle("status", statusData[3].img, statusData[3].name);
      },
    },
    {
      name: "Cancelled",
      img: dotRed,
      id: 4,
      onClick: () => {
        props.updateTitle("status", statusData[4].img, statusData[4].name);
      },
    },
    {
      name: "Backlog",
      img: dotGrey,
      id: 5,
      onClick: () => {
        props.updateTitle("status", statusData[5].img, statusData[5].name);
      },
    },
    {
      name: "Planning",
      img: dotPurple,
      id: 6,
      onClick: () => {
        props.updateTitle("status", statusData[6].img, statusData[6].name);
      },
    },
    {
      name: "None",
      id: 7,
      onClick: () => {
        props.updateTitle("status", priorityData[4].img, priorityData[4].name);
      },
      className: "mb-[8px]",
    },
    // {
    //   name: "Add",
    //   img: plus,
    //   id: 5,
    //   onClick: () => {
    //     props.updateTitle("status", statusData[0].img, statusData[4].name);
    //   },
    // },
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
      <ul className='w-[100%] h-[100%]'>
        {/* / */}
        {generateData(props.category)}
      </ul>
    </div>
  );
}
