import React, { useState, useEffect } from "react";
import Svglogo from "./Svglogo";
import Divider from "./Divider";
import { btn_styles } from "../../Styles/Button_Styles";
import { ReactComponent as Menu } from "../../../Assets/Icons/menu.svg";
import { ReactComponent as CloseIcon } from "../../../Assets/Icons/closex.svg";
import { ReactComponent as HorizontalDivider } from "../../../Assets/Icons/dropdownrectangle.svg";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isTablet, setIsTablet] = useState(window.innerWidth <= 834);

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth <= 834);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className="font-Poppins gap-[10px] border-b border-rgba(255, 255, 255, 0.50) shadow-sm">
            <div className="flex desktop:px-[165px] desktop:py-4 justify-between items-center self-stretch tablet:py-4 tablet:px-5 tablet:gap-[10px]">
                <div className="flex items-center gap-[14px]">
                    <Svglogo />
                    {!isTablet && <h1 className="text-[20px]">Syne</h1>}
                </div>

                <div className="flex items-center gap-[35px]">
                    {!isTablet && (
                        <>
                            <button className="leading-6 font-medium text-[16px]">
                                Features
                            </button>
                            <button className="leading-6 font-medium text-[16px]">
                                About Us
                            </button>
                            <Divider />
                            <button
                                className={` ${btn_styles.btn_white_hover} ${btn_styles.btn_white_active} px-5 py-2 border-[1px] text-[#556AEB] rounded-lg h-10 border-[#556AEB] ${btn_styles.focus}`}
                            >
                                Contact Us
                            </button>
                            <button
                                className={`${btn_styles.btn_blue_hover} ${btn_styles.btn_blue_active} px-5 py-2 border-[1px] rounded-lg bg-[#556AEB] text-white h-10  border-[#556AEB]  ${btn_styles.focus}`}
                            >
                                Join Waitlist
                            </button>
                        </>
                    )}
                </div>
                {isTablet && (
                    <div className="tablet:space-y-2">
                        <button onClick={() => setIsNavOpen((prev) => !prev)}>
                            <Menu />
                        </button>
                    </div>
                )}
                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <div
                        className="absolute top-0 right-0 px-8 py-8"
                        onClick={() => setIsNavOpen(false)}
                    >
                        <CloseIcon />
                    </div>
                    <ul className="flex flex-col items-center justify-between gap-6 min-h-[250px]">
                        <li>
                            <button className="leading-6 font-bold text-[16px]">
                                Features
                            </button>
                        </li>
                        <li>
                            <button className="leading-6 font-bold text-[16px]">
                                About Us
                            </button>
                        </li>
                        <li>
                            <HorizontalDivider />
                        </li>
                        <li>
                            <button
                                className={` ${btn_styles.btn_white_hover} ${btn_styles.btn_white_active} px-5 py-2 border-[1px] text-[#556AEB] rounded-lg h-10 border-[#556AEB] ${btn_styles.focus}`}
                            >
                                Contact Us
                            </button>
                        </li>
                        <li>
                            <button
                                className={`${btn_styles.btn_blue_hover} ${btn_styles.btn_blue_active} px-5 py-2 border-[1px] rounded-lg bg-[#556AEB] text-white h-10  border-[#556AEB]  ${btn_styles.focus}`}
                            >
                                Join Waitlist
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
