import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const faqdata = [
    {
        id: 1,
        title: "What is Syne?",
        description:
            "Syne is your comprehensive project management solution, uniting multiple tools into a single platform for streamlined work across various projects. Say goodbye to juggling between numerous tools – Syne syncs them all in one place.",
    },
    {
        id: 2,
        title: "Can I integrate Syne with my existing tools and apps?",
        description:
            "Absolutely. At Syne, we're dedicated to crafting robust tools, apps, and plugins to ensure a seamless workflow across your diverse projects.",
    },
    {
        id: 3,
        title: "What types of customer support are available with Syne?",
        description:
            "Our current support model allows direct interaction with our founder, who is readily available to discuss Syne in greater detail and address any queries you may have.",
    },
    {
        id: 4,
        title: "Is there a free trial available for Syne, and what pricing options and plans does Syne offer?",
        description:
            "During its beta phase, Syne is offered completely free of charge. Our intention is to maintain many of these features as complimentary offerings in the foreseeable future.",
    },
    {
        id: 5,
        title: "Can I invite clients and external stakeholders to collaborate on projects?",
        description:
            "Yes, indeed. Our intuitive signup and login process guides you through inviting members, ensuring a seamless collaboration experience.",
    },
    {
        id: 6,
        title: "How secure is Syne?",
        description:
            "Rest assured, we prioritize data security. Syne does not share data with any third parties. Our dedicated developers continuously work to fortify Syne's security measures, ensuring your peace of mind.",
    },
];

function Icon({ id, open }) {
    const getIconPath = () => {
        if (open) {
            return (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12.6689H16"
                    stroke="#212529"
                    strokeWidth="1.5"
                />
            );
        } else {
            return (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.6689H15M12 9.66895V15.6689"
                    stroke="#212529"
                    strokeWidth="1.5"
                />
            );
        }
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            className={`h-5 w-5 transition-transform ${
                id === open ? "rotate-180" : ""
            }`}
        >
            <circle
                cx="12"
                cy="12.6689"
                r="8"
                stroke="#212529"
                strokeWidth="1.5"
            />
            {getIconPath()}
        </svg>
    );
}

const FAQ = () => {
    const [openItems, setOpenItems] = React.useState([]);

    const handleOpen = (id) => {
        setOpenItems((prevOpenItems) => {
            if (prevOpenItems.includes(id)) {
                return prevOpenItems.filter((item) => item !== id);
            } else {
                return [...prevOpenItems, id];
            }
        });
    };
    return (
        <div className="bg-[#FAFAFF]">
            <div
                className="desktop:px-[165px] desktop:py-[137px] 
            
            tablet:py-16 tablet:px-6
            
            mobile:py-16 mobile:px-6"
            >
                <div className="FAQ-title-text-wrapper max-w-[571px] mb-[48px] font-Poppins">
                    <h2 className="mb-[24px] font-semibold text-[24px] text-[#556AEB] leading-[36px] tracking-[0.4px]">
                        FAQs
                    </h2>
                    <h1
                        className=" font-semibold text-[40px] desktop:text-[#292421] leading-[54px] 
                    
                        tablet:w-[100%]

                        mobile:w-[100%] mobile:text-[28px]
                    "
                    >
                        Have Questions? We Have Answers!
                    </h1>
                </div>
                {faqdata.map((data) => (
                    <Accordion
                        key={data.id}
                        open={openItems.includes(data.id)}
                        icon={
                            <Icon
                                id={data.id}
                                open={openItems.includes(data.id)}
                            />
                        }
                        className="gap-[10px] py-4 pl-4 pr-[9px] 
                        
                        tablet:w-[100%]
                        
                        mobile:w-[100%]"
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(data.id)}
                            className=" font-Poppins leading-6 font-semibold gap-[10px] text-base text-[#212529]"
                        >
                            {data.title}
                        </AccordionHeader>
                        <AccordionBody className=" font-Poppins gap-[10px] leading-6 text-base ">
                            {data.description}
                        </AccordionBody>
                    </Accordion>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
