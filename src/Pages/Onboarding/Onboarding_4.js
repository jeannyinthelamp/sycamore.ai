/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import Onboarding_header from "../../Components/Onboarding/Onboarding_header/Onboarding_header";
import Onboarding_progress_bar from "../../Components/Onboarding/Onboarding_progress_bar/Onboarding_progress_bar";
import Onboarding_Button from "../../Components/Onboarding/Onboarding_Button/Onboarding_Button";
import { safari_input_styling } from "../../Components/Styles/Safari_Input_Styling";
import { useNavigate } from "react-router-dom";
import { validateCompanyName } from "./Onboarding_Validation/Onboarding_Validation";
import Onboarding_Alert_Modal from "../../Components/Onboarding/Onboarding_Alert_Modal/Onboarding_Alert_Modal";
import Onboarding_Icon_Picker from "../../Components/Onboarding/Onboarding_Icon_Picker/Onboarding_Icon_Picker";
import warning from "../../Assets/Icons/Onboarding_Icons/warning.svg";
import exit from "../../Assets/Icons/Onboarding_Icons/exit.svg";

export default function Onboarding_4() {
  const [visible, setVisible] = useState(false);
  const [iconModalVisible, setIconModalVisible] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companyNameError, setCompanyNameError] = useState(false);
  const [companyNameExists, setCompanyNameExists] = useState(false);

  const navigate = useNavigate();

  const getFirstLetter = (companyName) => {
    return companyName.trim().charAt(0).toUpperCase();
  };

  const toggleIconPicker = () => {
    setIconModalVisible(true);
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
    <div className='relative flex flex-col justify-center items-center'>
      <Onboarding_header />

      <div className='title-and-form-wrapper max-w-[730px] mx-[20px] h-auto flex flex-col justify-center items-center'>
        <div className='text-wrapper max-w-[730px] h-auto flex flex-col justify-start items-center'>
          <Onboarding_Alert_Modal
            isVisible={visible ? " " : " hidden "}
            message='Are you sure you want to skip?'
            border='border-[#D82D07]'
            background='bg-[#FFDDDF]'
            iconLeft={warning}
            iconLeftAlt='warning'
            iconRight={exit}
            iconRightAlt='exit button'
            skipBtnVisible={true}
            exitBtnOnClick={() => {
              setVisible(false);
            }}
            skipBtnOnClick={() => {
              //navigate to next page of onboarding
              handleSkip();
            }}
          />
          <h1 className='w-[100%] mt-[75px] mb-[24px] mx-[22px] font-Poppins text-[40px] font-semibold text-black text-center leading-[54px]'>
            Let's get your workspace ready
          </h1>
          <p className='font-Poppins text-[18px] font-medium leading-[28px] text-center'>
            Choose an icon and name your workspace (ex. company name). You can
            always change them later.
          </p>
        </div>
        <div className='my-[48px]'>
          <div className='bg-[#CED4DA] p-[10px] w-[120px] h-[120px] rounded-full flex flex-col items-center'>
            <h1 className='text-6xl pt-5 text-white font-Poppins font-extrabold'>
              {companyName !== "" ? getFirstLetter(companyName) : "U"}
            </h1>
          </div>
          <p
            className='my-[8px] text-[#212529] font-Poppins text-center'
            onClick={() => {
              toggleIconPicker();
            }}
          >
            Choose Icon
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
              placeholder='Example: Syne Studio'
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className={`${detectBrowser()} w-[100%] h-auto py-[10px] px-[16px] font-Poppins font-normal text-[#212529] leading-[24px]  outline outline-1 rounded-lg ${
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

          <Onboarding_Button
            btnText='Continue'
            disabled={companyName ? false : true}
            onClick={processCompanyName}
          />
        </form>
      </div>

      <button
        className='h-[24px] mt-[12px] font-Poppins font-medium text-[16px] leading-[24px] text-[#556AEB] text-center underline underline-offset-2 cursor-pointer'
        onClick={() => {
          setVisible(true);
        }}
      >
        Skip
      </button>
      {/* Change the active prop to page2, page3 etc to change the color of the corresponding bar */}
      <Onboarding_progress_bar active='page4' />
      <Onboarding_Icon_Picker />
    </div>
  );
}
