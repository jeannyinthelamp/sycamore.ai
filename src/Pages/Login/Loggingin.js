import React from "react";
import { Link } from "react-router-dom";
import ButtonSmall from "../../Components/ButtonSmall/ButtonSmall/ButtonSmall";

const Loggingin = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='flex flex-col  p-[40px] w-[363px] h-auto   border-solid border border-black '>
        <img
          //
          className='mb-5'
          src=''
          alt=''
        />
        <h1 className=' mb-5 h-[40px] font-Rubik text-black font-normal text-[34px] pb-[20px] leading-normal justify-center items-center flex'>
          Login
        </h1>
        <form>
          <label
            //
            className='pb-[20px]'
          >
            <input
              type='email'
              required
              name='email address'
              placeholder='Email Address'
              className='w-[283px] h-[44px] mb-5 px-4 border-solid border-2 placeholder-base-black font-Rubik border-base-black'
            />
          </label>
          <label
            //
            className=''
          >
            <input
              type='password'
              required
              name='password'
              placeholder='Password'
              className='w-[283px] h-[44px] mb-5  px-4 border-solid border-2 font-Rubik placeholder-base-black border-base-black'
            />
          </label>
        </form>
        <span className='mb-5'>
          <Link className='text-left text-sm' to=''>
            Forgot Password?
          </Link>
        </span>
        <ButtonSmall
          className=''
          btnText='Login'
          onClick={() => {
            console.log("Login button pressed");
          }}
        />
        {/* Horizontal Line between buttons */}
        <div className='w-[283px] mb-5  border-[2px] border-black rounded-full'></div>
        <ButtonSmall
          className=''
          btnText='Continue with Google'
          onClick={() => {
            console.log("Continue with Google btn pressed");
          }}
        />
        <div className=''>
          {/* Update font family tyo Rubik */}
          <p className='font-Rubik font-normal text-sm flex justify-center items-center'>
            Don't have an Account?{" "}
            <Link
              to='/sign-up'
              className='pl-1 font-Rubik cursor-pointer underline'
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loggingin;
