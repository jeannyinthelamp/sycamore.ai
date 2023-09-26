import React from "react";
import { Link } from "react-router-dom";
import people from "../../../Assets/Images/about-people.svg";
import { btn_styles } from "../../Styles/Button_Styles";

export default function About() {
  return (
    <section
      className='about-outer-wrapper max-w-[100%] desktop:min-h-[474px] flex flex-col items-center gap-[10px] desktop:py-[80px] desktop:px-[168px] bg-[#FAFAFF]

      tablet:max-w-[834px] tablet:min-h-[837px] tablet:py-[64px] tablet:px-[24px]

      mobile:max-w-[375px] mobile:min-h-[903.04px] mobile:py-[64px] mobile:px-[19.5px]
    '
    >
      <div
        className='about-inner-wrapper desktop:w-[100%] desktop:max-w-[1110px] flex desktop:flex-row desktop:justify-between desktop:items-center desktop:border-none
        
      tablet:max-w-[786px]  tablet:flex-col tablet:justify-start tablet:items-center 

      mobile:max-w-[100%]  mobile:flex-col mobile:justify-start mobile:items-center 
      '
      >
        <div
          className='about-text-wrapper desktop:w-[571px] desktop:my-[25.02px] flex flex-col items-start self-stretch
        
          tablet:max-w-[786px]

          mobile:max-w-[100%]
        '
        >
          <h2
            className=' desktop:mb-[24px] font-Poppins font-semibold text-[24px] text-[#556AEB] leading-[36px] tracking-[0.4px]
          
          tablet:mb-[16px]

          mobile:mb-[24px]
          '
          >
            About Us
          </h2>
          <h1
            className='desktop:mb-[24px] font-Poppins desktop:font-semibold desktop:text-[40px] text-[#212529] desktop:leading-[54px]
          
          tablet:mb-[16px] tablet:font-medium tablet:text-[38px] tablet:leading-[64px]

          mobile:mb-[24px] mobile:font-semibold mobile:text-[40px] mobile:leading-[54px]
          '
          >
            Who We Are
          </h1>
          <p
            className='desktop:max-w-[571px] mb-[32px] font-Poppins desktop:text-[16px] font-normal leading-[24px] text-[#212529]
          
          tablet:max-w-[96%] tablet:text-[18px] tablet:leading-[28px]

          mobile:max-w-[100%] mobile:text-[16px] mobile:leading-[24px]
          '
          >
            Syne is a project management tool created by CR8T Studio. Started
            with passion for wanting to centralize multiple projects and tools
            in one platform but not finding any other platform satisfying to
            work with, Syne was born.
          </p>

          <div
            className='button-wrapper flex desktop:flex-row desktop:w-[311px]
          
          tablet:flex-col tablet:gap-[24px] tablet:w-[100%] tablet:mb-[64px]

          mobile:flex-col mobile:gap-[24px] mobile:w-[100%] mobile:mb-[64px]
          '
          >
            {/* //^ add destination to the 'to' attribute */}
            <Link to='' className='desktop:mr-[24px]'>
              <button
                className={`${btn_styles.btn_blue_hover} ${btn_styles.btn_blue_active} min-w-[137px] max-h-[48px] py-[12px] px-[24px] flex justify-center items-center bg-[#556AEB] rounded-lg font-Poppins text-white text-center text-[16px] font-medium leading-[24px] outline-none border-none ${btn_styles.focus}
                
                tablet:w-[100%]

                mobile:w-[100%]
                `}
              >
                Learn More
              </button>
            </Link>
            {/* //^ add destination to the 'to' attribute */}
            <Link to='' className='desktop:mr-[24px]'>
              <button
                className={`${btn_styles.btn_white_hover} ${btn_styles.btn_white_active} min-w-[151px] max-h-[48px] py-[12px] px-[24px] flex justify-center items-center flex-nowrap  bg-[#FAFAFF] rounded-lg font-Poppins text-[#556AEB] text-center text-[16px] font-medium leading-[24px] outline-none border border-solid border-[#556AEB] ${btn_styles.focus}
                
                tablet:w-[100%]

                mobile:w-[100%]
                
                `}
              >
                See Updates
              </button>
            </Link>
          </div>
        </div>
        <div
          className='about-img-wrapper w-[455px] h-[197px] p-[40px] flex justify-center items-center
        
        tablet:w-[100%] tablet:h-[276.7px]
        '
        >
          <img
            //
            src={people}
            alt='Business people'
            className='block desktop:min-w-[200px] desktop:h-[197px]
            
            tablet:w-[295px] tablet:h-[276.7px] 
            '
          />
        </div>
      </div>
    </section>
  );
}
