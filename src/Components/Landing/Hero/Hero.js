import React from "react";
import Graphic from "./Graphic";
import { btn_styles } from "../../Styles/Button_Styles";

const Hero = () => {
  return (
    <div className='bg-[#FAFAFF] font-Poppins'>
      <div className='px-[168px] py-[126px] grid grid-cols-1 lg:grid-cols-2  gap-[142px] h-auto min-h-[880px]'>
        <div className='mt-24'>
          <div className='flex flex-col'>
            <h1 className='text-[40px] leading-[60px] font-semibold mb-6'>
              Project Management, Simplified.
            </h1>
            <p className='mb-8 leading-[27px] font-[18px] '>
              Empowering workflows for students, freelancers,
              <br /> and small businesses.
            </p>
            <form
              action=''
              className='flex flex-col w-[440px] bg-white rounded-lg  border border-solid border-neutral-400 shadow-md'
            >
              {/* <label className='border border-solid'> */}
              <div class='flex items-center justify-between py-2 px-4'>
                <input
                  className='w-[60%] leading-6 text-[16px] placeholder-[#212529] outline-none'
                  type='email'
                  required
                  placeholder='Email Address'
                />
                <input
                  type='submit'
                  value='Join Waitlist'
                  class={`${btn_styles.btn_blue_hover} ${btn_styles.btn_blue_active} w-[146px] h-[48px] px-6 py-3 border-[1px] rounded-lg bg-[#556AEB] text-white cursor-pointer ${btn_styles.focus}`}
                />
              </div>
              {/* </label> */}
            </form>
          </div>
        </div>

        <div>
          <Graphic />
        </div>
      </div>
    </div>
  );
};

export default Hero;
