import React from "react";
import { Link } from "react-router-dom";
import LoginHeader from "../../Components/Login_Signup/LoginHeader";
import google from "../../Assets/Icons/google-logo.svg";
import { safari_input_styling } from "../../Components/Styles/Safari_Input_Styling";

const Login = () => {
  //^ Error state styling for incorrect form inputs
  const errorStyling = "text-[#C9324E] outline-[#C9324E]";

  // Safari has an issue where its difficult to change input border-radius. This function detects a users browser, then injects classNames into create an outline
  function detectBrowser() {
    if (navigator.userAgent.includes("Safari")) {
      return safari_input_styling;
    }
  }
  return (
    <div className='login-page-wrapper w-[100%]'>
      <LoginHeader />
      <div className='flex flex-col justify-center items-center login-page-inner-wrapper w-[100%] h-[100%]'>
        <div className='content-wrapper flex flex-col gap-[24px] mt-[192px] max-w-[420px] w-[52%]'>
          <h1 className='font-Poppins font-semibold w-[100%] text-[40px] leading-[54px] text-center text-black'>
            Log in to Syne
          </h1>
          <form
            className='flex flex-col gap-[24px] border-b-[1px] border-[#CED4DA]'
            action=''
          >
            <input
              type='text'
              placeholder='Email Address'
              className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg ${detectBrowser} `}
            />
            <input
              type='password'
              placeholder='Password'
              className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg ${detectBrowser} `}
            />
            <div className='remember-me-checkbox-wrapper flex flex-row justify-between items-center'>
              <div className='checkbox-and-label-wrapper'>
                {/* //^ update styling for checkbox input */}
                <input
                  type='checkbox'
                  id='remember-me'
                  name='remember-me'
                  value='Remember Me'
                  className='w-[16px] h-[16px] mr-[8px] rounded-lg cursor-pointer border-none -webkit-border-none'
                />
                <label
                  for='remember-me'
                  className='font-Poppins font-medium text-[#212529] text-[16px] text-center leading-[24px]'
                >
                  {" "}
                  Remember Me
                </label>
              </div>
              <Link
                to=''
                className='font-Poppins font-medium text-[#556AEB] text-[16px] text-center leading-[24px] underline'
              >
                Forgot Password?
              </Link>
            </div>
            <input
              type='submit'
              value='Login'
              className={`w-[100%] h-[48px] mb-[24px] font-Poppins font-medium text-[16px] text-white text-center leading-[24px] bg-[#556AEB] rounded-lg cursor-pointer ${detectBrowser}`}
            />
          </form>
          {/* //^ add dividing line */}
          <Link
            to=''
            className='flex flex-row justify-center items-center gap-[16px] w-[100%] h-[48px] py-[12px] font-Poppins text-[16px] leading-[24px] text-[#556AEB]  rounded-lg border-[1px] border-[#556AEB]'
          >
            <img src={google} alt='Google Logo' className='w-[24px] h-[24px]' />
            Continue with Google
          </Link>
          <div className='sign-up-wrapper flex flex-row justify-center items-center'>
            <p className='font-Poppins font-medium text-[16px] leading-[24px] text-black'>
              Don't have an Account?{" "}
              <Link className='ml-[4px] font-Poppins font-medium text-[16px] leading-[24px] text-[#556AEB] cursor-pointer underline'>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
