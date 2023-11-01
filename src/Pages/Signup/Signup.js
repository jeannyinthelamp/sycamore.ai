import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginHeader from "../../Components/Login_Signup/LoginHeader";
import google from "../../Assets/Icons/google-logo.svg";
import eye from "../../Assets/Icons/password-eye.svg";
import { safari_input_styling } from "../../Components/Styles/Safari_Input_Styling";
import { auth } from "../../firebase";

import {
  getAuth,
  createUserWithEmailAndPassword,
  validatePassword,
} from "firebase/auth";

//TODO: implement error states and error popups
//TODO remove simple placeholder validation and add name, email, password validation
//TODO refactor everything inside of useEffect
//TODO: Work on form input popup logic 'required' and 'incorrect password' etc...

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passEyeVisible, setPassEyeVisible] = useState(false);
  const [confirmEyeVisible, setConfirmEyeVisible] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  //! Add state for terms and conditions error

  // true renders text at 24px, false at 16px
  const [passTextSize, setPassTextSize] = useState(false);
  const [confirmPassTextSize, setConfirmPassTextSize] = useState(false);

  const navigate = useNavigate();

  // Error state styling for incorrect form inputs
  const errorStyling = "text-[#c9324e] outline-[2px] outline-[#c9324e]";
  const errorOutlineStyling = " text-[#C9324E] outline-[#C9324E] ";

  // Sign up a new user with firebase
  const signupNewUser = (e) => {
    e.preventDefault();

    //! Clean up this if tree, ether use guard clauses or make a catch all validation function.
    if (validateUserName(userName) && validateEmail(email)) {
      if (validatePasswords(password, confirmPassword)) {
        //! keep password validation and terms validation seperate
        //! keep password validation and terms validation seperate
        if (termsAccepted) {
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
          console.log("Terms not accepted");
          alert("Terms and Conditions must be accepted to continue");
        }
      }
    }
  };

  const validateUserName = (name) => {
    //check user name against regular expression
    const nameRegEx = /[^a-zA-Z]/;
    // returns true if test is passed, else false
    let isValidName = nameRegEx.test(name);
    //checks if name only contains white space
    let isWhiteSpace = name.trim().length !== 0;

    if (isValidName && isWhiteSpace) {
      setNameError(false);
      // alert("Valid Name");
      return true;
    } else {
      // alert("NOT Valid Name");
      setNameError(true);
      return false;
    }
  };

  const validateEmail = (email) => {
    // email address will be checked against this regular expression:
    const emailRegEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // returns true if test is passed, else false
    let isValidEmail = emailRegEx.test(email);

    if (isValidEmail) {
      setEmailError(false);
      // alert("Email is VALID");
      return true;
    } else {
      setEmailError(true);
      // alert("Email NOT VALID");
      return false;
    }
  };

  const validatePasswords = (passwordValue, confirmPasswordValue) => {
    //^ password length must be 8+
    //^ password must contain: lower-case, upper-case, symbol, number

    const passwordRegEx =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    let isValidPassword = passwordRegEx.test(passwordValue);
    let passwordsMatch = passwordValue === confirmPasswordValue;

    if (isValidPassword) {
      setPasswordError(false);

      if (passwordsMatch) {
        setConfirmPasswordError(false);
        // alert("Passwords MATCH");
        return true;
      } else {
        // alert("Passwords DO NOT MATCH");
        setConfirmPasswordError(true);
        return false;
      }
    } else {
      setPasswordError(true);
      return false;
    }

    // if (passwordValue !== confirmPasswordValue || passwordValue === "") {
    //   return false;
    // }
    // return true;
  };

  // get the value of the input field for password and confirm password, then validate inputs to ensure they match
  useEffect(() => {
    const passwordInput = document.getElementById("passwordInput"),
      confirmPasswordInput = document.getElementById("confirmPassword"),
      passEye = document.getElementById("passwordEye"),
      passConfirmEye = document.getElementById("confirmPasswordEye");

    // when password  & confirm password input fields are changed call checkPasswordInput function
    passwordInput.onChange = checkPasswordInput(
      "passwordInput",
      passwordInput.type
    );
    confirmPasswordInput.onChange = checkPasswordInput(
      "confirm-passwordInput",
      confirmPasswordInput.type
    );

    // When the eye icon is clicked, password visibility will toggle
    passEye.onclick = triggerPasswordTextVisibility;
    passConfirmEye.onclick = triggerConfirmTextVisibility;

    function triggerPasswordTextVisibility() {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        setPassTextSize(false);
      } else {
        passwordInput.type = "password";
        setPassTextSize(true);
      }
      return;
    }

    function triggerConfirmTextVisibility() {
      if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
        setConfirmPassTextSize(false);
      } else {
        confirmPasswordInput.type = "password";
        setConfirmPassTextSize(true);
      }
      return;
    }

    function checkPasswordInput(field, inputType) {
      if (field === "passwordInput" && inputType === "password") {
        setPassEyeVisible(true);
        setPassTextSize(true);
      } else if (
        field === "confirm-passwordInput" &&
        inputType === "password"
      ) {
        setConfirmEyeVisible(true);
        setConfirmPassTextSize(true);
      }
    }

    // passwordInput.onchange = validatePassword;
    // confirmPasswordInput.onchange = validatePassword;
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
          {/* //! Known bug: On mobile devices form input element borders dont appear. May have something to do with detectBrowser function. Or may need to add transform: perspective 1px */}
          <form
            action=''
            onSubmit=''
            className='flex flex-col gap-[24px] border-b-[1px] border-[#CED4DA]'
          >
            <input
              type='text'
              placeholder='Your Full Name'
              required
              onChange={(e) => setUserName(e.target.value)}
              className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg ${
                nameError ? errorOutlineStyling : " "
              } ${detectBrowser()} `}
            />
            {/* //! add state to trigger required error message */}
            <p
              className={`mt-[-20px] font-Poppins font-normal text-[14px] text-[#c9324e] leading-[21px] ${
                nameError ? errorStyling : "hidden"
              }`}
            >
              First and last name required.
            </p>
            <input
              type='email'
              placeholder='Your Email'
              required
              onChange={(e) => setEmail(e.target.value)}
              className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg ${
                emailError ? errorOutlineStyling : ""
              }  ${detectBrowser()} `}
            />
            {/* //! add state to trigger required error message */}
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
                onChange={(e) => setPassword(e.target.value)}
                className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg placeholder:text-[16px] ${
                  passwordError ? errorOutlineStyling : " "
                } ${detectBrowser()} ${
                  passTextSize ? " text-[24px] py-[3.6px] " : ""
                }  `}
              />
              {/* //! add state to trigger password error messages (Firebase may help with this) */}

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
                minLength={8}
                placeholder='Confirm Password'
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-[100%] py-[10px] px-[16px] font-Poppins font-normal text-[16px] leading-[24px text-[#6C757D] placeholder-[#6C757D] outline outline-[1px] outline-[#CED4DA] rounded-lg placeholder:text-[16px] ${
                  confirmPasswordError ? errorOutlineStyling : " "
                } ${detectBrowser()} ${
                  confirmPassTextSize ? "text-[24px] py-[3.6px]" : ""
                }  `}
              />
              {/* //! add state to trigger password error messages (Firebase may help with this) */}

              <p
                className={` mt-[5px] font-Poppins font-normal text-[14px] text-[#c9324e] leading-[21px] ${
                  confirmPasswordError ? errorStyling : " hidden "
                }`}
              >
                Your password does not match.
              </p>

              {/* //! known bug - on safari this SVG overlays the default browser input field icon*/}
              <img
                className={`absolute top-[15px] right-[17px] w-[22px] h-[15px] cursor-pointer ${
                  confirmEyeVisible ? "" : " hidden "
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
                to='/terms'
                target='_blank'
                className='font-Poppins font-medium text-[#556AEB] text-[16px] text-center leading-[24px] underline'
              >
                Terms and Conditions
              </Link>
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
