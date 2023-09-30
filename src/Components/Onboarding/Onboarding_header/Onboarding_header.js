import React from "react";
import syne_logo from "../../../Assets/Icons/syne-logo.svg";

export default function Onboarding_header() {
    return (
        <div className="header-outer-wrapper w-[100%] h-[72px] flex justify-center items-center">
            <div className="header-inner-wrapper w-[100%] max-w-[1110px] h-[40px] mx-[20px] flex justify-start items-center">
                <img
                    className="w-[30px] h-[30px] mr-[14px]"
                    src={syne_logo}
                    alt="Syne Logo"
                />
                <p className="font-Poppins text-[20px] font-normal leading-[30px] tracking-[-0.266px]">
                    Syne
                </p>
            </div>
        </div>
    );
}
