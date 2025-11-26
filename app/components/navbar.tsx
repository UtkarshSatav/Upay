import React from "react";

export default function Navbar() {
    return (
        <div className="w-full h-[82px] flex flex-col items-start flex-nowrap fixed top-0 left-0 z-[100] bg-white">
            <div className="flex pt-[20px] pr-[64px] pb-[20px] pl-[64px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#fff] relative overflow-hidden shadow-[0_-7px_21px_0_rgba(0,0,0,0.03)]">
                <div className="flex w-full max-w-[1920px] gap-[20px] justify-between items-center shrink-0 flex-nowrap relative z-[1]">
                    {/* Logo Section */}
                    <div className="flex items-center shrink-0 flex-nowrap relative z-[2]">
                        <div className="flex gap-[6px] items-center shrink-0 flex-nowrap relative">
                            <div className="flex w-[30px] h-[30px] items-center justify-center shrink-0 flex-nowrap relative bg-linear-to-br from-green-600 to-green-500 rounded-[6px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    className="h-5 w-5 fill-white"
                                >
                                    <path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z" />
                                </svg>
                            </div>
                            <span className="font-['Poppins'] text-[22px] font-semibold leading-[30.8px] text-[#0a0b10] tracking-[-1.1px] whitespace-nowrap">
                                Upay
                            </span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex gap-[16px] justify-center items-center flex-nowrap relative">
                        <a href="#blog" className="flex pt-[8px] pr-[8px] pb-[8px] pl-[8px] justify-center items-center flex-nowrap">
                            <span className="font-['Inter'] text-[16px] font-medium leading-[22.4px] text-[#7a7a7a] tracking-[-0.48px] whitespace-nowrap hover:text-[#0a0b10] transition-colors">
                                Blog
                            </span>
                        </a>
                        <a href="#updates" className="flex pt-[8px] pr-[8px] pb-[8px] pl-[8px] justify-center items-center flex-nowrap">
                            <span className="font-['Inter'] text-[16px] font-medium leading-[22.4px] text-[#7a7a7a] tracking-[-0.48px] whitespace-nowrap hover:text-[#0a0b10] transition-colors">
                                Updates
                            </span>
                        </a>
                        <a href="#pricing" className="flex pt-[8px] pr-[8px] pb-[8px] pl-[8px] justify-center items-center flex-nowrap">
                            <span className="font-['Inter'] text-[16px] font-medium leading-[22.4px] text-[#7a7a7a] tracking-[-0.48px] whitespace-nowrap hover:text-[#0a0b10] transition-colors">
                                Pricing
                            </span>
                        </a>
                        <a href="#faqs" className="flex pt-[8px] pr-[8px] pb-[8px] pl-[8px] justify-center items-center flex-nowrap">
                            <span className="font-['Inter'] text-[16px] font-medium leading-[22.4px] text-[#7a7a7a] tracking-[-0.48px] whitespace-nowrap hover:text-[#0a0b10] transition-colors">
                                FAQs
                            </span>
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-[10px] justify-end items-center shrink-0 flex-nowrap relative">
                        {/* Contact Button */}
                        <button className="flex h-[42px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] relative overflow-hidden border-2 border-[rgba(232,232,233,0.75)] hover:border-[#08CB00] transition-colors">
                            <span className="font-['Inter'] text-[15px] font-semibold leading-[18px] text-[#0a0b10] tracking-[-0.3px] whitespace-nowrap">
                                Contact
                            </span>
                            <svg className="w-[16px] h-[16px]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Join Waitlist Button */}
                        <button className="flex h-[42px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[12px] relative overflow-hidden shadow-[0_4px_4px_0_rgba(8,203,0,0.3)] bg-linear-to-br from-green-600 to-green-500 border-2 border-[rgba(248,248,250,0.12)] hover:shadow-[0_6px_8px_0_rgba(8,203,0,0.4)] transition-all">
                            <span className="font-['Inter'] text-[15px] font-semibold leading-[18px] text-[#fff] tracking-[-0.3px] whitespace-nowrap">
                                Join waitlist
                            </span>
                            <svg className="w-[16px] h-[16px] text-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
