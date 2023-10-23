import React from "react";
import LoginHeader from "../../Components/Login_Signup/LoginHeader";
import { safari_input_styling } from "../../Components/Styles/Safari_Input_Styling";

export default function ForgotPassword() {
  // Safari has an issue where its difficult to change input border-radius. This function detects a users browser, then injects classNames into create an outline
  function detectBrowser() {
    if (navigator.userAgent.includes("Safari")) {
      return safari_input_styling;
    }
  }
  return (
    <div className='forgot-password-page-wrapper w-[100%] h-[100%]'>
      <LoginHeader />
      <div className='forgot-password-page-inner-wrapper flex flex-col justify-center items-center w-[100%] h-[100%]'>
        <div className='content-wrapper flex flex-col gap-[24px] max-w-[420px] w-[52%] mt-[264px]'>
          <h1 className='font-Poppins font-semibold w-[100%] text-[40px] leading-[54px] text-center text-black'>
            Forgot Password?
          </h1>
          <p className='mt-[-10px] font-Poppins font-normal text-[16px] leading-[24px] text-black text-center'>
            We will send you instructions on how to reset your password by
            email.
          </p>
          <form className='flex flex-col gap-[24px]' action=''>
            <input
              type='email'
              placeholder='Email'
              required
              className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg ${detectBrowser()} `}
            />
            <input
              onSubmit={() => {}}
              type='submit'
              value='Submit'
              className={`w-[100%] h-[48px] mb-[24px] font-Poppins font-medium text-[16px] text-white text-center leading-[24px] bg-[#556AEB] rounded-lg cursor-pointer ${detectBrowser}`}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
