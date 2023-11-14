import React from "react";
import { useState, useEffect } from "react";

import card1_desktop from "../../../Assets/Images/Landing/Features/card1_desktop.svg";
import card1_tablet from "../../../Assets/Images/Landing/Features/card1_tablet.svg";
import card1_mobile from "../../../Assets/Images/Landing/Features/card1_mobile.svg";

import card2_desktop from "../../../Assets/Images/Landing/Features/card2_desktop.svg";
import card2_tablet from "../../../Assets/Images/Landing/Features/card2_tablet.svg";
import card2_mobile from "../../../Assets/Images/Landing/Features/card2_mobile.svg";

import card3_desktop from "../../../Assets/Images/Landing/Features/card3_desktop.svg";
import card3_tablet from "../../../Assets/Images/Landing/Features/card3_tablet.svg";
import card3_mobile from "../../../Assets/Images/Landing/Features/card3_mobile.svg";

import playcircle from "../../../Assets/Images/play_circle.svg";

const Features = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // on window resize, set the windowWidth state variable so the feature cards display correctly
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  //refactor displayCards to map over an object of data
  const displayCards = () => {
    if (windowWidth >= "835") {
      //display desktop SVG's
      return (
        <>
          {/* //! add alt attributes */}
          <img src={card1_desktop} alt='' className='desktop:max-w-[33%]' />
          <img src={card2_desktop} alt='' className='desktop:max-w-[33%]' />
          <img src={card3_desktop} alt='' className='desktop:max-w-[33%]' />
        </>
      );
    } else if (windowWidth >= "376" && windowWidth <= "834") {
      //display tablet SVG's
      return (
        <>
          {/* //! add alt attributes */}
          <img src={card1_tablet} alt='' />
          <img src={card2_tablet} alt='' />
          <img src={card3_tablet} alt='' />
        </>
      );
    } else if (windowWidth <= "375") {
      //display mobile SVG's
      return (
        <>
          {/* //! add alt attributes */}
          <img src={card1_mobile} alt='' />
          <img src={card2_mobile} alt='' />
          <img src={card3_mobile} alt='' />
        </>
      );
    }
  };

  return (
    <div
      className='features-outer-wrapper desktop:max-w-[1440px] h-auto mx-auto flex flex-col justify-center items-center bg-[#FFF] 
    
    tablet:max-w-[834px]

    mobile:max-w-[375px] 
    '
    >
      <div
        className='features-inner-wrapper desktop:max-w-[90.6%] items-center
      
      tablet:max-w-[94.5%]

      mobile:max-w-[94.5%] 
      '
      >
        <div
          className='features-text-wrapper desktop:w-[100%] mt-[126px] flex flex-col
        
         tablet:w-[100%] tablet:mt-[64px] tablet:mb-[48px]

         mobile:w-[100%] mobile:mt-[64px] mobile:mb-[24px]
        '
        >
          <h2
            className='mb-[24px] font-Poppins font-semibold text-[24px] text-[#556AEB] leading-[36px] tracking-[0.4px] 
          
          tablet:max-w-[100%] tablet:leading-[30px]

          mobile:max-w-[100%] mobile:text-[20px] mobile:leading-[30px]

          '
          >
            Features
          </h2>
          <h1
            className='desktop:w-[571px] font-Poppins font-semibold text-[40px] text-[#212529] leading-[54px]
          
          tablet:w-[100%] tablet:text-[38px] tablet:leading-[51px]

          mobile:w-[100%] mobile:text-[28px] mobile:leading-[40px]
          '
          >
            Syne Empowers Your Workflow and Productivity
          </h1>
        </div>
        {/* //* Wrapper for the Features Card SVG's */}
        <div
          className='desktop:max-w-[100%] desktop:h-auto mt-[109px] mb-[138px] flex flex-row desktop:justify-center desktop:items-center  gap-[35px] 

            tablet:max-w-[786px] tablet:gap-[24px] tablet:flex-col tablet:mt-[0px]

            mobile:max-w-[338px] mobile:gap-[24px] mobile:flex-col mobile:mt-[0px] '
        >
          {/* //^ Display feature cards here */}
          {displayCards()}
        </div>

        {/* //& Wrapper for the Video section */}

        <div
          className='desktop:py-[126px] desktop:px-[168px] flex justify-center items-center
        
        tablet:py-16 tablet:px-6  tablet:h-[682px]

           mobile:py-16 mobile:px-6  mobile:h-[682px]
        
       '
        >
          <div
            className='p-16
                    
                    '
          >
            <div className='flex items-center rounded-lg relative border-black border-[24px]'>
              <iframe
                src='https://www.youtube.com/embed/1BxhpPpotdA'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
                className='w-[900px] h-[618px]
                                
                                tablet:w-[100%] tablet:h-[490px]

                                mobile:w-[100%] mobile:h-[490px]
                                
                              '
              ></iframe>

              <div
                className='absolute bottom-[60px] left-0 right-0 flex flex-col z-10 px-3
                            

                                
                             '
              >
                <div className='flex justify-start'>
                  {" "}
                  <button
                    className='flex justify-center items-center px-3 py-[6px] rounded-3xl w-[98px] h-9 bg-[#556AEB] text-[#F8F9FA] font-Poppins text-[24px] font-semibold mb-6 tracking-[0.4px] leading-[36px]

                                        mobile:gap-6
                                    
                                    '
                  >
                    Demo
                  </button>
                </div>

                <div className='flex items-center justify-between'>
                  <h1
                    className='font-Poppins text-white text-[40px] leading-[54px] font-semibold desktop:w-[440px] desktop:h-[130px]
                                    
                                    tablet:w-[100%]] tablet:h-[154px] tablet:gap-4

                                    mobile:w-[100%] mobile:h-[120px] mobile:text-[28px] mobile:leading-10

                                    '
                  >
                    All You Need to Know About Syne
                  </h1>
                  <img
                    src={playcircle}
                    alt='play circle'
                    className='w-[130px] h-[130px]'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
