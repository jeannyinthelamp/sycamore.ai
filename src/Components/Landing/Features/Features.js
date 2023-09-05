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
            text: "Create Tabs by clicking on push pins icons for you to focus on your work with full or minimized screen",
            image: pin,
            alt: "red pin",
        },
        {
            number: "2",
            title: "Hub Connection",
            text: "Onboard your clients and your teammates easily in one platform for your on-going projects",
            image: hub,
            alt: "purple node",
        },
        {
            number: "3",
            title: "Synchronize",
            text: "Synchronize all your tools in Syne to centralize your workflow without distractions",
            image: graph,
            alt: "green graph",
        },
    ];
    return (
        // Wrapper for the FeaturesCard components
        <div className="font-Poppins">
            {/* displayCard function returns a FeaturesCard component for each object in the cardData array */}
            <div className="card-components-wrapper w-[1084px] mt-[109px] mx-auto flex flex-row justify-center items-center gap-[35px] ">
                {displayCard()}
            </div>
            <div className="py-[126px] px-[168px] flex justify-center items-center">
                <div className="p-16">
                    <div className="border-[64px] border-black rounded-lg relative">
                        <iframe
                            src="https://www.youtube.com/embed/1BxhpPpotdA"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="video"
                            className="w-[1104px] h-[618px]"
                        ></iframe>
                        <div className="absolute bottom-[60px] left-0 right-0 flex flex-col z-10 px-3">
                            <div className="flex justify-start">
                                {" "}
                                <button className="px-3 py-[6px] rounded-3xl h-9 bg-[#556AEB] text-white mb-4">
                                    Demo
                                </button>
                            </div>

                            <div className="flex items-center justify-between gap-[420px]">
                                <h1 className="text-white text-[40px] leading-[60px] font-semibold w-[426px] h-[130px]">
                                    All You Need to Know About Syne
                                </h1>
                                <img
                                    src={playcircle}
                                    alt="play circle"
                                    className="w-[130px h-[130px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
