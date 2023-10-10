import React from "react";
import Graphic from "./Graphic";
import { btn_styles } from "../../Styles/Button_Styles";

const Hero = () => {
    return (
        <div className="bg-[#FAFAFF] font-Poppins">
            <div className="desktop:px-[168px] desktop:py-[126px] grid grid-cols-1 lg:grid-cols-2 gap-[142px] h-auto min-h-[880px] tablet:px-6 tablet:py-16 tablet:max-w-[834px] mx-auto mobile:px-6 mobile:py-16 mobile:max-w-[375px] mx-auto">
                <div className="mt-24">
                    <div className="flex flex-col">
                        <h1 className="text-[40px] leading-[60px] font-semibold mb-6 tablet:w-[100%] tablet:leading-10 mobile:w-[100%] mobile:leading-8">
                            Project Management, Simplified.
                        </h1>
                        <p className="mb-8 leading-[27px] font-[18px] tablet:w-[100%] mobile:w-[100%]">
                            Empowering workflows for students, freelancers, and
                            small businesses.
                        </p>
                        <form
                            action=""
                            className="flex flex-col desktop:w-[440px] bg-white rounded-lg border border-solid border-neutral-400 shadow-md tablet:w-[100%] mobile:w-[100%]"
                        >
                            <div class="flex items-center justify-between py-2 px-4">
                                <input
                                    className="w-full leading-6 text-[16px] placeholder-[#212529] outline-none"
                                    type="email"
                                    required
                                    placeholder="Email Address"
                                />
                                <input
                                    type="submit"
                                    value="Join Waitlist"
                                    class={`${btn_styles.btn_blue_hover} ${btn_styles.btn_blue_active} w-[146px] h-[48px] px-6 py-3 border-[1px] rounded-lg bg-[#556AEB] text-white cursor-pointer ${btn_styles.focus}`}
                                />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="tablet:w-[50%] mobile:w-[75%] tablet:h-auto mobile:h-auto flex items-center justify-center">
                    <Graphic />
                </div>
            </div>
        </div>
    );
};

export default Hero;
