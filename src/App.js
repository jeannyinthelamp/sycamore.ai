import React from "react";
import { Route, Routes } from "react-router-dom";

import Loggingin from "./Pages/Login/Loggingin";
import Signup from "./Pages/Signup/Signup";
import Signup2 from "./Pages/Signup2/Signup2";
import Onboarding_1 from "./Pages/Onboarding/Onboarding_1";
import Onboarding_3 from "./Pages/Onboarding/Onboarding_3";
import Onboarding_5 from "./Pages/Onboarding/Onboarding_5";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Loggingin />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/sign-up-2' element={<Signup2 />} />
      <Route path='/onboarding_1' element={<Onboarding_1 />} />
      <Route path='/onboarding_3' element={<Onboarding_3 />} />
      <Route path='/onboarding_5' element={<Onboarding_5 />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
