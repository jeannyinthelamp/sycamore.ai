import React from "react";
import Svglogo from "./Svglogo";
import Divider from "./Divider";

const Navbar = () => {
    return (
        <nav className="font-[Poppins] gap-[10px] border-b border-rgba(255, 255, 255, 0.50) shadow-sm">
            <div className="flex px-[106px] py-4 justify-between items-center self-stretch">
                <div className="flex items-center gap-[14px]">
                    <Svglogo />
                    <h1 class="text-[20px]">Syne</h1>
                </div>
                <div className="flex items-center gap-[35px]">
                    <button className="leading-6 font-semibold">
                        Features
                    </button>
                    <button className="leading-6 font-semibold">
                        About Us
                    </button>
                    <Divider />
                    <button className="px-5 py-2 border-[1px] text-[#556AEB] rounded-lg h-10 border-[#556AEB]">
                        Contact Us
                    </button>
                    <button className="px-5 py-2 border-[1px] rounded-lg bg-[#556AEB] text-white h-10  border-[#556AEB]">
                        Join Waitlist
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
