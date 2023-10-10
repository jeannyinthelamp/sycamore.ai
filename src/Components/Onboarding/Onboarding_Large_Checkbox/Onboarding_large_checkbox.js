import React, { useState } from "react";

export default function Onboarding_Checkbox(props) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleLabelClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="flex">
            <input
                type="checkbox"
                id={props.id}
                className="peer hidden"
                onClick={(e) => {
                    console.log(e.target.id + " checkbox pressed");
                }}
            />
            <label
                htmlFor={props.for}
                className={`${props.className} flex items-center w-[364px] min-w-[420px] max-h-[100px] py-[26px] px-[20px] font-Poppins font-medium text-[16+8px] text-center leading-[28px] text-[#212529] select-none cursor-pointer rounded-[8px] bg-white border border-[#6C757D] transition-colors duration-200 ease-in-out peer-checked:bg-[#EBEFFF] peer-checked:text-[#556AEB] peer-checked:border-[#556AEB]`}
                onClick={handleLabelClick}
            >
                <div className="flex flex-row items-center justify-between w-[368px]">
                    <div className="flex items-center">
                        <div
                            className={`p-3 rounded-md ${
                                isChecked ? "bg-[#B9C4FF]" : ""
                            }`}
                        >
                            {props.img}
                        </div>
                        <div className="p-2">{props.title}</div>
                    </div>
                    <input
                        type="checkbox"
                        value=""
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-purple-300 dark:focus:ring-purple-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring !important"
                        onChange={handleCheckboxChange}
                        checked={isChecked}
                    />
                </div>
            </label>
        </div>
    );
}
