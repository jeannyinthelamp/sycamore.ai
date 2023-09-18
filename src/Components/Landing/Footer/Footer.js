import React from "react";
import { Link } from "react-router-dom";
import syne_logo from "../../../Assets/Icons/syne-logo.svg";

export default function Footer() {
  return (
    <footer
      className=' desktop:h-[369px] flex flex-col  items-center  bg-[#212529]
    
     tablet:w-[100%] tablet:h-[348.67px]

     mobile:w-[100%] mobile:h-[588.67px]
    '
    >
      {/* //& Footer top section  */}
      <div
        className='footer-top-section w-[100%] desktop:max-w-[1440px] flex justify-center items-center desktop:gap-[10px] desktop:pt-[100px] desktop:px-[165px]
      
      tablet:max-w-[100%] tablet:flex-row tablet:justify-center tablet:items-center tablet:pt-[64px] tablet:px-[28px]

      mobile:max-w-[100%] mobile:flex-col mobile:justify-center mobile:items-start mobile:pt-[64px] mobile:px-[28px]
      '
      >
        {/* Wrapper for logo and links */}
        <div
          className='logo-links-wrapper w-[100%] pb-[42px] flex flex-1 justify-between items-center self-stretch border-b border-solid desktop:border-[#495057]
        
        tablet:border-[#FFF] tablet:pb-[21.66px]

        mobile:flex-col
        '
        >
          {/* wrapper for logo and message (message on tablet)*/}
          <div className='tablet:flex tablet:flex-col tablet:gap-[14px]'>
            <div className='flex flex-row items-center gap-[14px] w-[110px] h-[46.7px]'>
              <img
                //
                className='w-auto h-auto'
                src={syne_logo}
                alt='Syne Logo'
              />
              <p className='font-Poppins text-[20px] text-[#F8F9FA] font-normal not-italic leading-[30px]'>
                Syne
              </p>
            </div>
            <p
              className='desktop:hidden
            
            tablet:max-w-[301px] tablet:font-Poppins tablet:font-normal tablet:text-[16px] text-[#F8F9FA] tablet:leading-[24px]
            
            mobile:mt-[14px] mobile:mb-[24px]
            '
            >
              Syne is a project management tool that creates one centralized hub
              tool workflow for all projects.
            </p>
          </div>
          {/*  Wrapper for top links */}
          <div
            className='flex desktop:flex-row desktop:items-start desktop:gap-[54px] font-Poppins text-[#F8F9FA] text-[16px] font-normal leading-normal
          
           tablet:flex-col tablet:ml-[24px] tablet:gap-[12px] tablet:text-[#909294]

          mobile:w-[100%] mobile:flex-col mobile:justify-start mobile:items-start mobile:gap-[12px] mobile:text-[#909294]

          '
          >
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
      <div
        className='footer-bottom-section w-[100%] max-w-[1440px] flex flex-col justify-center items-start pt-[42px] px-[165px] pb-[114px] 
      
      tablet:max-w-[100%] tablet:flex-row tablet:justify-center tablet:items-center tablet:pt-[40.34px] tablet:px-[28px]

      mobile:max-w-[100%] mobile:flex-col mobile:justify-start mobile:items-start mobile:pt-[32px] mobile:pl-[28px] mobile:pr-[32px] mobile:pb-[64px]
      '
      >
        {/* Wrapper for copyright and links */}
        <div className='copyright-links-wrapper w-[100%] flex justify-between items-center self-stretch font-Poppins text-[#F8F9FA] text-[16px] font-medium leading-[21px] mobile:flex-col-reverse mobile:justify-start mobile:items-start '>
          <p className='desktop:text-[14px] tablet:text-[16px]'>
            @2023 CR8T Studio. All Rights Reserved.
          </p>
          {/*  Wrapper for bottom links */}
          <div className='flex items-start desktop:gap-[54px] font-Poppins text-[#ADB5BD] text-[16px]  leading-normal tablet:gap-[12px] tablet:ml-[12px] mobile:flex-col mobile:gap-[12px]'>
            <Link to='' className='text-center '>
              Privacy Policy
            </Link>
            <Link to='' className='text-center'>
              Cookie Settings
            </Link>
            <Link to='' className='text-center mobile:mb-[24px]'>
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
