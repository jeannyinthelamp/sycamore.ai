import React from "react";
import smart_people_left from "../../../Assets/Images/landing-waitlist-img-1.svg";
import smart_people_right from "../../../Assets/Images/landing-waitlist-img-2.svg";

export default function Waitlist() {
  return (
    <section className='waitlist-outer-wrapper w-screen h-auto flex justify-center items-center bg-[#FFF]'>
      <div className='waitlist-inner-wrapper relative w-[1440px] h-[800px] flex justify-center items-center'>
        <div className='image-wrapper relative w-auto h-auto z-0'>
          {/* //* images here */}
          <img
            //
            src={smart_people_left}
            alt='floating business man'
            className='absolute z-[-1] top-[4%] left-[-56.3%] '
          />
          <img
            //
            src={smart_people_right}
            alt='artist painting'
            className='absolute z-[-1] bottom-[5%] right-[-43%]'
          />
          <div className='waitlist-card-wrapper z-10 w-[500px] h-auto flex flex-col justify-start items-center p-[50px] bg-white border border-solid border-[#CED4DA] rounded-[8px]'>
            <div className='waitlist-card-text-wrapper w-[298px] h-auto flex flex-col gap-[16px] items-center'>
              <h1 className='font-[Poppins] text-[28px] font-semibold leading-[42px]'>
                Join our Waitlist
              </h1>
              <p className='font-[Inter] text-[14px] text-[#212529] font-normal leading-[21px] text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
            {/* //* form */}
            <form className='waitlist-form-wrapper mt-[32px] flex flex-col justify-start items-center'>
              <div className='first-last-names-wrapper flex flex-row'>
                <label className='flex flex-col font-[Inter] text-[#6C757D] text-[14px] font-normal leading-[24px]'>
                  First Name
                  <input
                    //
                    type='text'
                    name='first-name'
                    className=' w-[191px] h-auto mt-[8px] mr-[17px] py-[10px] px-[16px] text-[#212529] outline outline-1 outline-[#CED4DA] rounded-[8px]'
                  />
                </label>
                <label className='flex flex-col font-[Inter] text-[#6C757D] text-[14px] font-normal leading-[24px]'>
                  Last Name
                  <input
                    //
                    type='text'
                    name='last-name'
                    className='w-[191px] h-auto mt-[8px] py-[10px] px-[16px] text-[#212529] outline outline-1 outline-[#CED4DA] rounded-[8px]'
                  />
                </label>
              </div>
              {/* //* email & submit button wrapper */}
              <div className='form-email-button-wrapper w-auto h-auto mt-[32px] flex flex-col justify-center items-center'>
                <label className='flex flex-col font-[Inter] text-[#6C757D] text-[14px] font-normal leading-[24px]'>
                  Email
                  <input
                    //
                    type='email'
                    name='email'
                    required
                    className=' w-[400px] h-auto mt-[8px] py-[10px] px-[16px] text-[#212529]  outline outline-1 outline-[#CED4DA] rounded-[8px]'
                  />
                </label>

                <div className='toggle-wrapper mt-[33.5px] w-[100%] flex flex-row justify-start items-start '>
                  {/* //* Build Toggle Switch here */}
                </div>

                <input
                  type='submit'
                  value='Join Waitlist'
                  className='w-[400px] mt-[32px] py-[12px] px-[24px] flex justify-center items-center bg-[#556AEB] rounded-lg font-[Poppins] text-[#FFF] text-center text-[16px] font-medium leading-[24px] outline-none border-none cursor-pointer'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
