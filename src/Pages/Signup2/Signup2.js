import React from "react";
import { useState } from "react";
import ButtonSmall from "../../Components/ButtonSmall/ButtonSmall";
import checkbox from "../../Assets/Icons/checkbox.svg";
import check_icon from "../../Assets/Icons/check-icon.svg";

export default function Signup() {
  const [checked, setChecked] = useState(false);

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center p-[40px] w-[363px] h-auto   border-solid border border-black '>
        {/* Import Logo once UI team creates it */}
        <img
          //
          //   className='mb-5'
          src=''
          alt=''
        />
        <h1 className=' mb-5 h-[40px] font-Rubik text-black font-normal text-[34px] leading-normal'>
          Sign Up
        </h1>
        <form>
          <label
            //
            htmlFor='create-password'
            className='font-Rubik text-sm text-base-black placeholder-base-black leading-[16.59px] font-normal'
          >
            <input
              type='password'
              name='create-password'
              placeholder='Create Password'
              className='w-[283px] h-[44px] mb-5 px-4 border-solid border-2 placeholder-base-black font-Rubik border-base-black'
            />
          </label>
          <label
            //
            htmlFor='confirm-password'
            className='font-Rubik text-base-black text-sm placeholder-base-black leading-[16.59px] font-normal'
          >
            <input
              type='password'
              name='confirm-password'
              placeholder='Confirm Password'
              className='w-[283px] h-[44px] mb-5  px-4 border-solid border-2 font-Rubik placeholder-base-black border-base-black'
            />
          </label>
          <div className='relative w-[283px] h-[44px] flex flex-row justify-start items-center border-solid '>
            {/* On click the checkbox SVG will show the check_icon */}
            <img
              src={checkbox}
              alt='check box'
              className='w-[25.68px] h-[18.38px] mb-5 pr-2 cursor-pointer'
              onClick={() => {
                setChecked(!checked);
              }}
            />

            {/* On click the check_icon SVG will hide its self by adding the className 'hidden' */}
            <img
              src={check_icon}
              alt='check mark'
              className={`w-[8.8px] h-[9.29px] absolute top-[7px] left-[4px] cursor-pointer ${
                checked ? "" : "hidden"
              }`}
              onClick={() => {
                setChecked(!checked);
              }}
            />
            <label
              //
              htmlFor='agreement'
              className='mb-5 font-Gloria text-[14.71px] text-base-black '
            >
              {" "}
              agreement
            </label>
          </div>
        </form>
        <ButtonSmall
          //overwrite ButtonSmall margin bottom with className 'mb-[0]'
          className='mb-[0]'
          btnText='Create Account'
          onClick={() => {
            console.log("Create Account btn pressed");
          }}
        />
      </div>
    </div>
  );
}
