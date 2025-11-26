"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, MessageCircle } from "lucide-react";

const faqs = [
    {
        question: "1. How quickly can I integrate Upay?",
        answer:
            "Just 10 lines of code with our SDK (Python, JS, or Go). Most teams are up and running in under 30 minutes with full cost tracking enabled.",
    },
    {
        question: "2. Which AI vendors do you support?",
        answer:
            "We support all major AI providers including OpenAI, Anthropic, and more. Track everything in one unified platform with complete cost visibility.",
    },
    {
        question: "3. How does margin tracking work?",
        answer:
            "We track every cost (tokens, API calls, compute) and revenue stream in real-time, giving you per-agent and per-customer profitability insights with detailed analytics.",
    },
    {
        question: "4. Can I set spending limits?",
        answer:
            "Yes! Set budget limits, get instant alerts for cost spikes, and protect your margins with automated thresholds and performance monitoring.",
    },
    {
        question: "5. What's included with my purchase?",
        answer:
            "Full access to usage-based billing, multi-vendor tracking, real-time margin analytics, alerts & budget protection, SDK integration support, and pricing simulation tools.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="main-container flex w-full max-w-[1920px] pt-[80px] px-[20px] md:px-[100px] xl:px-[410px] pb-[80px] justify-center items-start flex-nowrap bg-[#f0f0f0] relative overflow-hidden mx-auto my-0">
            <div className="flex w-full max-w-[1100px] flex-col xl:flex-row gap-[48px] justify-center items-start shrink-0 flex-nowrap relative">

                {/* Left Content */}
                <div className="flex w-full xl:w-[467px] flex-col justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[1]">
                    <div className="flex flex-col gap-[15.2px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[2]">

                        {/* Badge */}
                        <div className="flex pt-[3px] pr-[12px] pb-[3px] pl-[12px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[40px] relative overflow-hidden shadow-[0_0_0_0_#f8f8fa] z-[4]">
                            <div className="w-[8px] h-[8px] shrink-0 rounded-[40px] relative overflow-hidden z-[5] bg-[#08CB00]" />
                            <span className="font-['Inter'] text-[14px] font-semibold leading-[19.6px] text-[#0a0b10] tracking-[-0.42px] relative text-left whitespace-nowrap">
                                FAQs
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="font-['Inter'] text-[40px] md:text-[52px] font-semibold leading-[1.2] text-[#151621] tracking-[-2.6px] relative text-left">
                            Got questions?
                            <br />
                            We've got answers.
                        </h2>

                        {/* Description */}
                        <p className="font-['Inter'] text-[18px] font-medium leading-[27px] text-[#7a7a7a] tracking-[-0.36px] relative text-left max-w-[320px]">
                            Here's everything you need to know before getting started.
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div className="flex w-full xl:w-[350px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[10px] justify-center items-start shrink-0 flex-nowrap bg-[#fff] rounded-[20px] relative overflow-hidden shadow-[0_7px_21px_0_rgba(8,203,0,0.03)] z-[15] mt-[32px] xl:mt-0">
                        <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative">
                            <span className="font-['Inter'] text-[20px] font-semibold leading-[26px] text-[#0a0b10] tracking-[-0.6px] relative text-left whitespace-nowrap">
                                Still have questions?
                            </span>
                            <span className="font-['Inter'] text-[18px] font-medium leading-[27px] text-[#7a7a7a] tracking-[-0.36px] relative text-left whitespace-nowrap">
                                Contact us and we'll help you out.
                            </span>
                        </div>

                        <button className="flex h-[42px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[12px] relative overflow-hidden shadow-[0_7px_15.4px_0_rgba(8,203,0,0.36)] bg-[#08CB00] hover:bg-[#06A300] transition-colors group">
                            <span className="font-['Inter'] text-[15px] font-semibold leading-[18px] text-[#fff] tracking-[-0.3px] relative text-left whitespace-nowrap">
                                Chat us
                            </span>
                            <MessageCircle className="w-[16px] h-[16px] text-white" />
                        </button>
                    </div>
                </div>

                {/* Right - FAQ Accordion */}
                <div className="flex w-full xl:w-[584px] flex-col items-start shrink-0 flex-nowrap relative z-[28]">
                    <div className="flex flex-col gap-[26px] items-start self-stretch shrink-0 flex-nowrap relative z-[29]">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] relative overflow-hidden shadow-[0_7px_21px_0_rgba(8,203,0,0.03)] cursor-pointer hover:shadow-[0_7px_21px_0_rgba(8,203,0,0.08)] transition-shadow"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap relative">

                                    {/* Question Header */}
                                    <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative overflow-hidden">
                                        <span className="font-['Inter'] text-[18px] font-semibold leading-[25.2px] text-[#0a0b10] tracking-[-0.54px] relative text-left flex-1">
                                            {faq.question}
                                        </span>

                                        <div className="flex w-[36px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#f0f0f0] rounded-[8px] relative ml-[20px]">
                                            <motion.div
                                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ChevronDown className="w-[20px] h-[20px] text-[#0a0b10]" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Answer - Expandable */}
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="flex pt-0 pr-[20px] pb-0 pl-0 flex-col items-start self-stretch shrink-0 flex-nowrap relative overflow-hidden"
                                            >
                                                <p className="font-['Inter'] text-[16px] font-medium leading-[24px] text-[#7a7a7a] tracking-[-0.32px] relative text-left whitespace-pre-line">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
