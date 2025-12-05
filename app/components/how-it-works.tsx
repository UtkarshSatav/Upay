"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
    return (
        <div className="main-container flex w-full max-w-[1920px] py-12 md:py-[80px] px-4 md:px-[100px] xl:px-[410px] justify-center items-start flex-nowrap relative overflow-hidden mx-auto my-0 bg-[#f0f0f0]">
            <div className="flex w-full max-w-[1100px] flex-col gap-[32px] items-center shrink-0 flex-nowrap relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[1]"
                >
                    <div className="flex w-[125px] flex-col items-start shrink-0 flex-nowrap relative z-[2]">
                        <div className="flex w-[125px] pt-[3px] pr-[12px] pb-[3px] pl-[12px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[40px] relative overflow-hidden shadow-[0_0_0_0_#f8f8fa] z-[3]">
                            <div className="w-[8px] h-[8px] shrink-0 rounded-[40px] relative overflow-hidden z-[4] bg-[#08CB00]" />
                            <div className="flex w-[83px] flex-col items-start shrink-0 flex-nowrap relative z-[5]">
                                <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[6]">
                                    <span className="h-[20px] shrink-0 basis-auto font-['Inter'] text-[14px] font-semibold leading-[19.6px] text-[#0a0b10] tracking-[-0.42px] relative text-left whitespace-nowrap z-[7]">
                                        How it works
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-[600px] shrink-0 text-[0px] relative z-[8] text-center">
                        <span className="font-['Inter'] text-[32px] md:text-[52px] font-semibold leading-[1.2] text-[#151621] tracking-[-1.5px] md:tracking-[-2.6px] relative z-[9]">
                            Get started in <br />
                        </span>
                        <span className="font-['Inter'] text-[32px] md:text-[52px] font-semibold leading-[1.2] text-[#151621] tracking-[-1.5px] md:tracking-[-2.6px] relative z-10">
                            three simple steps.
                        </span>
                    </div>
                    <div className="w-full max-w-[640px] shrink-0 text-[0px] relative z-[11] text-center">
                        <span className="font-['Inter'] text-[16px] md:text-[18px] font-medium leading-[1.5] text-[#7a7a7a] tracking-[-0.36px] relative z-[12]">
                            Integrate our SDK with just 10 lines of code, <br />
                        </span>
                        <span className="font-['Inter'] text-[16px] md:text-[18px] font-medium leading-[1.5] text-[#7a7a7a] tracking-[-0.36px] relative z-[13]">
                            track everything automatically, and maximize margins.
                        </span>
                    </div>
                </motion.div>
                <div className="flex flex-col md:flex-row gap-[26px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[14]">
                    {/* Step 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex w-full md:w-[349.33px] flex-col items-start shrink-0 flex-nowrap relative z-[15]"
                    >
                        <div className="flex p-6 md:p-[32px] flex-col gap-[32px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] relative overflow-hidden shadow-[0_7px_21px_0_rgba(8,203,0,0.03)] z-[16]">
                            <div className="h-[200px] self-stretch shrink-0 relative z-[17]">
                                <div className="flex h-[200px] justify-center items-center flex-nowrap rounded-[15px] absolute top-0 left-0 right-0 z-[18] overflow-hidden">
                                    <img src="/How section/How-img-1.png" className="w-full h-full object-cover" alt="Step 1" />
                                </div>
                            </div>
                            <div className="flex pt-0 pr-0 md:pr-[24px] pb-0 pl-0 flex-col gap-[15px] items-start self-stretch shrink-0 flex-nowrap relative z-20">
                                <div className="flex w-[57px] pt-[5px] pr-[10px] pb-[5px] pl-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[10px] relative overflow-hidden shadow-[0_7px_21px_0_rgba(8,203,0,0.24)] z-[21] bg-[#08CB00]">
                                    <div className="flex w-[37px] flex-col items-start shrink-0 flex-nowrap relative z-[22]">
                                        <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[23]">
                                            <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[13px] font-semibold leading-[18.2px] text-[#fff] tracking-[-0.39px] relative text-left whitespace-nowrap z-[24]">
                                                Step 1
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[6px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[25]">
                                    <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[26]">
                                        <div className="flex pt-0 pr-0 pb-[0.8px] pl-0 flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27]">
                                            <span className="h-[29px] self-stretch shrink-0 basis-auto font-['Inter'] text-[24px] font-semibold leading-[28.8px] text-[#0a0b10] tracking-[-1.2px] relative text-left whitespace-nowrap z-[28]">
                                                Integrate SDK (10 lines)
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[29]">
                                        <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-30">
                                            <span className="flex w-full h-auto md:h-[72px] justify-start items-center self-stretch shrink-0 font-['Inter'] text-[16px] font-medium leading-[24px] text-[#7a7a7a] tracking-[-0.32px] relative text-left overflow-hidden z-[31]">
                                                Add our SDK with just 10 lines of <br className="hidden md:block" />
                                                code. Python, JS, or Go—your <br className="hidden md:block" />
                                                choice. Super easy setup.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* Step 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex w-full md:w-[349.33px] flex-col items-start shrink-0 flex-nowrap relative z-[32]"
                    >
                        <div className="flex p-6 md:p-[32px] flex-col gap-[32px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] relative overflow-hidden shadow-[0_7px_21px_0_rgba(8,203,0,0.03)] z-[33]">
                            <div className="h-[200px] self-stretch shrink-0 relative z-[34]">
                                <div className="flex h-[200px] justify-center items-center flex-nowrap rounded-[15px] absolute top-0 left-0 right-0 z-[35] overflow-hidden">
                                    <img src="/How section/How-img-2.png" className="w-full h-full object-cover" alt="Step 2" />
                                </div>
                            </div>
                            <div className="flex pt-0 pr-0 md:pr-[24px] pb-0 pl-0 flex-col gap-[15px] items-start self-stretch shrink-0 flex-nowrap relative z-[37]">
                                <div className="flex w-[59px] pt-[5px] pr-[10px] pb-[5px] pl-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[10px] relative overflow-hidden shadow-[0_7px_21px_0_rgba(8,203,0,0.24)] z-[38] bg-[#08CB00]">
                                    <div className="flex w-[39px] flex-col items-start shrink-0 flex-nowrap relative z-[39]">
                                        <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-40">
                                            <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[13px] font-semibold leading-[18.2px] text-[#fff] tracking-[-0.39px] relative text-left whitespace-nowrap z-[41]">
                                                Step 2
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[6px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[42]">
                                    <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[43]">
                                        <div className="flex pt-0 pr-0 pb-[0.8px] pl-0 flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[44]">
                                            <span className="h-[29px] self-stretch shrink-0 basis-auto font-['Inter'] text-[24px] font-semibold leading-[28.8px] text-[#0a0b10] tracking-[-1.2px] relative text-left whitespace-nowrap z-[45]">
                                                Track Everything
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[46]">
                                        <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[47]">
                                            <span className="flex w-full h-auto md:h-[72px] justify-start items-center self-stretch shrink-0 font-['Inter'] text-[16px] font-medium leading-[24px] text-[#7a7a7a] tracking-[-0.32px] relative text-left overflow-hidden z-[48]">
                                                Automatic tracking of tokens, API <br className="hidden md:block" />
                                                calls, compute costs across all AI <br className="hidden md:block" />
                                                vendors. Real-time visibility.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* Step 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex w-full md:w-[349.33px] flex-col items-start shrink-0 flex-nowrap relative z-[49]"
                    >
                        <div className="flex p-6 md:p-[32px] flex-col gap-[32px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] relative overflow-hidden shadow-[0_7px_21px_0_rgba(8,203,0,0.03)] z-50">
                            <div className="h-[200px] self-stretch shrink-0 relative z-[51]">
                                <div className="flex h-[200px] justify-center items-center flex-nowrap rounded-[15px] absolute top-0 left-0 right-0 z-[52] overflow-hidden">
                                    <img src="/How section/How-img-3.png" className="w-full h-full object-cover" alt="Step 3" />
                                </div>
                            </div>
                            <div className="flex pt-0 pr-0 md:pr-[24px] pb-0 pl-0 flex-col gap-[15px] items-start self-stretch shrink-0 flex-nowrap relative z-[54]">
                                <div className="flex w-[59px] pt-[5px] pr-[10px] pb-[5px] pl-[10px] justify-center items-center shrink-0 flex-nowrap rounded-[10px] relative overflow-hidden shadow-[0_7px_21px_0_rgba(8,203,0,0.24)] z-[55] bg-[#08CB00]">
                                    <div className="flex w-[39px] flex-col items-start shrink-0 flex-nowrap relative z-[56]">
                                        <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[57]">
                                            <span className="h-[19px] shrink-0 basis-auto font-['Inter'] text-[13px] font-semibold leading-[18.2px] text-[#fff] tracking-[-0.39px] relative text-left whitespace-nowrap z-[58]">
                                                Step 3
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[6px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[59]">
                                    <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[60]">
                                        <div className="flex pt-0 pr-0 pb-[0.8px] pl-0 flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[61]">
                                            <span className="h-[29px] self-stretch shrink-0 basis-auto font-['Inter'] text-[24px] font-semibold leading-[28.8px] text-[#0a0b10] tracking-[-1.2px] relative text-left whitespace-nowrap z-[62]">
                                                Optimize & Bill
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[63]">
                                        <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[64]">
                                            <span className="flex w-full h-auto md:h-[72px] justify-start items-center self-stretch shrink-0 font-['Inter'] text-[16px] font-medium leading-[24px] text-[#7a7a7a] tracking-[-0.32px] relative text-left overflow-hidden z-[65]">
                                                Get real-time insights, automate <br className="hidden md:block" />
                                                billing, and maximize your margins <br className="hidden md:block" />
                                                with actionable analytics.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
