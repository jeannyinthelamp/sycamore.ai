import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginHeader from "../../Components/Login_Signup/LoginHeader";
import google from "../../Assets/Icons/google-logo.svg";
import eye from "../../Assets/Icons/password-eye.svg";
import { safari_input_styling } from "../../Components/Styles/Safari_Input_Styling";

const Login = () => {
  const [eyeVisible, setEyeVisible] = useState(false);
  const [textSize, setTextSize] = useState(false);

  //^ Error state styling for incorrect form inputs
  const errorStyling = "text-[#c9324e] outline-[2px] outline-[#c9324e]";

  //TODO: Add code to increase & decrease password input font
  // get the value of the input field for password, then call checkPasswordInput function
  useEffect(() => {
    const passwordField = document.getElementById("passwordInput");
    const value = passwordField.value;

    checkPasswordInput(value);
  });

  // if the password field === an empty string, hide the eye icon. else show the eye icon
  const checkPasswordInput = (data) => {
    if (data === "") {
      setEyeVisible(false);
      setTextSize(false);
    } else {
      setEyeVisible(true);
      setTextSize(true);
    }
  };

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
              type='email'
              placeholder='Email Address'
              required
              className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg ${detectBrowser()} `}
            />
            {/* //! add state to trigger incorrect password / email style changes */}
            <p className='hidden mt-[-20px] font-Poppins font-normal text-[14px] text-[#c9324e] leading-[21px]'>
              Invalid email address.
            </p>
            <div className='password-input-wrapper relative'>
              <input
                id='passwordInput'
                type='password'
                required
                placeholder='Password'
                className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg placeholder:text-[16px] ${detectBrowser()} ${
                  textSize ? "text-[24px] py-[3.5px]" : ""
                }  `}
                onChange={() => {
                  //get the value of the input field.
                  checkPasswordInput();
                }}
              />
              {/* //! add state to trigger incorrect password / email style changes */}

              <p className='hidden mt-[2px] font-Poppins font-normal text-[14px] text-[#c9324e] leading-[21px]'>
                You have entered the wrong password.
              </p>

              {/* //! known bug - on safari this SVG overlays the default browser input field icon*/}
              <img
                className={`absolute top-[15px] right-[17px] w-[22px] h-[15px] ${
                  eyeVisible ? "" : "hidden"
                }`}
                src={eye}
                alt='eye'
              />
            </div>
            <div className='remember-me-checkbox-wrapper flex flex-row justify-between items-center'>
              <div className='checkbox-and-label-wrapper'>
                <input
                  type='checkbox'
                  id='remember-me'
                  name='remember-me'
                  value='Remember Me'
                  className='w-[16px] h-[16px] mr-[8px] rounded-lg cursor-pointer'
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

          <Link
            to=''
            className='flex flex-row justify-center items-center gap-[16px] w-[100%] h-[48px] py-[12px] font-Poppins text-[16px] leading-[24px] text-[#556AEB]  rounded-lg border-[1px] border-[#556AEB] text-center'
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
