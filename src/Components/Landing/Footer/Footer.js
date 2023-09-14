import React from "react";
import { Link } from "react-router-dom";
import syne_logo from "../../../Assets/Icons/syne-logo.svg";

export default function Footer() {
  return (
    <footer className=' h-[369px] flex flex-col  items-center  bg-[#212529]'>
      {/* //& Footer top section  */}
      <div className='footer-top-section w-[100%] max-w-[1440px] flex flex-col justify-center items-center gap-[10px] pt-[100px] px-[165px]'>
        {/* Wrapper for logo and links */}
        <div className='logo-links-wrapper w-[100%] pb-[42px] flex flex-1 justify-between items-center self-stretch border-b border-solid border-[#495057]'>
          {/* wrapper for logo */}
          <div className='flex items-center gap-[14px] w-[110px] h-[46.7px]'>
            <img
              //
              className='w-auto h-auto'
              src={syne_logo}
              alt='Syne Logo'
            />
            <p className='font-Poppins text-[20px] text-[#F8F9FA] font-normal not-italic leading-normal'>
              Syne
            </p>
          </div>
          {/*  Wrapper for top links */}
          <div className='flex items-start gap-[54px] font-Inter text-[#F8F9FA] text-[16px] font-normal leading-normal'>
            <Link to='' className=''>
              Features
            </Link>
            <Link to='' className=''>
              About Us
            </Link>
            <Link to='' className=''>
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* //& Middle divider */}
      {/* <div className='w-[1110px] max-w-[1110px]  border border-solid border-[#495057]'></div> */}

      {/* //& Footer bottom section */}
      <div className='footer-bottom-section w-[100%] max-w-[1440px] flex flex-col justify-center items-start pt-[42px] px-[165px] pb-[114px] '>
        {/* Wrapper for copyright and links */}
        <div className='copyright-links-wrapper w-[100%] flex justify-between items-center self-stretch font-Inter text-[#F8F9FA] text-[16px] font-medium leading-[24px] '>
          <p className='text-[16px]'>@2023 CR8T Studio. All Rights Reserved.</p>
          {/*  Wrapper for bottom links */}
          <div className='flex items-start gap-[54px] font-Inter text-[#ADB5BD] text-[16px] font-normal leading-normal'>
            <Link to='' className=''>
              Privacy Policy
            </Link>
            <Link to='' className=''>
              Cookie Settings
            </Link>
            <Link to='' className=''>
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
