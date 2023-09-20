import React from "react";

//TODO: The individual cards height is locked, either make it grow, or shrink the image on window resize

export default function FeaturesCard(props) {
  return (
    <div
      //! Removed max width from card wrapper and used regular width. Now all cards are the same width when resizing
      className='card-wrapper flex desktop:w-[334.67px] desktop:h-fit desktop:py-[32px] desktop:pl-[32px] desktop:pr-[36.67px] border border-solid border-[#556AEB] rounded-[20px]
      
    tablet:max-w-[246px] tablet:h-[593.3px]
    '
    >
      {/* TODO: added a height to inner wrapper, that made the images behave correctly */}
      <div className='card-inner-wrapper h-[436px] flex flex-col justify-start items-start'>
        <div className='w-[48px] h-[48px] mb-[16px] py-[12px] px-[24px flex justify-center items-center bg-[#212529] rounded-[8px] font-Inter text-white text-base font-semibold leading-[24px]'>
          {props.number}
        </div>
        <h1
          className='mb-[16px] font-Poppins text-[24px] font-semibold leading-[36px] text-[#212529]
        
        tablet:leading-[30px]
        '
        >
          {props.title}
        </h1>
        <p
          className='desktop:w-[104.5%] desktop:h-[72px] mb-[20px] font-Poppins desktop:text-[16px] font-normal desktop:leading-[24px] text-[#495057]
        
        tablet:text-[18px] tablet:leading-[27px]
        '
        >
          {props.text}
        </p>
        <div className='image-wrapper w-[100%] h-[100%] flex justify-end items-center'>
          <img
            //
            className={`${props.className} border border-teal-500`}
            src={props.image}
            alt={props.alt}
          />
        </div>
      </div>
    </div>
  );
}
