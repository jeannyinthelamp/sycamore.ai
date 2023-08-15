import React from "react";
import ButtonSmall from "../ButtonSmall/ButtonSmall";
import google from "../../Assets/Icons/google-logo.svg";

export default function Signup() {
  return (
    // delete temporary margin 'm-8' for outermost div
    <div className='m-8 flex flex-col justify-center items-center p-[40px] w-[363px] h-[500px]   border-solid border border-black '>
      <img
        //
        className='mb-4'
        src={google}
        alt='Google Logo'
      />
      <h1 className=' mb-4 font-Rubik text-black font-normal text-[34px]'>
        Sign Up
      </h1>
      <form>
        <label
          //
          className=''
        >
          <input
            type='text'
            name='name'
            placeholder='Name'
            className='w-[283px] h-[44px] mb-4 px-4 border-solid border-2 placeholder-base-black font-Rubik border-base-black'
          />
        </label>
        <input
          type='text'
          placeholder='Email Address'
          className='w-[283px] h-[44px]  px-4 border-solid border-2 font-Rubik placeholder-base-black border-base-black'
        />
      </form>
      <ButtonSmall
        className=''
        btnText='Continue with Email'
        onClick={() => {
          console.log("Continue with email btn pressed");
        }}
      />
      {/* Horizontal Line between buttons */}
      <div className='w-[283px]  border-[1px] border-black rounded-full'></div>
      <ButtonSmall
        className=''
        btnText='Continue with Google'
        onClick={() => {
          console.log("Continue with Google btn pressed");
        }}
      />
      <div className=''>
        {/* Update font family tyo Rubik */}
        <p className='font-Rubik font-normal text-sm'>
          Have an Account?{" "}
          <a href='/' className='font-Rubik cursor-pointer underline'>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
