import React from "react";
import Graphic from "./Graphic";

const Hero = () => {
    return (
        <div className="bg-[#FAFAFF] font-Poppins">
            <div className="px-[168px] py-[126px] grid grid-cols-1 lg:grid-cols-2  gap-[142px] h-screen">
                <div className="mt-24">
                    <div className="flex flex-col ">
                        <h1 className="text-[40px] leading-[60px] font-semibold mb-6">
                            Project Management, Simplified.
                        </h1>
                        <p className="mb-8 leading-[27px] font-[18px] ">
                            Empowering workflows for students, freelancers,
                            <br /> and small businesses.
                        </p>
                        <label class="bg-white w-[440px] rounded-lg border border-solid border-neutral-400 shadow-md">
                            <div class="flex items-center justify-between py-2 px-4">
                                <input
                                    class=" leading-6 text-[16px]"
                                    type="email"
                                    required
                                    placeholder="Email Address"
                                />
                                <button class="px-6 py-3 border-[1px] rounded-lg bg-[#556AEB] text-white">
                                    Join Waitlist
                                </button>
                            </div>
                        </label>
                    </div>
                </div>

                <div>
                    <Graphic />
                </div>
            </div>
        </div>
    );
};

export default Hero;
