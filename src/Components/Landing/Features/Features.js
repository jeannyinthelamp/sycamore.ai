import React from "react";
import FeaturesCard from "./FeaturesCard";
import pin from "../../../Assets/Images/features-pin.svg";
import hub from "../../../Assets/Images/features-hub-isometric.svg";
import graph from "../../../Assets/Images/features-graph.svg";

const Features = () => {
  const data = [
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
    <div className='mt-[109px] flex flex-row'>
      <FeaturesCard
        number={data[0].number}
        title={data[0].title}
        text={data[0].text}
        image={data[0].image}
        alt={data[0].alt}
      />
      <FeaturesCard
        margin='mx-[35px]'
        number={data[1].number}
        title={data[1].title}
        text={data[1].text}
        image={data[1].image}
        alt={data[1].alt}
      />
      <FeaturesCard
        number={data[2].number}
        title={data[2].title}
        text={data[2].text}
        image={data[2].image}
        alt={data[2].alt}
      />
    </div>
  );
};

export default Features;
