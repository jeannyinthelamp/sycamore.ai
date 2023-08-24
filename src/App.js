import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./Pages/Landing/Landing";
import Loggingin from "./Pages/Login/Loggingin";
import Signup from "./Pages/Signup/Signup";
import Signup2 from "./Pages/Signup2/Signup2";
import Onboarding_1 from "./Pages/Onboarding/Onboarding_1";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Loggingin />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/sign-up-2' element={<Signup2 />} />
      <Route path='/onboarding_1' element={<Onboarding_1 />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
