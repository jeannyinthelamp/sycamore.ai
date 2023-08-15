import React from "react";

const Loggingin = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="border-[3px] border-black p-[40px]">
                <div className="flex items-center">
                    <div className="text-[34px]  mb-[20px] w-[274px] h-[44px] flex items-center justify-center">
                        Login
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mb-[20px]">
                        <input
                            className="w-[274px] h-[44px] border-black border-[3px] text-[14px] px-[16px] py-[13px]"
                            type="text"
                            placeholder="Email Address" // Add a placeholder for the input
                        />
                    </div>
                    <div className="mb-[20px]">
                        <input
                            className="w-[274px] h-[44px] border-black border-[3px] text-[14px] px-[16px] py-[13px]"
                            type="text"
                            placeholder="Password" // Add a placeholder for the input
                        />
                    </div>
                    <p className="text-[14px] pb-[20px]">Forgot Password?</p>
                    <div className="mb-[20px] w-[274px] h-[44px] bg-[#424242] text-white text-[14px] flex items-center justify-center">
                        Login
                    </div>

                    <div className="mb-[20px] w-[274px] h-[3px] bg-black"></div>
                    <div className="mb-[20px] w-[274px] h-[44px] bg-[#424242] text-white text-[14px] flex items-center justify-center">
                        Continue with Google
                    </div>
                    <p className="text-[14px] w-[274px] h-[44px] flex items-center justify-center">
                        Don't have an Account?{" "}
                        <span className="underline underline-offset-1 cursor-pointer">
                            Sign Up
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Loggingin;
