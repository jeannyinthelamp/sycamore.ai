/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import Onboarding_progress_bar from "../../Components/Onboarding/Onboarding_progress_bar/Onboarding_progress_bar";

import Onboarding_Nav from "../../Components/Onboarding/Onboarding_nav/Onboarding_nav";
import { safari_input_styling } from "../../Components/Styles/Safari_Input_Styling";
import { useNavigate } from "react-router-dom";
import { validateCompanyName } from "./Onboarding_Validation/Onboarding_Validation";

import Onboarding_Skip_Continue_Btns from "../../Components/Onboarding/Onboarding_Skip_Continue_Buttons/Onboarding_Skip_Continue_Buttons";
import Onboarding_Icon_Picker from "../../Components/Onboarding/Onboarding_Icon_Picker/Onboarding_Icon_Picker";
import warning from "../../Assets/Icons/Onboarding_Icons/warning.svg";
import exit from "../../Assets/Icons/Onboarding_Icons/exit.svg";

//! Known bug: Manually entering an emoji into the company name input field allows the user to continue. Update regex validation to include only alphanumeric characters

export default function Onboarding_4() {
  const [icon, setIcon] = useState("");
  const [iconSelected, setIconSelected] = useState(false);
  const [iconModalVisible, setIconModalVisible] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companyNameError, setCompanyNameError] = useState(false);
  const [companyNameExists, setCompanyNameExists] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();
  const [text, setText] = useState("");
  
  const getFirstLetter = (companyName) => {
    return companyName.trim().charAt(0).toUpperCase();   
  };

  const toggleIconPicker = () => {
    setIconModalVisible(!iconModalVisible);
  };

  const handleCompanyNameChange = (e) => {
    const newCompanyName = e.target.value;
        // Check the rules
    setCompanyName(newCompanyName);
    
    setDisabled(newCompanyName.trim() === '');
  };

  const handelIcon = (e) => {
    setIconSelected(true);
    setIcon(e.target.textContent);
    setIconModalVisible(false);
  };

  //TODO: export to module
  const handleSkip = () => {
    alert("skip btn pressed");
  };

  const processCompanyName = (e) => {
    e.preventDefault();
    if (
      validateCompanyName(
        companyName,
        setCompanyName,
        setCompanyNameError,
        setCompanyNameExists
      )
    ) {
      //TODO: Send companyName data to firebase after validation
      navigate("/onboarding_5");
    }
  };

  // Safari has an issue where its difficult to change input border-radius. This function detects a users browser, then injects classNames into it to create an rounded outline
  function detectBrowser() {
    if (navigator.userAgent.includes("Safari")) {
      return safari_input_styling;
    }
  }

  return (
    <div className='relative flex flex-col justify-start items-center w-screen h-screen'>
      <Onboarding_Nav />
      <div className='title-and-form-wrapper max-w-[730px] mt-[20px] mx-[20px] h-auto flex flex-col justify-center items-center'>
        <div className='text-wrapper max-w-[730px] h-auto flex flex-col justify-start items-center'>
          <h1 className='w-[100%] mb-[24px] mx-[22px] font-Poppins text-[40px] font-semibold text-black text-center leading-[54px]'>
            Let's get your workspace ready
          </h1>
          <p className='font-Poppins text-[18px] font-medium leading-[28px] text-center'>
            Choose an icon and name your workspace (ex. company name). You can
            always change them later.
          </p>
        </div>
        <div className=' relative flex flex-col items-center my-[48px]'>
          <img
            className='remove-icon-btn absolute top-[10px] right-[10px] w-[24px] h-[24px] p-[3px] bg-[#B9C4FF] rounded-full cursor-pointer z-30 hover:bg-[#8FA0FF] '
            src={exit}
            alt='exit icon'
            onClick={() => {
              setIconModalVisible(false);
              setIconSelected(false);
            }}
          />
          <div
            className={`p-[10px] w-[120px] h-[120px] rounded-full flex flex-col items-center cursor-pointer z-0 hover:bg-[#ADB5BD] hover:outline hover:outline-[5px] hover:outline-offset-[-5px] hover:outline-[#E9ECEF] ${
              !iconSelected ? "bg-[#CED4DA]" : "bg-[#F8F9FA]"
            }`}
            onClick={() => {
              toggleIconPicker();
            }}
          >
            <h1
              className={`text-6xl pt-5 text-white font-extrabold ${
                iconSelected ? "font-NotoEmoji" : "font-Poppins"
              }`}
            >
              {/* {companyName !== "" ? getFirstLetter(companyName) : "U"}
              {iconSelected ? icon : companyName} */}
              {!iconSelected
                ? companyName !== ""
                  ? getFirstLetter(companyName)
                  : "U"
                : icon}
            </h1>
          </div>
          <p
            className='w-auto mt-[8px] py-1 px-3 text-[14px] font-medium text-white font-Poppins text-center leading-6 bg-[#556AEB] rounded-lg cursor-pointer hover:bg-[#1D2E99]'
            onClick={toggleIconPicker}
          >
            Choose an icon
          </p>
        </div>
        <form
          action=''
          className='w-[79.8%] max-w-[420px] h-auto flex flex-col gap-[24px] justify-center items-center'
        >
          <label
            className='w-[100%] flex flex-col gap-[5px] font-Poppins text-[#00000080] text-[16px] font-normal leading-[24px] 
                '
          >
            <input
              //
              type='text'
              name='company-name'
              placeholder='Group / Organization / Company Name'
              value={companyName}
              onChange={handleCompanyNameChange}
              className={`${detectBrowser()} w-[100%] h-auto py-[10px] px-[16px] font-Poppins font-normal text-[#212529] leading-[24px]  outline outline-1 rounded-lg placeholder:text-[#495057] ${
                companyNameError || companyNameExists
                  ? "outline-[#D82D07]"
                  : "outline-[#CED4DA]"
              }`}
            />
            <p
              className={` mt-[5px] font-Poppins font-normal text-[14px] text-[#D82D07] leading-[21px] ${
                companyNameError ? " visible " : " hidden "
              } `}
            >
              Your workspace name doesn’t match our criteria:
              <ul className='ml-[20px] list-disc font-Poppins'>
                <li>Longer than 1 character</li>
                <li>Unique workspace name</li>
                <li>No double spacing</li>
              </ul>
            </p>
            <p
              className={` mt-[5px] font-Poppins font-normal text-[14px] text-[#D82D07] leading-[21px] ${
                companyNameExists ? " visible " : " hidden "
              } `}
            >
              This name already exists.
            </p>
          </label>

          <Onboarding_Skip_Continue_Btns
            btnText='Continue'
            message={`${
              companyName
                ? "Are you sure you want to skip?"
                : "Not writing your workspace name will make it difficult for us to tailor your workspace. Are you sure you want to skip?"
            }`}
            modalPosition='top-[170px]'
            skipToPage='/onboarding_5'
            continueOnClick={(e) => {
              processCompanyName(e);
            }}
            continueToPage='/onboarding_5'
            disabledState={disabled} // fix later
          />

        </form>
      </div>

      <Onboarding_progress_bar active='page4' />
      <Onboarding_Icon_Picker
        iconModalVisible={iconModalVisible}
        handleModalExit={toggleIconPicker}
        iconSelectionOnClick={(e) => {
          handelIcon(e);
        }}
      />
    </div>
  );
}
