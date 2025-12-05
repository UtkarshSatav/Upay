"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonialsTop = [
    {
        text: "Upay helped us implement usage-based pricing in hours. Margins improved instantly.",
        name: "Leo D.",
        role: "Founder",
    },
    {
        text: "The layout is clean, smart, and works right out of the box.",
        name: "Marta C.",
        role: "UI Designer",
    },
    {
        text: "Finally tracking every token cost. Upay made AI billing transparent and profitable.",
        name: "Alex B.",
        role: "Product Manager",
    },
    {
        text: "No more margin leakage. Upay's cost tracking is a game-changer for our AI agents.",
        name: "Sarah K.",
        role: "Freelancer",
    },
];

const testimonialsBottom = [
    {
        text: "I built and launched faster than I thought possible. Great experience.",
        name: "Emma W.",
        role: "Product Designer",
    },
    {
        text: "Deployed usage-based billing in 30 minutes. Our margins jumped 22% in the first month.",
        name: "Daniel K.",
        role: "Startup Founder",
    },
    {
        text: "Super easy to use and saves hours of design work.",
        name: "Sophia L.",
        role: "Marketing Lead",
    },
    {
        text: "The best template I've used. Highly recommended for quick launches.",
        name: "Michael R.",
        role: "Developer",
    },
];

const TestimonialCard = ({ data }: { data: typeof testimonialsTop[0] }) => (
    <div className="flex w-[350px] p-[24px] flex-col gap-[24px] shrink-0 bg-white rounded-[20px] shadow-[0_7px_21px_0_rgba(8,203,0,0.03)] relative overflow-hidden">
        <div className="flex justify-between items-start">
            <div className="flex gap-[4px]">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-[16px] h-[16px] fill-[#08CB00] text-[#08CB00]" />
                ))}
            </div>
            <Quote className="w-[40px] h-[40px] text-[#f0f0f0] fill-[#f0f0f0]" />
        </div>

        <p className="font-['Inter'] text-[16px] font-normal leading-[24px] text-[#7a7a7a]">
            "{data.text}"
        </p>

        <div className="flex gap-[12px] items-center">
            <div className="w-[40px] h-[40px] rounded-full bg-gray-200 overflow-hidden relative">
                {/* Placeholder for avatar */}
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300" />
            </div>
            <div className="flex flex-col">
                <span className="font-['Inter'] text-[14px] font-semibold text-[#0a0b10]">
                    {data.name}
                </span>
                <span className="font-['Inter'] text-[12px] font-medium text-[#7a7a7a]">
                    {data.role}
                </span>
            </div>
        </div>
    </div>
);

export default function Testimonials() {
    return (
        <div className="w-full max-w-[1920px] py-12 md:py-[80px] flex flex-col gap-[60px] items-center overflow-hidden mx-auto bg-[#f0f0f0]">

            {/* Header */}
            <div className="flex flex-col gap-[16px] items-center px-[20px] text-center z-10">
                <div className="flex pt-[3px] pr-[12px] pb-[3px] pl-[12px] gap-[10px] justify-center items-center bg-[#fff] rounded-[40px] shadow-[0_0_0_0_#f8f8fa]">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#08CB00]" />
                    <span className="font-['Inter'] text-[14px] font-semibold text-[#0a0b10]">
                        Testimonials
                    </span>
                </div>
                <h2 className="font-['Inter'] text-[40px] md:text-[52px] font-semibold leading-[1.2] text-[#151621] tracking-[-2.6px]">
                    What our users love <br /> about Upay.
                </h2>
            </div>

            {/* Marquee Container */}
            <div className="flex flex-col gap-[24px] w-full relative">
                {/* Top Row - Moves Left */}
                <div className="flex w-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-[#f0f0f0] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-[#f0f0f0] to-transparent z-10" />

                    <motion.div
                        className="flex gap-[24px] shrink-0"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {[...testimonialsTop, ...testimonialsTop, ...testimonialsTop].map((item, index) => (
                            <TestimonialCard key={index} data={item} />
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Row - Moves Right */}
                <div className="flex w-full overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-[#f0f0f0] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-[#f0f0f0] to-transparent z-10" />

                    <motion.div
                        className="flex gap-[24px] shrink-0"
                        initial={{ x: "-50%" }}
                        animate={{ x: "0%" }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {[...testimonialsBottom, ...testimonialsBottom, ...testimonialsBottom].map((item, index) => (
                            <TestimonialCard key={index} data={item} />
                        ))}
                    </motion.div>
                </div>
            </div>

        </div>
    );
}
