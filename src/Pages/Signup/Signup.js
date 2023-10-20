import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginHeader from "../../Components/Login_Signup/LoginHeader";
import google from "../../Assets/Icons/google-logo.svg";
import eye from "../../Assets/Icons/password-eye.svg";
import { safari_input_styling } from "../../Components/Styles/Safari_Input_Styling";

//! fix bug that keeps the form from submitting

//! fix bug that causes password field text to enlarge while entering a value AND password is visible

const Signup = () => {
  const [passEyeVisible, setPassEyeVisible] = useState(false);
  //passTextSize - true renders text at 24px, false at 16px
  const [passTextSize, setPassTextSize] = useState(false);

  const [confirmEyeVisible, setConfirmEyeVisible] = useState(false);
  //confirmPassTextSize - true renders text at 24px, false at 16px

  const [confirmPassTextSize, setConfirmPassTextSize] = useState(false);

  //^ Error state styling for incorrect form inputs
  const errorStyling = "text-[#c9324e] outline-[2px] outline-[#c9324e]";

  // get the value of the input field for password and confirm password, then validate inputs to ensure they match
  useEffect(() => {
    const pass = document.getElementById("passwordInput"),
      confirmPass = document.getElementById("confirmPassword"),
      passEye = document.getElementById("passwordEye"),
      passConfirmEye = document.getElementById("confirmPasswordEye");

    // when password  & confirm password input fields are changed call checkPasswordInput function
    pass.onChange = checkPasswordInput("pass", pass.type);
    confirmPass.onChange = checkPasswordInput("confirm-pass", confirmPass.type);

    // When the eye icon is clicked, password visibility will toggle
    passEye.onclick = triggerPasswordTextVisibility;
    passConfirmEye.onclick = triggerConfirmTextVisibility;

    function triggerPasswordTextVisibility() {
      if (pass.type === "password") {
        pass.type = "text";
        setPassTextSize(false);
      } else {
        pass.type = "password";
        setPassTextSize(true);
      }
      return;
    }

    function triggerConfirmTextVisibility() {
      if (confirmPass.type === "password") {
        confirmPass.type = "text";
        setConfirmPassTextSize(false);
      } else {
        confirmPass.type = "password";
        setConfirmPassTextSize(true);
      }
      return;
    }

    function checkPasswordInput(field, inputType) {
      if (field === "pass" && inputType === "password") {
        setPassEyeVisible(true);
        setPassTextSize(true);
      } else if (field === "confirm-pass" && inputType === "password") {
        setConfirmEyeVisible(true);
        setConfirmPassTextSize(true);
      }
    }

    function validatePassword() {
      if (pass.value !== confirmPass.value) {
        confirmPass.setCustomValidity("Your password does not match.");
      }
      return;
    }

    pass.onchange = validatePassword;
    confirmPass.onkeyup = validatePassword;
  });

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
            Sign Up
          </h1>
          <form
            className='flex flex-col gap-[24px] border-b-[1px] border-[#CED4DA]'
            action=''
          >
            <input
              type='text'
              placeholder='Your Full Name'
              required
              className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg ${detectBrowser()} `}
            />
            <input
              type='email'
              placeholder='Your Email'
              required
              className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg ${detectBrowser()} `}
            />
            {/* //! add state to trigger required error message */}
            <p className='hidden mt-[-20px] font-Poppins font-normal text-[14px] text-[#c9324e] leading-[21px]'>
              This field is required
            </p>
            <div className='password-input-wrapper relative'>
              <input
                id='passwordInput'
                type='password'
                required
                minLength={6}
                placeholder='Create Password'
                className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg placeholder:text-[16px] ${detectBrowser()} ${
                  passTextSize ? " text-[24px] py-[3.5px] " : ""
                }  `}
                onChange={() => {
                  //get the value of the input field.
                  // checkPasswordInput("pass");
                }}
              />
              {/* //! add state to trigger password error messages (Firebase may help with this) */}

              <p className='hidden mt-[2px] font-Poppins font-normal text-[14px] text-[#c9324e] leading-[21px]'>
                Your password should be at least 6 characters long.
              </p>

              {/* //! known bug - on safari this SVG overlays the default browser input field icon*/}

              <img
                className={`absolute top-[15px] right-[17px] w-[22px] h-[15px] cursor-pointer ${
                  passEyeVisible ? "" : "hidden"
                }`}
                src={eye}
                alt='eye'
                id='passwordEye'
              />
            </div>
            <div className='confirm-password-input-wrapper relative'>
              <input
                id='confirmPassword'
                type='password'
                required
                minLength={6}
                placeholder='Confirm Password'
                className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg placeholder:text-[16px] ${detectBrowser()} ${
                  confirmPassTextSize ? "text-[24px] py-[3.5px]" : ""
                }  `}
                onChange={() => {
                  //get the value of the input field.
                  // checkPasswordInput("confirm-pass");
                }}
              />
              {/* //! add state to trigger password error messages (Firebase may help with this) */}

              <p className='hidden mt-[2px] font-Poppins font-normal text-[14px] text-[#c9324e] leading-[21px]'>
                Your password does not match.
              </p>

              {/* //! known bug - on safari this SVG overlays the default browser input field icon*/}
              <img
                className={`absolute top-[15px] right-[17px] w-[22px] h-[15px] cursor-pointer ${
                  confirmEyeVisible ? "" : "hidden"
                }`}
                src={eye}
                alt='eye'
                id='confirmPasswordEye'
              />
            </div>
            <div className='terms-and-conditions-checkbox-wrapper flex flex-row justify-start items-center'>
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
                  className='mr-[4px] font-Poppins font-medium text-[#6C757D] text-[16px] text-center leading-[24px]'
                >
                  {" "}
                  I agree to the
                </label>
              </div>
              <Link
                to=''
                className='font-Poppins font-medium text-[#556AEB] text-[16px] text-center leading-[24px] underline'
              >
                Terms and Conditions
              </Link>
            </div>
            <input
              type='submit'
              value='Sign Up'
              className={`w-[100%] h-[48px] mb-[24px] font-Poppins font-medium text-[16px] text-white text-center leading-[24px] bg-[#556AEB] rounded-lg cursor-pointer ${detectBrowser}`}
            />
          </form>

          <Link
            to=''
            className='flex flex-row justify-center items-center gap-[16px] w-[100%] h-[48px] py-[12px] font-Poppins text-[16px] leading-[24px] text-[#556AEB]  rounded-lg border-[1px] border-[#556AEB] text-center'
          >
            <img src={google} alt='Google Logo' className='w-[24px] h-[24px]' />
            Sign Up with Google
          </Link>
          <div className='sign-up-wrapper flex flex-row justify-center items-center'>
            <p className='font-Poppins font-medium text-[16px] leading-[24px] text-black'>
              Already have an Account?{" "}
              <Link className='ml-[4px] font-Poppins font-medium text-[16px] leading-[24px] text-[#556AEB] cursor-pointer underline'>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
