import React, { useEffect } from "react";
import exit from "../../../Assets/Icons/Onboarding_Icons/exit.svg";
import search from "../../../Assets/Icons/Onboarding_Icons/search.svg";

export default function Onboarding_Icon_Picker(props) {
  //TODO: ask UI team for remove icon button

  useEffect(() => {
    const emojiDisplayWindow = document.getElementById("icon-selection-window");
    const searchbox = document.getElementById("search-box");

    function fetchEmojiData() {
      fetch(
        process.env.REACT_APP_EMOJI_API_URL +
          process.env.REACT_APP_EMOJI_API_KEY
      )
        .then((res) => res.json())
        .then((data) => loadEmoji(data));
    }

    function loadEmoji(data) {
      data.forEach((emoji) => {
        let p = document.createElement("p");
        p.setAttribute("emoji-name", emoji.slug);
        p.className =
          "flex justify-center items-center font-NotoEmoji text-[19.7px] p-1 cursor-pointer";
        p.textContent = emoji.character;
        p.onclick = function (e) {
          //clear search box
          searchbox.value = "";
          //set emoji as icon
          props.iconSelectionOnClick(e);
        };
        emojiDisplayWindow.appendChild(p);
      });
    }

    //* Emoji search functionality
    searchbox.addEventListener("keyup", (e) => {
      // console.log(e.target.value);
      let searchValue = e.target.value;
      let emojis = document.querySelectorAll("#icon-selection-window p");

      emojis.forEach((element) => {
        // show/hide searched emojis
        if (element.getAttribute("emoji-name").includes(searchValue)) {
          element.style.display = "";
        } else {
          element.style.display = "none";
        }
      });
    });

    fetchEmojiData();
  });

  return (
    <div
      className={`icon-modal-page-wrapper absolute flex justify-center items-center w-screen h-screen bg-black bg-opacity-20 z-10 ${
        props.iconModalVisible ? "" : "hidden"
      }`}
    >
      <div className='icon-modal-wrapper flex flex-col justify-center items-center gap-[16px] w-[410px] h-[356px] p-6 bg-white rounded-lg shadow-md'>
        <div className='title-and-exit-wrapper flex flex-row justify-between items-center w-[100%] h-auto'>
          <h1 className='title font-Poppins text-[1.125rem] text-[#000] font-semibold leading-[28px]'>
            Icons
          </h1>

          <img
            src={exit}
            alt='exit icon'
            className='cursor-pointer'
            onClick={props.handleModalExit}
          />
        </div>
        <input
          type='text'
          id='search-box'
          placeholder='Search'
          className='w-[100%] py-[10px] px-[14px]  bg-white font-Poppins placeholder:font-Poppins placeholder:text-[16px] placeholder:font-normal placeholder:text-[#6C757D] border-none outline-1 outline-[#ADB5BD] outline-none rounded-lg focus:outline-[2px] focus:outline-[#556AEB]'
          onChange={() => {}}
        />
        <div
          className='icon-selection-window flex justify-start items-start flex-wrap gap-x-[10px] gap-y-[10px] border w-[100%] h-[200px] p-2 overflow-y-scroll  bg-white border-none outline-none'
          id='icon-selection-window'
        >
          {/* //& emoji content gets appended here via useEffect */}
        </div>
      </div>
    </div>
  );
}
