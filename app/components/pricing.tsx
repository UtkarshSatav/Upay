"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: "Starter",
            description: "Get started with the essentials.",
            price: isYearly ? 63 : 79,
            features: [
                "Core layout sections",
                "Mobile-friendly design",
                "Light & dark mode",
                "Smooth basic animations",
                "CMS & blog support",
                "Commercial use rights",
            ],
        },
        {
            name: "Pro",
            description: "Built for growing SaaS teams.",
            price: isYearly ? 103 : 129,
            features: [
                "Everything in Starter",
                "CMS-ready structure",
                "Built-in blog layouts",
                "SEO-optimized pages",
                "Smart navigation system",
                "Lifetime access",
            ],
        },
    ];

    return (
        <div className="main-container flex w-full max-w-[1920px] py-12 md:py-[80px] px-4 md:px-[64px] flex-col gap-0 justify-center items-center flex-nowrap bg-[#f0f0f0] relative overflow-hidden mx-auto my-0">
            <div className="flex w-full max-w-[1100px] flex-col gap-[32px] items-center shrink-0 flex-nowrap relative">

                {/* Header */}
                <div className="flex flex-col gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[1]">
                    <div className="flex pt-[3px] pr-[12px] pb-[3px] pl-[12px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[40px] relative overflow-hidden shadow-[0_0_0_0_#f8f8fa] z-[3]">
                        <div className="w-[8px] h-[8px] shrink-0 rounded-[40px] relative overflow-hidden z-[4] bg-[#08CB00]" />
                        <span className="font-['Inter'] text-[14px] font-semibold leading-[19.6px] text-[#0a0b10] tracking-[-0.42px] relative text-left whitespace-nowrap">
                            Pricing
                        </span>
                    </div>

                    <div className="text-center relative z-[8]">
                        <h2 className="font-['Inter'] text-[40px] md:text-[52px] font-semibold leading-[1.2] text-[#151621] tracking-[-2.6px] relative text-center">
                            Choose the plan that <br />
                            fits your team best.
                        </h2>
                    </div>
                </div>

                {/* Toggle and Cards */}
                <div className="flex w-full flex-col gap-[16px] justify-center items-center shrink-0 flex-nowrap relative z-[11]">

                    {/* Monthly/Yearly Toggle */}
                    <div className="flex flex-col items-start shrink-0 flex-nowrap relative z-[12]">
                        <div className="flex pt-[3px] pr-[3px] pb-[3px] pl-[3px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#f8f8fa] rounded-[16px] relative overflow-hidden shadow-[0_7px_21px_0_rgba(8,203,0,0.03)] z-[13]">
                            <div className="flex pt-[5px] pr-[5px] pb-[5px] pl-[5px] gap-[12px] justify-center items-center shrink-0 flex-nowrap bg-[#f0f0f0] rounded-[13px] relative z-[14]">

                                {/* Monthly Button */}
                                <button
                                    onClick={() => setIsYearly(false)}
                                    className={`flex pt-[10px] pr-[15px] pb-[10px] pl-[15px] justify-center items-center shrink-0 flex-nowrap rounded-[10px] relative z-[16] transition-colors ${!isYearly ? "bg-white shadow-[0_7px_21px_0_rgba(8,203,0,0.03)]" : ""
                                        }`}
                                >
                                    <span className={`font-['Inter'] text-[15px] font-semibold leading-[18px] tracking-[-0.3px] relative text-left whitespace-nowrap ${!isYearly ? "text-[#0a0b10]" : "text-[#7a7a7a]"
                                        }`}>
                                        Monthly
                                    </span>
                                </button>

                                {/* Yearly Button */}
                                <button
                                    onClick={() => setIsYearly(true)}
                                    className={`flex pt-[10px] pr-[15px] pb-[10px] pl-[15px] justify-center items-center shrink-0 flex-nowrap rounded-[10px] relative z-20 transition-colors ${isYearly ? "bg-white shadow-[0_7px_21px_0_rgba(8,203,0,0.03)]" : ""
                                        }`}
                                >
                                    <span className={`font-['Inter'] text-[15px] font-semibold leading-[18px] tracking-[-0.3px] relative text-left whitespace-nowrap ${isYearly ? "text-[#0a0b10]" : "text-[#7a7a7a]"
                                        }`}>
                                        Yearly
                                    </span>
                                </button>

                                {/* Save 20% Badge */}
                                {isYearly && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex pt-[4px] pr-[8px] pb-[4px] pl-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[10px] absolute top-[-27.29%] right-[-10px] overflow-hidden z-[24] bg-[#08CB00]"
                                    >
                                        <span className="font-['Inter'] text-[13px] font-semibold leading-[18.2px] text-[#fff] tracking-[-0.39px] relative text-left whitespace-nowrap">
                                            Save 20%
                                        </span>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="flex gap-[16px] justify-center items-start self-stretch shrink-0 flex-wrap relative z-[28]">

                        {/* Starter and Pro Cards */}
                        <div className="flex w-full lg:w-auto gap-[16px] justify-center items-stretch flex-wrap lg:flex-nowrap relative z-[29]">
                            {plans.map((plan, index) => (
                                <motion.div
                                    key={plan.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex w-full lg:w-[353px] pt-[5px] pr-[5px] pb-[5px] pl-[5px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#f8f8fa] rounded-[20px] relative overflow-hidden shadow-[0_7px_21px_0_rgba(8,203,0,0.03)]"
                                >
                                    <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[24px] items-start self-stretch grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[15px] relative">

                                        {/* Card Header */}
                                        <div className="flex flex-col gap-[24px] justify-center items-center self-stretch shrink-0 flex-nowrap relative">
                                            <div className="flex flex-col gap-[10px] justify-center items-center self-stretch shrink-0 flex-nowrap relative">
                                                <div className="flex flex-col gap-[6px] items-start self-stretch shrink-0 flex-nowrap relative">
                                                    <span className="font-['Inter'] text-[20px] font-semibold leading-[26px] text-[#0a0b10] tracking-[-0.6px] relative text-left whitespace-nowrap">
                                                        {plan.name}
                                                    </span>
                                                    <span className="font-['Inter'] text-[16px] font-medium leading-[24px] text-[#7a7a7a] tracking-[-0.32px] relative text-left whitespace-nowrap">
                                                        {plan.description}
                                                    </span>
                                                </div>

                                                {/* Price */}
                                                <div className="flex flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap relative">
                                                    <div className="flex gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative">
                                                        <span className="font-['Inter'] text-[40px] font-semibold leading-[48px] text-[#0a0b10] tracking-[-2px] relative text-left whitespace-nowrap">
                                                            ${plan.price}
                                                        </span>
                                                        <span className="font-['Inter'] text-[14px] font-medium leading-[19.6px] text-[#7a7a7a] tracking-[-0.28px] relative text-left whitespace-nowrap">
                                                            /mo
                                                        </span>
                                                    </div>
                                                    <span className="font-['Inter'] text-[14px] font-medium leading-[19.6px] text-[#7a7a7a] tracking-[-0.28px] relative text-left whitespace-nowrap self-stretch">
                                                        USD billed {isYearly ? "yearly" : "monthly"}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* CTA Button */}
                                            <button className="flex h-[42px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[12px] relative overflow-hidden shadow-[0_7px_15.4px_0_rgba(8,203,0,0.36)] bg-[#08CB00] hover:bg-[#06A300] transition-colors group">
                                                <span className="font-['Inter'] text-[15px] font-semibold leading-[18px] text-[#fff] tracking-[-0.3px] relative text-left whitespace-nowrap">
                                                    Choose your plan
                                                </span>
                                                <ArrowRight className="w-[16px] h-[16px] text-white group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>

                                        {/* Features List */}
                                        <div className="flex flex-col justify-center items-center self-stretch shrink-0 flex-nowrap relative">
                                            <div className="flex flex-col gap-[12px] justify-center items-start self-stretch shrink-0 flex-nowrap relative overflow-hidden">
                                                {plan.features.map((feature, idx) => (
                                                    <div key={idx} className="flex gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative overflow-hidden">
                                                        <Check className="w-[18px] h-[18px] text-[#08CB00]" />
                                                        <span className="font-['Inter'] text-[16px] font-medium leading-[24px] text-[#7a7a7a] tracking-[-0.32px] relative text-left whitespace-nowrap">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Enterprise and Still Deciding Cards */}
                        <div className="flex w-full lg:w-[361px] flex-col gap-[16px] justify-center items-center flex-nowrap relative z-[162]">

                            {/* Enterprise Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative"
                            >
                                <div className="flex pt-[5px] pr-[5px] pb-[5px] pl-[5px] flex-col justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f8f8fa] rounded-[20px] relative overflow-hidden shadow-[0_7px_21px_0_rgba(8,203,0,0.03)]">
                                    <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[15px] relative">
                                        <div className="flex flex-col gap-[20px] justify-center items-center self-stretch shrink-0 flex-nowrap relative">
                                            <div className="flex flex-col gap-[6px] items-start self-stretch shrink-0 flex-nowrap relative">
                                                <span className="font-['Inter'] text-[20px] font-semibold leading-[26px] text-[#0a0b10] tracking-[-0.6px] relative text-left whitespace-nowrap">
                                                    Enterprise
                                                </span>
                                                <span className="font-['Inter'] text-[16px] font-medium leading-[24px] text-[#7a7a7a] tracking-[-0.32px] relative text-left whitespace-nowrap">
                                                    Tailored for your team.
                                                </span>
                                            </div>

                                            <button className="flex h-[40px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] relative overflow-hidden border-2 border-[rgba(232,232,233,0.75)] hover:border-[#08CB00] transition-colors group">
                                                <span className="font-['Inter'] text-[15px] font-semibold leading-[18px] text-[#0a0b10] tracking-[-0.3px] relative text-left whitespace-nowrap">
                                                    Get a Quote
                                                </span>
                                                <ArrowRight className="w-[16px] h-[16px] text-[#0a0b10] group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>

                                        <div className="flex flex-col justify-center items-center self-stretch shrink-0 flex-nowrap relative">
                                            <div className="flex flex-col gap-[12px] justify-center items-start self-stretch shrink-0 flex-nowrap relative overflow-hidden">
                                                {["Custom design system setup", "Integration with your stack", "Priority onboarding & support"].map((feature, idx) => (
                                                    <div key={idx} className="flex gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative overflow-hidden">
                                                        <Check className="w-[18px] h-[18px] text-[#08CB00]" />
                                                        <span className="font-['Inter'] text-[16px] font-medium leading-[24px] text-[#7a7a7a] tracking-[-0.32px] relative text-left whitespace-nowrap">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Still Deciding Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative"
                            >
                                <div className="flex pt-[5px] pr-[5px] pb-[5px] pl-[5px] flex-col justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f8f8fa] rounded-[20px] relative overflow-hidden shadow-[0_7px_21px_0_rgba(8,203,0,0.03)]">
                                    <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col justify-between items-start self-stretch grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[15px] relative min-h-[189px]">
                                        <div className="flex flex-col gap-[6px] items-start self-stretch shrink-0 flex-nowrap relative">
                                            <span className="font-['Inter'] text-[18px] font-semibold leading-[25.2px] text-[#0a0b10] tracking-[-0.54px] relative text-left whitespace-nowrap">
                                                Still deciding?
                                            </span>
                                            <span className="font-['Inter'] text-[16px] font-medium leading-[24px] text-[#7a7a7a] tracking-[-0.32px] relative text-left whitespace-nowrap">
                                                Explore features or reach out.
                                            </span>
                                        </div>

                                        <button className="flex h-[42px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] relative overflow-hidden border-2 border-[rgba(232,232,233,0.75)] hover:border-[#08CB00] transition-colors group">
                                            <span className="font-['Inter'] text-[15px] font-semibold leading-[18px] text-[#0a0b10] tracking-[-0.3px] relative text-left whitespace-nowrap">
                                                Let's talk
                                            </span>
                                            <ArrowRight className="w-[16px] h-[16px] text-[#0a0b10] group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
