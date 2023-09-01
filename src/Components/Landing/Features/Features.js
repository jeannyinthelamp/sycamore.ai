import React from "react";
import FeaturesCard from "./FeaturesCard";
import pin from "../../../Assets/Images/features-pin.svg";
import hub from "../../../Assets/Images/features-hub-isometric.svg";
import graph from "../../../Assets/Images/features-graph.svg";

const Features = () => {
  const displayCard = () => {
    return cardData.map((item) => <FeaturesCard {...item} key={item.number} />);
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
    <div className='card-components-wrapper w-[1084px] mt-[109px] mx-auto flex flex-row justify-center items-center gap-[35px] '>
      {/* displayCard function returns a FeaturesCard component for each object in the cardData array */}
      {displayCard()}
    </div>
  );
};

export default Features;
