import React from "react";

//TODO: The individual cards height is locked, either make it grow, or shrink the image on window resize

export default function FeaturesCard(props) {
  return (
    <div
      //! Removed max width from card wrapper and used regular width. Now all cards are the same width when resizing
      className='card-wrapper flex desktop:w-[334.67px] desktop:h-fit desktop:py-[32px] desktop:pl-[32px] desktop:pr-[36.67px] border border-solid border-[#556AEB] rounded-[20px]
      
    tablet:max-w-[786px] tablet:h-[301.3px] tablet:py-[32px] tablet:px-[32px] 

    mobile:max-w-[338px] mobile:h-[500px] mobile:py-[32px] mobile:px-[32px]
    '
    >
      {/* TODO: added a height to inner wrapper, that made the images behave correctly */}
      <div
        className='card-inner-wrapper desktop:h-[436px] flex flex-col justify-start items-start
      
      tablet:h-[237.3px] tablet:flex-row tablet:justify-between tablet:items-center

      mobile:h-[436px] mobile:flex-col mobile:justify-between mobile:items-start
      '
      >
        <div
          className='number-title-text-wrapper desktop:w-[100%] h-auto mb-[20px] flex-col 
        
        tablet:w-[74%]
        
        mobile:w-[100%]'
        >
          <div className='w-[48px] h-[48px] mb-[16px] py-[12px] px-[24px flex justify-center items-center bg-[#212529] rounded-[8px] font-Inter text-white text-base font-semibold leading-[24px]'>
            {props.number}
          </div>
          <h1
            className='mb-[16px] font-Poppins text-[24px] font-semibold leading-[36px] text-[#212529]
        
        tablet:w-[70%] tablet:leading-[30px]

        mobile:w-[100%] mobile:text-[20px] mobile:leading-[30px]
        '
          >
            {props.title}
          </h1>
          <p
            className='desktop:w-[104.5%] desktop:h-[72px] font-Poppins desktop:text-[16px] font-normal desktop:leading-[24px] text-[#495057]
        
           tablet:text-[18px] tablet:w-[100%] tablet:leading-[27px]

           mobile:text-[16px] mobile:w-[100%] mobile:leading-[24px]
        '
          >
            {props.text}
          </p>
        </div>
        <div
          className='image-wrapper w-[100%] h-[100%] flex justify-end items-center border border-orange-600
        
        tablet:w-[26%]
        '
        >
          <img
            //! display block on image?
            className={`${props.className} border border-red-600`}
            src={props.image}
            alt={props.alt}
          />
        </div>
      </div>
    </div>
  );
}
