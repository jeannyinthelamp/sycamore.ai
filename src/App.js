import React from "react";
import { Route, Routes } from "react-router-dom";

import Loggingin from "./Pages/Login/Loggingin";
import Signup from "./Pages/Signup/Signup";
import Signup2 from "./Pages/Signup2/Signup2";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Loggingin />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/sign-up-2' element={<Signup2 />} />
    </Routes>
  );
}
