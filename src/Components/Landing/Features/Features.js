import React from "react";
import FeaturesCard from "./FeaturesCard";
import pin from "../../../Assets/Images/features-pin.svg";
import hub from "../../../Assets/Images/features-hub-isometric.svg";
import graph from "../../../Assets/Images/features-graph.svg";
import playcircle from "../../../Assets/Images/play_circle.svg";

const Features = () => {
  const displayCard = () => {
    return cardData.map((item) => <FeaturesCard {...item} key={item.number} />);
  };

  const cardData = [
    {
      number: "1",
      title: "Push Pins",
      text: "Create tabs by clicking on push pins icons for you to focus on your work with full or minimized screen",
      image: pin,
      alt: "red pin",
      className: "desktop:h-auto",
    },
    {
      number: "2",
      title: "Hub Connection",
      text: "Onboard your clients and your teammates easily in one platform for your on-going projects",
      image: hub,
      alt: "purple node",
      className: "desktop:h-auto",
    },
    {
      number: "3",
      title: "Synchronize",
      text: "Synchronize all your tools in Syne to centralize your workflow without distractions",
      image: graph,
      alt: "green graph",
      className: "desktop:h-auto",
    },
  ];
  return (
    <div
      className='features-outer-wrapper desktop:max-w-[1440px] h-auto mx-auto flex flex-col justify-center items-center bg-[#FFF] border border-red-600 
    
    tablet:max-w-[834px]
    '
    >
      <div
        className='features-inner-wrapper desktop:max-w-[90.6%] border-2 border-blue-700
      

      tablet:max-w-[94.5%]
      '
      >
        <div
          className='features-text-wrapper desktop:w-[100%] mt-[126px] flex flex-col
        
         tablet:w-[100%] tablet:my-[64px]
        '
        >
          <h2
            className='mb-[24px] font-Poppins font-semibold text-[24px] text-[#556AEB] leading-[36px] tracking-[0.4px] 
          
          tablet:max-w-[100%]

          '
          >
            Features
          </h2>
          <h1
            className='desktop:w-[571px] font-Poppins font-semibold text-[40px] text-[#212529] leading-[54px]
          
          tablet:w-[100%]
          '
          >
            Syne Empowers Your Workflow and Productivity
          </h1>
        </div>
        {/* // Wrapper for the FeaturesCard components */}
        <div
          className='card-components-wrapper desktop:max-w-[1104px] desktop:h-auto mt-[96px] mb-[126px] flex flex-row justify-start items-center desktop:gap-[35px] border-2 border-light-blue-400
        
        tablet:max-w-[786px] tablet:gap-[24px] tablet:flex-col
        '
        >
          {/* displayCard function returns a FeaturesCard component for each object in the cardData array */}
          {displayCard()}
        </div>
        <div className='py-[126px] px-[168px] flex justify-center items-center'>
          <div className='p-16'>
            <div className='border-[64px] border-black rounded-lg relative'>
              <iframe
                src='https://www.youtube.com/embed/1BxhpPpotdA'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
                className='w-[900px] h-[618px]'
              ></iframe>

              <div className='absolute bottom-[60px] left-0 right-0 flex flex-col z-10 px-3'>
                <div className='flex justify-start'>
                  {" "}
                  <button className='flex justify-center items-center px-3 py-[6px] rounded-3xl w-[98px] h-9 bg-[#556AEB] text-[#F8F9FA] font-Poppins text-[24px] font-semibold mb-6 tracking-[0.4px] leading-[36px]'>
                    Demo
                  </button>
                </div>

                <div className='flex items-center justify-between'>
                  <h1 className='font-Poppins text-white text-[40px] leading-[54px] font-semibold w-[440px] h-[130px]'>
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
