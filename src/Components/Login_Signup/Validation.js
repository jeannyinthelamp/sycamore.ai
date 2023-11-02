// This file contains the functions for validating user full userName, email, and password

export const validateUserName = (userName, setUserNameError) => {
  //check user userName against regular expression
  const nameRegEx = /[^a-zA-Z]/;
  // returns true if test is passed, else false
  let isValidName = nameRegEx.test(userName);
  //checks if userName only contains white space
  let isWhiteSpace = userName.trim().length !== 0;

  if (isValidName && isWhiteSpace) {
    setUserNameError(false);
    // alert("Valid userName");
    return true;
  } else {
    // alert("NOT Valid userName");
    setUserNameError(true);
    return false;
  }
};

export const validateEmail = (email, setEmailError) => {
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

export const validateUserPasswords = (
  password,
  confirmPassword,
  setPasswordError,
  setConfirmPasswordError,
  setShowPasswordRequirements
) => {
  // password length must be 8+
  // must contain: lower-case, upper-case, symbol, number

  // User entered password will be checked against this regular expression to ensure it meets requirements
  const passwordRegEx =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

  let isValidPassword = passwordRegEx.test(password);
  let passwordsMatch = password === confirmPassword;

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
    setShowPasswordRequirements(false);
    return false;
  }
};
