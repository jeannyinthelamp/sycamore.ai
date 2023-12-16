// This file contains the function for validating workspace name

// Since this function removes double spaces and leading/trailing spaces, the user wont be notified of the changes. The processed companyName will just be sent to firebase
export const validateCompanyName = (
  companyName,
  setCompanyName,
  setCompanyNameError,
  setCompanyNameExists
) => {
  if (!companyName || companyName.trim().length <= 1) {
    setCompanyNameError(true);
    return false;
  } else {
    //remove any leading/trailing white space or double spacing
    companyName = companyName.trim();
    companyName = companyName.replace(/\s+/g, " ");

    // TODO: make sure name is unique
    // send name to firebase store and check if it is unique
    // if name does exist setCompanyNameExists(true), return false
    // else setCompanyNameExists(false), continue with the below code...
    setCompanyNameError(false);
    setCompanyName(companyName);
    return true;
  }
};
