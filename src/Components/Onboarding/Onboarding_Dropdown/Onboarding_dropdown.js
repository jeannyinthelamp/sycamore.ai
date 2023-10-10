import React from "react";
import Dropdownarrow from "../../../Assets/Icons/dropdownarrow.svg";

export default function Onboarding_Dropdown(props) {
    return (
        <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row w-[224px] gap-2">
                {props.img1}
                <p>{props.title}</p>
                <div className="p-1 items-center flex">{props.img2}</div>
            </div>
            <div className="flex flex-row gap-2 w-[35%] justify-end">
                <p>{props.description}</p>
                <div className="p-1 items-center flex">{props.img3}</div>
            </div>
        </div>
    );
}
