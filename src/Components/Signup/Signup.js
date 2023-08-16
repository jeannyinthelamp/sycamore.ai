import React from "react";
import ButtonSmall from "../ButtonSmall/ButtonSmall";

export default function Signup() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center p-[40px] w-[363px] h-auto   border-solid border border-black '>
        <img
          //
          className='mb-5'
          src=''
          alt=''
        />
        <h1 className=' mb-5 h-[40px] font-Rubik text-black font-normal text-[34px] leading-normal'>
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
              className='w-[283px] h-[44px] mb-5 px-4 border-solid border-2 placeholder-base-black font-Rubik border-base-black'
            />
          </label>
          <label
            //
            className=''
          >
            <input
              type='text'
              placeholder='Email Address'
              className='w-[283px] h-[44px] mb-5  px-4 border-solid border-2 font-Rubik placeholder-base-black border-base-black'
            />
          </label>
        </form>
        <ButtonSmall
          className=''
          btnText='Continue with Email'
          onClick={() => {
            console.log("Continue with email btn pressed");
          }}
        />
        {/* Horizontal Line between buttons */}
        <div className='w-[283px] mb-5  border-[1px] border-black rounded-full'></div>
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
    </div>
  );
}
