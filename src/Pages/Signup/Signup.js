import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginHeader from "../../Components/Login_Signup/LoginHeader";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validateUserPasswords,
  preventCopyPaste,
} from "../../Components/Login_Signup/Validation";

import google from "../../Assets/Icons/google-logo.svg";
import eye_open from "../../Assets/Icons/password-eye.svg";
import eye_closed from "../../Assets/Icons/password-eye-closed.svg";
import { safari_input_styling } from "../../Components/Styles/Safari_Input_Styling";

//TODO: In this order:
// Make inputs validate on focus out
//Reset password
//Google Sign up
//Terms and Service

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [termsAcceptedError, setTermsAcceptedError] = useState(false);

  const [passwordEyeIcon, setPasswordEyeIcon] = useState(false);
  const [confirmPasswordEyeIcon, setConfirmPasswordEyeIcon] = useState(false);
  const [showPasswordRequirements, setShowPasswordRequirements] =
    useState(false);

  // true renders text at 24px, false at 16px
  const [passTextSize, setPassTextSize] = useState(false);
  const [confirmPassTextSize, setConfirmPassTextSize] = useState(false);

  const navigate = useNavigate();

  // Error state styling for incorrect form inputs
  const errorStyling =
    " text-[#c9324e] placeholder-[#c9324e] outline-[2px] outline-[#c9324e] ";

  // Sign up a new user with firebase
  const signupNewUser = (e) => {
    // prevent form from submitting before all inputs are validated and return true
    e.preventDefault();

    if (validateFirstName(firstName, setFirstNameError)) {
      if (validateLastName(lastName, setLastNameError)) {
        if (validateEmail(email, setEmailError)) {
          if (
            validateUserPasswords(
              password,
              confirmPassword,
              setPasswordError,
              setConfirmPasswordError,
              setShowPasswordRequirements
            )
          ) {
            if (termsAccepted) {
              setTermsAcceptedError(false);
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log(user);
                  alert("Successfully created user!");
                  navigate("/login");
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorCode, errorMessage);
                  // ..
                });
            } else {
              setTermsAcceptedError(true);
            }
          }
        }
      }
    }
  };

  // get the value of the input fields for password and confirm password, then validate inputs to ensure they match
  useEffect(() => {
    const passwordInput = document.getElementById("passwordInput"),
      confirmPasswordInput = document.getElementById("confirmPassword"),
      passwordEyeToggle = document.getElementById("passwordEye"),
      passConfirmEye = document.getElementById("confirmPasswordEye");

    // when password  & confirm password input fields are changed call toggleBulletPointTextSize function
    passwordInput.onChange = toggleBulletPointTextSize(
      "passwordInput",
      passwordInput.type
    );
    confirmPasswordInput.onChange = toggleBulletPointTextSize(
      "confirm-passwordInput",
      confirmPasswordInput.type
    );

    // Disable copy / paste functionality for password and confirm password fields
    //^ Should there be some kind of UI interaction to notify user that copy / paste is disabled?
    passwordInput.onpaste = preventCopyPaste;
    passwordInput.oncopy = preventCopyPaste;
    confirmPasswordInput.onpaste = preventCopyPaste;
    confirmPasswordInput.oncopy = preventCopyPaste;

    // When the eye icon is clicked, password visibility will toggle
    passwordEyeToggle.onclick = togglePasswordTextVisibility;
    passConfirmEye.onclick = toggleConfirmTextVisibility;

    function togglePasswordTextVisibility() {
      setPasswordEyeIcon(!passwordEyeIcon);

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        setPassTextSize(false);
      } else {
        passwordInput.type = "password";
        setPassTextSize(true);
      }
      return;
    }

    function toggleConfirmTextVisibility() {
      setConfirmPasswordEyeIcon(!confirmPasswordEyeIcon);

      if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
        setConfirmPassTextSize(false);
      } else {
        confirmPasswordInput.type = "password";
        setConfirmPassTextSize(true);
      }
      return;
    }

    //set the text size for password fields. Bullets 24px / text 16px
    function toggleBulletPointTextSize(field, inputType) {
      if (field === "passwordInput" && inputType === "password") {
        setPassTextSize(true);
      } else if (
        field === "confirm-passwordInput" &&
        inputType === "password"
      ) {
        setConfirmPassTextSize(true);
      }
    }
  });

  function displayPasswordRequirements() {
    //! Currently there is an off by 1 bug. password length keeps returning 1 less than the actual value

    //! the bug may be cause by the regex in validateUsersPasswords function introducing white space, or some other unicode value
    console.log(password);
    if (password.length + 1 !== 0) {
      setShowPasswordRequirements(true);
      if (passwordError) {
        setPasswordError(false);
      }
    } else {
      setShowPasswordRequirements(false);
    }
  }

  // Safari has an issue where its difficult to change input border-radius. This function detects a users browser, then injects classNames in to create an outline
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
          {/* //! Known bug: On mobile devices form input element borders don't appear. May have something to do with detectBrowser function. Or may need to add transform: perspective 1px */}
          <form
            action=''
            onSubmit=''
            className='flex flex-col gap-[24px] border-b-[1px] border-[#CED4DA]'
          >
            <input
              type='text'
              placeholder='First Name'
              required
              onChange={(e) => setFirstName(e.target.value)}
              className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg ${
                firstNameError ? errorStyling : " "
              } ${detectBrowser()} `}
            />

            <p
              className={`mt-[-20px] font-Poppins font-normal text-[14px] text-[#c9324e] leading-[21px] ${
                firstNameError ? errorStyling : "hidden"
              }`}
            >
              First name required.
            </p>
            <input
              type='text'
              placeholder='Last Name'
              required
              onChange={(e) => setLastName(e.target.value)}
              className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg ${
                lastNameError ? errorStyling : " "
              } ${detectBrowser()} `}
            />
            <p
              className={`mt-[-20px] font-Poppins font-normal text-[14px] text-[#c9324e] leading-[21px] ${
                lastNameError ? errorStyling : "hidden"
              }`}
            >
              Last name required.
            </p>

            <input
              type='email'
              placeholder='Your Email'
              required
              onChange={(e) => setEmail(e.target.value)}
              className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg ${
                emailError ? errorStyling : ""
              }  ${detectBrowser()} `}
            />

            <p
              className={`mt-[-20px] font-Poppins font-normal text-[14px] text-[#c9324e] leading-[21px] ${
                emailError ? errorStyling : "hidden"
              }`}
            >
              This field is required
            </p>
            <div className='password-input-wrapper relative'>
              <input
                id='passwordInput'
                type='password'
                required
                minLength={8}
                placeholder='Create Password'
                onChange={(e) => {
                  setPassword(e.target.value);
                  displayPasswordRequirements();
                }}
                className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg placeholder:text-[16px] ${
                  passwordError ? errorStyling : " "
                } ${detectBrowser()} ${
                  passTextSize ? " text-[24px] py-[4.1px] " : ""
                }  `}
              />

              <p
                className={` mt-[5px] font-Poppins font-normal text-[14px] text-[#6C757D] leading-[21px] ${
                  showPasswordRequirements ? null : "hidden"
                }`}
              >
                Your password must fit the requirement of:
                <ul className='ml-[20px] list-disc font-Poppins'>
                  <li>8 + characters</li>
                  <li>1 Uppercase & 1 lowercase</li>
                  <li>1 Symbol & 1 number</li>
                </ul>
              </p>

              <p
                className={` mt-[5px] font-Poppins font-normal text-[14px] text-[#c9324e] leading-[21px] ${
                  passwordError ? errorStyling : "hidden"
                }`}
              >
                Your password doesn't fit the requirement of:
                <ul className='ml-[20px] list-disc font-Poppins'>
                  <li>8 + characters</li>
                  <li>1 Uppercase & 1 lowercase</li>
                  <li>1 Symbol & 1 number</li>
                </ul>
              </p>

              {/* //! known bug - on safari this SVG overlays the default browser input field icon*/}

              <img
                className='absolute top-[15px] right-[17px] w-[22px] h-[15px] cursor-pointer'
                src={passwordEyeIcon ? eye_open : eye_closed}
                alt={passwordEyeIcon ? "eyeball" : "eyeball closed"}
                id='passwordEye'
              />
            </div>
            <div className='confirm-password-input-wrapper relative'>
              <input
                id='confirmPassword'
                type='password'
                required
                minLength={8}
                placeholder='Confirm Password'
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg placeholder:text-[16px] ${
                  confirmPasswordError ? errorStyling : " "
                } ${detectBrowser()} ${
                  confirmPassTextSize ? "text-[24px] py-[4.2px] " : ""
                }  `}
              />

              <p
                className={` mt-[5px] font-Poppins font-normal text-[14px] text-[#c9324e] leading-[21px] ${
                  confirmPasswordError ? errorStyling : " hidden "
                }`}
              >
                Your password does not match.
              </p>

              {/* //! known bug - on safari this SVG overlays the default browser input field icon*/}
              <img
                className='absolute top-[15px] right-[17px] w-[22px] h-[15px] cursor-pointer'
                src={confirmPasswordEyeIcon ? eye_open : eye_closed}
                alt={confirmPasswordEyeIcon ? "eyeball" : "eyeball closed"}
                id='confirmPasswordEye'
              />
            </div>
            <div className='flex flex-col'>
              <div className='terms-and-conditions-checkbox-wrapper flex flex-row justify-start items-center'>
                <div className='checkbox-and-label-wrapper'>
                  <input
                    type='checkbox'
                    id='terms'
                    name='terms'
                    value=''
                    required
                    checked={termsAccepted}
                    onClick={() => {
                      setTermsAccepted(!termsAccepted);
                    }}
                    className='w-[16px] h-[16px] mr-[8px] rounded-lg cursor-pointer'
                  />
                  <label
                    for='terms'
                    className='mr-[4px] font-Poppins font-medium text-[#6C757D] text-[16px] text-center leading-[24px]'
                  >
                    {" "}
                    I agree to the
                  </label>
                </div>
                <Link
                  to='/terms-and-conditions'
                  target='_blank'
                  className='font-Poppins font-medium text-[#556AEB] text-[16px] text-center leading-[24px] underline'
                >
                  Terms and Conditions
                </Link>
              </div>
              <p
                className={` mt-[5px] font-Poppins font-normal text-[14px] text-[#c9324e] leading-[21px] ${
                  termsAcceptedError ? errorStyling : " hidden "
                }`}
              >
                You must agree to the Terms and Conditions to continue.
              </p>
            </div>

            {/* //& submit button */}
            <input
              type='submit'
              value='Sign Up'
              onClick={signupNewUser}
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
              <Link
                to='/login'
                className='ml-[4px] font-Poppins font-medium text-[16px] leading-[24px] text-[#556AEB] cursor-pointer underline'
              >
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
