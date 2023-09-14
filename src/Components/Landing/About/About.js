import React from "react";
import { Link } from "react-router-dom";
import people from "../../../Assets/Images/about-people.svg";
import { btn_styles } from "../../Styles/Button_Styles";

export default function About() {
  return (
    <section className='about-outer-wrapper  h-auto flex flex-col items-center gap-[10px] py-[80px] px-[168px] bg-[#FAFAFF]'>
      <div className='w-[100%] max-w-[1110px] about-inner-wrapper flex flex-row justify-between items-center '>
        <div className='about-text-wrapper w-[571px] my-[25.02px] flex flex-col items-start self-stretch'>
          <h1 className=' mb-[24px] font-Poppins text-[#212529] text-[40px] font-semibold leading-[60px]'>
            About Us
          </h1>
          <p className='mb-[32px] font-Inter text-sm font-normal leading-[21px] text-[#212529]'>
            Syne is a project management tool created by CR8T Studio. Started
            with passion for wanting to centralize multiple projects and tools
            in one platform but not finding any other platform satisfying to
            work with, Syne was born.
          </p>

          <div className='button-wrapper flex flex-row'>
            {/* //^ add destination to the 'to' attribute */}
            <Link to='' className='mr-[24px]'>
              <button
                className={`${btn_styles.btn_blue_hover} ${btn_styles.btn_blue_active} py-[12px] px-[24px] flex justify-center items-center bg-[#556AEB] rounded-lg font-Poppins text-white text-center text-[16px] font-medium leading-[24px] outline-none border-none ${btn_styles.focus}`}
              >
                Learn More
              </button>
            </Link>
            {/* //^ add destination to the 'to' attribute */}
            <Link to='' className='mr-[24px]'>
              <button
                className={`${btn_styles.btn_white_hover} ${btn_styles.btn_white_active} py-[12px] px-[24px] flex justify-center items-center bg-[#FAFAFF] rounded-lg font-Poppins text-[#556AEB] text-center text-[16px] font-medium leading-[24px] outline-none border border-solid border-[#556AEB] ${btn_styles.focus}`}
              >
                See Updates
              </button>
            </Link>
          </div>
        </div>
        <div className='about-img-wrapper w-[455px] h-[197px] p-[40px] flex justify-center items-center'>
          <img
            //
            src={people}
            alt='Business people'
            className='w-[200px] h-[197px]'
          />
        </div>
      </div>
    </section>
  );
}
