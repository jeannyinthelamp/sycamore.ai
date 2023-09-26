import React from "react";
import { Switch } from "@material-tailwind/react";
import smart_people_left from "../../../Assets/Images/landing-waitlist-img-1.svg";
import smart_people_right from "../../../Assets/Images/landing-waitlist-img-2.svg";
import { btn_styles } from "../../Styles/Button_Styles";
import { safari_input_styling } from "../../Styles/Safari_Input_Styling";

export default function Waitlist() {
  // Safari has an issue where its difficult to change input border-radius. This function detects a users browser, then injects classNames into create an outline
  function detectBrowser() {
    if (navigator.userAgent.includes("Safari")) {
      return safari_input_styling;
    }
  }

  return (
    <section
      className='waitlist-outer-wrapper desktop:max-w-[100%] h-auto flex justify-center items-center bg-[#FFF]
    
    tablet:max-w-[834px] tablet:max-h-[786px]
    
    '
    >
      <div
        className='waitlist-inner-wrapper relative desktop:w-[1440px] h-[800px] flex justify-center items-center
      
        tablet:max-w-[100%]
        mobile:max-w-[100%]
      '
      >
        <div
          className='image-wrapper relative w-[100%] desktop:max-w-[500px] desktop:h-[552px] z-0
        
        tablet:max-w-[519px] 
        mobile:max-w-[338px] 
        '
        >
          {/* //* images here */}
          <img
            //
            src={smart_people_left}
            alt='floating business man'
            className='absolute z-[-1] desktop:top-[4%] desktop:left-[-56%] 
            
            tablet:w-[70%] tablet:top-[-15%] tablet:left-[-40%]

            mobile:w-[70%] mobile:top-[-15%] mobile:left-[12%]
            '
          />
          <img
            //
            src={smart_people_right}
            alt='artist painting'
            className='absolute z-[-1] desktop:bottom-[5%] desktop:right-[-43%]
            
            tablet:w-[32%] tablet:bottom-[-3%] tablet:right-[-24.5%]

            mobile:hidden
            '
          />
          <div
            className='waitlist-card-wrapper z-10 max-w-[519px] mx-[8px] desktop:max-w-[500px] desktop:h-[552px] flex flex-col desktop:justify-start items-center desktop:p-[50px] bg-white border border-solid border-[#CED4DA] rounded-[20px]
          
           tablet:max-w-[519px] tablet:h-[699px] tablet:justify-start tablet:py-[50px] tablet:px-[16px]

           mobile:max-w-[338px] mobile:h-fit mobile:py-[50px] mobile:px-[16px]
          '
          >
            <div
              className='waitlist-card-text-wrapper desktop:max-w-[298px] h-auto flex flex-col gap-[16px] items-center
            
            tablet:max-w-[317px]

            mobile:max-w-[298px]
            '
            >
              <h1
                className='font-Poppins desktop:text-[28px] font-semibold leading-[40px] text-center
              
              tablet:text-[38px] tablet:leading-[51px]

              mobile:text-[28px] mobile:leading-[40px]
              '
              >
                Join our Waitlist
              </h1>
              <p
                className='font-Poppins desktop:text-[14px] text-[#212529] font-normal desktop:leading-[21px] text-center
              
                tablet:w-[95%] tablet:text-[18px] tablet:leading-[27px]

                mobile:w-[97%] mobile:text-[16px] mobile:leading-[24px]
              '
              >
                Join the waitlist for exclusive access to Syne. Don't miss out
                on this free tool that will make your workflow easier!
              </p>
            </div>
            {/* //* form */}
            <form
              className='waitlist-form-wrapper desktop:w-auto mt-[32px] flex flex-col justify-start items-center
            
            tablet:max-w-[100%] tablet:w-[487px]

            mobile:max-w-[100%] mobile:w-[306px]
            '
            >
              <div
                className='first-last-names-wrapper w-[100%] flex desktop:flex-row
              
              tablet:flex-col tablet:gap-[14px] 

              mobile:flex-col mobile:gap-[14px] 
              '
              >
                <label
                  className='flex flex-col font-Poppins text-[#6C757D] text-[14px] font-normal leading-[21px]
                '
                >
                  First Name
                  <input
                    //
                    type='text'
                    name='first-name'
                    className={`${detectBrowser()} desktop:w-[191px] h-auto mt-[8px] mr-[17px] py-[10px] px-[16px] font-Inter text-[#212529] outline outline-1 outline-[#CED4DA] rounded-lg shadow-[0_2px_2px_0_rgba(33,37,41,0.08)]
                    
                    tablet:w-[100%]

                    mobile:w-[100%]
                    `}
                  />
                </label>
                <label className='flex flex-col font-Poppins text-[#6C757D] text-[14px] font-normal leading-[21px]'>
                  Last Name
                  <input
                    //
                    type='text'
                    name='last-name'
                    className={`${detectBrowser()} w-[191px] h-auto mt-[8px] py-[10px] px-[16px] font-Inter text-[#212529] outline outline-1 outline-[#CED4DA] rounded-lg shadow-[0_2px_2px_0_rgba(33,37,41,0.08)]
                    
                    tablet:w-[100%]

                    mobile:w-[100%]

                    `}
                  />
                </label>
              </div>
              {/* //* email & submit button wrapper */}
              <div
                className='form-email-button-wrapper desktop:w-[100%] h-auto desktop:mt-[32px] flex flex-col desktop:justify-center desktop:items-center
              
              tablet:w-[100%] tablet:justify-center tablet:items-start tablet:mt-[14px]

              mobile:w-[100%] mobile:mt-[14px]
              '
              >
                <label
                  className='flex flex-col font-Poppins text-[#6C757D] text-[14px] font-normal leading-[21px]
                
                tablet:w-[100%]
                mobile:w-[100%]
                '
                >
                  Email
                  <input
                    //
                    type='email'
                    name='email'
                    required
                    className={`${detectBrowser()} desktop:w-[400px] h-auto mt-[8px] py-[10px] px-[16px] font-Inter text-[#212529] outline outline-1 outline-[#CED4DA] rounded-lg shadow-[0_2px_2px_0_rgba(33,37,41,0.08)]
                    
                    tablet:w-[100%]

                    mobile:w-[100%]
                    `}
                  />
                </label>

                <div
                  className='toggle-wrapper mt-[33.5px] w-[100%] flex flex-row desktop:justify-start desktop:items-center 
                
                tablet:justify-center tablet:items-center
                mobile:justify-center mobile:items-center
                '
                >
                  {/* //* Build Toggle Switch here */}
                  <Switch
                    id='custom-switch-component'
                    ripple={false}
                    // defaultChecked='false'
                    className='h-full w-full checked:bg-[#556AEB]'
                    containerProps={{
                      className: "w-11 h-6",
                    }}
                    circleProps={{
                      className: "before:hidden left-0.5 border-none",
                    }}
                  />
                  <p className='ml-[16px] font-Poppins text-[#495057] text-[14px] font-normal leading-[21px]'>
                    Receive latest news and updates
                  </p>
                </div>

                <input
                  type='submit'
                  value='Join Waitlist'
                  className={`${btn_styles.btn_blue_hover} ${btn_styles.btn_blue_active} desktop:w-[400px] mt-[32px] py-[12px] px-[24px] flex justify-center items-center bg-[#556AEB] rounded-lg font-Poppins text-[#FFF] text-center text-[16px] font-medium leading-[24px] outline-none border-none cursor-pointer ${btn_styles.focus}
                  
                  tablet:w-[146px] tablet:mx-auto

                  mobile:w-[146px] mobile:mx-auto
                  `}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
