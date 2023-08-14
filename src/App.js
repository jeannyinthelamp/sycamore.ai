import React from "react";
import Loggingin from "./Components/Login/Loggingin";
import Signingin from "./Components/Signin/Signingin";
import "./index.css";

export default function App() {
    return (
        <div>
            <Loggingin />
            <Signingin />
        </div>
    );
}
