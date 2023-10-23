import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./Pages/Landing/Landing";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Signup2 from "./Pages/Signup2/Signup2";
import Onboarding_1 from "./Pages/Onboarding/Onboarding_1";
import Onboarding_2 from "./Pages/Onboarding/Onboarding_2";
import Onboarding_3 from "./Pages/Onboarding/Onboarding_3";
import Onboarding_4 from "./Pages/Onboarding/Onboarding_4";
import Onboarding_5 from "./Pages/Onboarding/Onboarding_5";
import Onboarding_6 from "./Pages/Onboarding/Onboarding_6";
import Onboarding_7 from "./Pages/Onboarding/Onboarding_7";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ForgotPassword2 from "./Pages/ForgotPassword/ForgotPassword2";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/sign-up-2' element={<Signup2 />} />
      <Route path='/onboarding_1' element={<Onboarding_1 />} />
      <Route path='/onboarding_2' element={<Onboarding_2 />} />
      <Route path='/onboarding_3' element={<Onboarding_3 />} />
      <Route path='/onboarding_4' element={<Onboarding_4 />} />
      <Route path='/onboarding_5' element={<Onboarding_5 />} />
      <Route path='/onboarding_6' element={<Onboarding_6 />} />
      <Route path='/onboarding_7' element={<Onboarding_7 />} />
      <Route path='/onboarding_7' element={<Onboarding_7 />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/forgot-password-2' element={<ForgotPassword2 />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
