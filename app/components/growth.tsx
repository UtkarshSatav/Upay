"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Growth() {
    return (
        <div className="main-container flex w-full max-w-[1920px] py-12 md:py-[80px] px-4 md:px-0 flex-col items-center flex-nowrap bg-[#f0f0f0] relative mx-auto my-0">
            <div className="flex flex-col gap-[32px] justify-center items-center self-stretch shrink-0 flex-nowrap relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[1]"
                >
                    <div className="w-full flex flex-col items-center shrink-0 relative z-[2]">
                        {/* First line: Track every cost. */}
                        <div className="flex justify-center items-center mb-1">
                            <span className="font-['Inter'] text-[32px] md:text-[52px] font-semibold leading-[1.2] text-[#151621] tracking-[-1px] text-center whitespace-nowrap">
                                Track every cost.
                            </span>
                        </div>

                        {/* Second line: Maximize [icon] margin. */}
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
                            <span className="font-['Inter'] text-[32px] md:text-[52px] font-semibold leading-[1.2] text-[#151621] tracking-[-1px] text-center whitespace-nowrap">
                                Maximize
                            </span>

                            <div className="inline-flex rotate-[8deg] items-center justify-center rounded-xl bg-gray-100 p-1.5 shadow-[0_0.4px_1.3px_-0.4px_rgba(8,203,0,0.09),0_1.6px_4.8px_-0.8px_rgba(8,203,0,0.12),0_7px_21px_-1.25px_rgba(8,203,0,0.24)]">
                                <div className="rounded-lg bg-linear-to-br from-green-600 to-green-500 p-1 md:p-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 256"
                                        className="h-8 w-8 md:h-12 md:w-12 fill-white"
                                    >
                                        <path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z" />
                                    </svg>
                                </div>
                            </div>

                            <span className="font-['Inter'] text-[32px] md:text-[52px] font-semibold leading-[1.2] tracking-[-1px] text-center whitespace-nowrap text-[#08CB00]">
                                margin.
                            </span>
                        </div>
                    </div>
                </motion.div>
                <div className="flex flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[19]">
                    <div className="flex gap-[24px] justify-center items-start self-stretch shrink-0 flex-wrap relative z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex w-full md:w-[350.67px] flex-col items-center md:items-start shrink-0 flex-nowrap relative z-[21]"
                        >
                            <div className="flex w-full md:w-[350px] flex-col gap-[24px] justify-center items-center shrink-0 flex-nowrap relative z-[22]">
                                <div className="flex w-[300px] h-[300px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#f0f0f0] rounded-[15px] relative overflow-hidden shadow-[0_7px_21px_0_rgba(8,203,0,0.03)] z-[23] border-4 border-white">
                                    <img src="/Growth section/Growth-img-1.avif" className="h-full w-full object-cover z-[24]" alt="Unified Analytics" />
                                </div>
                                <div className="flex flex-col gap-[6px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[25]">
                                    <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[26]">
                                        <div className="flex flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[27]">
                                            <span className="h-[26px] self-stretch shrink-0 basis-auto font-['Inter'] text-[18px] font-semibold leading-[25.2px] text-[#0a0b10] tracking-[-0.54px] relative text-center whitespace-nowrap z-[28]">
                                                Usage-Based Billing
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex w-full max-w-[260px] flex-col items-start shrink-0 flex-nowrap relative z-[29]">
                                        <div className="h-auto md:h-[72px] self-stretch shrink-0 relative z-30">
                                            <p className="w-full font-['Inter'] text-[16px] font-medium leading-[24px] text-[#7a7a7a] tracking-[-0.32px] text-center z-[31] mx-auto">
                                                Automate billing for AI products. Track costs down to each token, API call, or workflow execution.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                            className="flex w-full md:w-[350.67px] flex-col items-center md:items-start shrink-0 flex-nowrap relative z-[33]"
                        >
                            <div className="flex w-full md:w-[350px] flex-col gap-[24px] justify-center items-center shrink-0 flex-nowrap relative z-[34]">
                                <div className="flex w-[300px] h-[300px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#f0f0f0] rounded-[15px] relative overflow-hidden shadow-[0_7px_21px_0_rgba(8,203,0,0.03)] z-[35] border-4 border-white">
                                    <img src="/Growth section/Growth-img-2.avif" className="h-full w-full object-cover z-[36]" alt="Seamless Collaboration" />
                                </div>
                                <div className="flex flex-col gap-[6px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[37]">
                                    <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[38]">
                                        <div className="flex flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[39]">
                                            <span className="h-[26px] self-stretch shrink-0 basis-auto font-['Inter'] text-[18px] font-semibold leading-[25.2px] text-[#0a0b10] tracking-[-0.54px] relative text-center whitespace-nowrap z-40">
                                                Real-Time Margin Tracking
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex w-full max-w-[260px] flex-col items-start shrink-0 flex-nowrap relative z-[41]">
                                        <div className="h-auto md:h-[72px] self-stretch shrink-0 relative z-[42]">
                                            <p className="w-full font-['Inter'] text-[16px] font-medium leading-[24px] text-[#7a7a7a] tracking-[-0.32px] text-center z-[43] mx-auto">
                                                Monitor agent spend, costs, and profit margins in real-time. Get detailed profitability stats per agent.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            className="flex w-full md:w-[350.67px] flex-col items-center md:items-start shrink-0 flex-nowrap relative z-[45]"
                        >
                            <div className="flex w-full md:w-[350px] flex-col gap-[24px] justify-center items-center shrink-0 flex-nowrap relative z-[46]">
                                <div className="flex w-[300px] h-[300px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#f0f0f0] rounded-[15px] relative overflow-hidden shadow-[0_7px_21px_0_rgba(8,203,0,0.03)] z-[47] border-4 border-white">
                                    <img src="/Growth section/Growth-img-3.avif" className="h-full w-full object-cover z-[48]" alt="Automated Processes" />
                                </div>
                                <div className="flex flex-col gap-[6px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[49]">
                                    <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-50">
                                        <div className="flex flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[51]">
                                            <span className="h-[26px] self-stretch shrink-0 basis-auto font-['Inter'] text-[18px] font-semibold leading-[25.2px] text-[#0a0b10] tracking-[-0.54px] relative text-center whitespace-nowrap z-[52]">
                                                Multi-Vendor Support
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex w-full max-w-[260px] flex-col items-start shrink-0 flex-nowrap relative z-[53]">
                                        <div className="h-auto md:h-[72px] self-stretch shrink-0 relative z-[54]">
                                            <p className="w-full font-['Inter'] text-[16px] font-medium leading-[24px] text-[#7a7a7a] tracking-[-0.32px] text-center z-[55] mx-auto">
                                                Track usage from OpenAI, Anthropic, and more within a unified platform.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
