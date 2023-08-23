import React from "react";
import Loggingin from "./Pages/Login/Loggingin";
import Signup from "./Pages/Signup/Signup";
import Signup2 from "./Pages/Signup2/Signup2";
import "./index.css";

export default function App() {
  return (
    <div>
      <Loggingin />
      <Signup />
      <Signup2 />
    </div>
  );
}
