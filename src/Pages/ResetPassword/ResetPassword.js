import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginHeader from "../../Components/Login_Signup/LoginHeader";
import eye from "../../Assets/Icons/password-eye.svg";
import { safari_input_styling } from "../../Components/Styles/Safari_Input_Styling";

export default function ResetPassword() {
  const [passEyeVisible, setPassEyeVisible] = useState(false);
  //passTextSize - true renders text at 24px, false at 16px
  const [passTextSize, setPassTextSize] = useState(false);

  const [confirmEyeVisible, setConfirmEyeVisible] = useState(false);

  //confirmPassTextSize - true renders text at 24px, false at 16px
  const [confirmPassTextSize, setConfirmPassTextSize] = useState(false);

  // Error state styling for incorrect form inputs
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
      if (confirmPass.value !== pass.value) {
        confirmPass.setCustomValidity("Your password does not match.");
        // console.log("passwords do not match");
      } else {
        confirmPass.setCustomValidity("");
        // console.log("passwords match");
      }
      return;
    }

    pass.onchange = validatePassword;
    confirmPass.onchange = validatePassword;
  });

  function detectBrowser() {
    if (navigator.userAgent.includes("Safari")) {
      return safari_input_styling;
    }
  }
  return (
    <div className='reset-password-page-wrapper w-[100%] h-[100%]'>
      <LoginHeader />
      <div className='reset-password-page-inner-wrapper flex flex-col justify-center items-center w-[100%] h-[100%]'>
        <div className='content-wrapper flex flex-col gap-[24px] max-w-[420px] w-[52%] mt-[216px]'>
          <h1 className='font-Poppins font-semibold w-[100%] text-[40px] leading-[54px] text-center text-black'>
            Reset Password
          </h1>
          <p className='mt-[-10px] font-Poppins font-normal text-[16px] leading-[24px] text-black text-center'>
            Please enter and confirm your new password.
          </p>
          <p className='mt-[-24px] font-Poppins font-normal text-[16px] leading-[24px] text-black text-center'>
            Use at least 6 characters.
          </p>
          <form className='flex flex-col gap-[24px]' action=''>
            <div className='password-input-wrapper relative'>
              <input
                id='passwordInput'
                type='password'
                required
                minLength={6}
                placeholder='Create Password'
                className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg placeholder:text-[16px] ${detectBrowser()} ${
                  passTextSize ? " text-[24px] py-[3.6px] " : ""
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
                  confirmPassTextSize ? "text-[24px] py-[3.6px]" : ""
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
            <div className='flex flex-col gap-[24px]'>
              <input
                id='reset-password'
                type='submit'
                required
                minLength={6}
                value='Reset Password'
                className={`w-[100%] py-[12px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-white bg-[#556AEB] outline outline-[1px] rounded-lg cursor-pointer ${detectBrowser()} `}
                onClick={() => {
                  //TODO: handle resend email functionality
                }}
                Reset
                Email
              />
              <Link
                to='/login'
                className={`w-[100%] h-[48px] mb-[24px] py-[12px] font-Poppins font-medium text-[16px] text-[#556AEB] text-center leading-[24px] bg-white rounded-lg border border-[#556AEB] cursor-pointer ${detectBrowser}`}
              >
                Back to Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
