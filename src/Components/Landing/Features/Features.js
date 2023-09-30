import React from "react";
import FeaturesCard from "./FeaturesCard";
import pin from "../../../Assets/Images/features-pin.svg";
import hub from "../../../Assets/Images/features-hub-isometric.svg";
import graph from "../../../Assets/Images/features-graph.svg";
import playcircle from "../../../Assets/Images/play_circle.svg";

const Features = () => {
    const displayCard = () => {
        return cardData.map((item) => (
            <FeaturesCard {...item} key={item.number} />
        ));
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
            className="features-outer-wrapper desktop:max-w-[1440px] h-auto mx-auto flex flex-col justify-center items-center bg-[#FFF] 
    
    tablet:max-w-[834px]

    mobile:max-w-[375px] 
    "
        >
            <div
                className="features-inner-wrapper desktop:max-w-[90.6%]
      
      tablet:max-w-[94.5%]

      mobile:max-w-[94.5%] 
      "
            >
                <div
                    className="features-text-wrapper desktop:w-[100%] mt-[126px] flex flex-col
        
         tablet:w-[100%] tablet:mt-[64px] tablet:mb-[48px]

         mobile:w-[100%] mobile:mt-[64px] mobile:mb-[24px]
        "
                >
                    <h2
                        className="mb-[24px] font-Poppins font-semibold text-[24px] text-[#556AEB] leading-[36px] tracking-[0.4px] 
          
          tablet:max-w-[100%] tablet:leading-[30px]

          mobile:max-w-[100%] mobile:text-[20px] mobile:leading-[30px]

          "
                    >
                        Features
                    </h2>
                    <h1
                        className="desktop:w-[571px] font-Poppins font-semibold text-[40px] text-[#212529] leading-[54px]
          
          tablet:w-[100%] tablet:text-[38px] tablet:leading-[51px]

          mobile:w-[100%] mobile:text-[28px] mobile:leading-[40px]
          "
                    >
                        Syne Empowers Your Workflow and Productivity
                    </h1>
                </div>
                {/* //* Wrapper for the FeaturesCard components */}
                <div
                    className="card-components-wrapper desktop:max-w-[1104px] desktop:h-auto mt-[109px] mb-[138px] flex flex-row justify-start items-center desktop:gap-[35px] 
        
        tablet:max-w-[786px] tablet:gap-[24px] tablet:flex-col tablet:mt-[0px]

        mobile:max-w-[338px] mobile:gap-[24px] mobile:flex-col mobile:mt-[0px]
        "
                >
                    {/* displayCard function returns a FeaturesCard component for each object in the cardData array */}
                    {displayCard()}
                </div>
                {/* //& Wrapper for the Video section */}

                <div
                    className="desktop:py-[126px] desktop:px-[168px] flex justify-center items-center
        
        tablet:py-16 tablet:px-6  tablet:h-[682px]"
                >
                    <div
                        className="p-16
                    
                    "
                    >
                        <div
                            className="border-[64px] border-black rounded-lg relative
                        
                        tablet:border-[20px] tablet:"
                        >
                            <iframe
                                src="https://www.youtube.com/embed/1BxhpPpotdA"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="video"
                                className="w-[900px] h-[618px]
                                
                                tablet:w-[722px] tablet:h-[490px]"
                            ></iframe>

                            <div className="absolute bottom-[60px] left-0 right-0 flex flex-col z-10 px-3">
                                <div className="flex justify-start">
                                    {" "}
                                    <button className="flex justify-center items-center px-3 py-[6px] rounded-3xl w-[98px] h-9 bg-[#556AEB] text-[#F8F9FA] font-Poppins text-[24px] font-semibold mb-6 tracking-[0.4px] leading-[36px]">
                                        Demo
                                    </button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <h1
                                        className="font-Poppins text-white text-[40px] leading-[54px] font-semibold desktop:w-[440px] desktop:h-[130px]
                                    
                                    tablet:w-[722px] tablet:h-[154px] tablet:gap-4"
                                    >
                                        All You Need to Know About Syne
                                    </h1>
                                    <img
                                        src={playcircle}
                                        alt="play circle"
                                        className="w-[130px] h-[130px]"
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
