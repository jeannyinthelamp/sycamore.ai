import React from "react";

export default function FeaturesCard(props) {
  return (
    <div
      className={`${props.margin} card-wrapper w-[338px] h-[500px] p-[32px] border border-solid border-[#556AEB] rounded-[20px]`}
    >
      <div className='card-inner-wrapper flex flex-col justify-center items-start'>
        <div className='w-[48px] h-[48px] mb-[18px] py-[12px] px-[24px flex justify-center items-center bg-[#212529] rounded-[8px] font-[Inter] text-white text-base font-semibold leading-[24px]'>
          {props.number}
        </div>
        <h1 className='mb-[18px] font-[Poppins] text-[24px] font-semibold leading-[36px] text-[#212529]'>
          {props.title}
        </h1>
        <p className='mb-[19px] font-[Inter] text-[16px] font-normal leading-[24px] text-[#212529]'>
          {props.text}
        </p>
        <div className='image-wrapper w-[100%] flex justify-end items-center'>
          <img
            //
            className=''
            src={props.image}
            alt={props.alt}
          />
        </div>
      </div>
    </div>
  );
}
