"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
    {
        id: 0,
        title: "Scalable components",
        subtext: "Launch faster with pre‑built elements",
        image: "/User-info Section/User-img-1.avif",
    },
    {
        id: 1,
        title: "Unified style system",
        subtext: "Manage typography and colors globally to keep every page consistent.",
        image: "/User-info Section/User-img-2.avif",
    },
    {
        id: 2,
        title: "Adaptive layouts",
        subtext: "Assemble flexible, responsive sections that fit",
        image: "/User-info Section/User-img-3.avif",
    },
];

export default function UserInfo() {
    const [activeTab, setActiveTab] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startInterval = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % tabs.length);
        }, 3000);
    };

    useEffect(() => {
        startInterval();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const handleTabClick = (id: number) => {
        setActiveTab(id);
        startInterval(); // Reset timer on manual interaction
    };

    return (
        <div className="main-container flex w-full max-w-[1920px] pt-[80px] px-[20px] md:px-[100px] xl:px-[410px] pb-[80px] flex-col items-center flex-nowrap relative overflow-hidden mx-auto my-0 bg-[#f0f0f0]">
            <div className="flex flex-col gap-[32px] justify-center items-start self-stretch shrink-0 flex-nowrap relative">
                {/* Header Section */}
                <div className="flex flex-col xl:flex-row gap-[12px] justify-center items-start xl:items-end self-stretch shrink-0 flex-nowrap relative z-[1]">
                    <div className="flex w-full xl:w-[768px] flex-col items-start shrink-0 flex-nowrap relative z-[2]">
                        <div className="flex w-full max-w-[540px] pt-0 pr-0 pb-[0.61px] pl-0 flex-col items-start shrink-0 flex-nowrap relative z-[3]">
                            <span className="flex w-full justify-start items-center shrink-0 font-['Inter'] text-[40px] md:text-[52px] font-semibold leading-[1.2] text-[#151621] tracking-[-2.6px] relative text-left overflow-hidden z-[4]">
                                All-in-one dashboard <br />
                                for your business.
                            </span>
                        </div>
                    </div>
                    <div className="flex w-full xl:w-[320px] flex-col items-start shrink-0 flex-nowrap relative z-[5]">
                        <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[6]">
                            <span className="flex w-full justify-start items-center self-stretch shrink-0 font-['Inter'] text-[16px] md:text-[18px] font-medium leading-[1.5] text-[#7a7a7a] tracking-[-0.36px] relative text-left overflow-hidden z-[7]">
                                Track performance, manage data, and <br />
                                integrate with your favorite tools — all <br />
                                from a single, streamlined interface.
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col xl:flex-row w-full gap-[32px] justify-center items-center shrink-0 flex-nowrap relative z-[8]">
                    {/* Left Side: Buttons */}
                    <div className="flex w-full xl:w-[384px] flex-col gap-[24px] items-start shrink-0 flex-nowrap relative z-10">
                        {tabs.map((tab) => (
                            <div
                                key={tab.id}
                                onClick={() => handleTabClick(tab.id)}
                                className={`flex w-full cursor-pointer flex-col items-start flex-nowrap relative transition-all duration-300 ${activeTab === tab.id ? "z-[11]" : "z-[10]"
                                    }`}
                            >
                                <div
                                    className={`flex p-[20px] flex-col justify-center items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[10px] relative overflow-hidden transition-all duration-300 ${activeTab === tab.id
                                            ? "shadow-[0_7px_21px_0_rgba(8,203,0,0.1)]"
                                            : "shadow-none hover:bg-gray-50"
                                        }`}
                                >
                                    <div className="flex flex-col justify-center items-start self-stretch shrink-0 flex-nowrap relative">
                                        <div className="flex gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative">
                                            <div
                                                className={`flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap rounded-[10px] transition-colors duration-300 ${activeTab === tab.id ? "bg-blue-50" : "bg-gray-100"
                                                    }`}
                                            >
                                                <div
                                                    className={`w-[12px] h-[12px] shrink-0 rounded-[40px] relative overflow-hidden transition-colors duration-300 ${activeTab === tab.id ? "bg-[#08CB00]" : "bg-gray-400"
                                                        }`}
                                                />
                                            </div>
                                            <span className="font-['Inter'] text-[18px] font-semibold leading-[25.2px] text-[#0a0b10] tracking-[-0.54px] relative text-left whitespace-nowrap">
                                                {tab.title}
                                            </span>
                                        </div>

                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: activeTab === tab.id ? "auto" : 0,
                                                opacity: activeTab === tab.id ? 1 : 0,
                                                marginTop: activeTab === tab.id ? 16 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden w-full"
                                        >
                                            <span className="block font-['Inter'] text-[16px] font-medium leading-[24px] text-[#737373] tracking-[-0.32px] text-left">
                                                {tab.subtext}
                                            </span>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full xl:w-[684px] h-[400px] md:h-[636px] shrink-0 relative z-[48]">
                        <div className="flex w-full h-full p-[12px] flex-col items-start flex-nowrap bg-[#f8f8fa] rounded-[31.31px] relative z-[49]">
                            <div className="w-full h-full self-stretch shrink-0 rounded-[20px] relative z-50 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeTab}
                                        src={tabs[activeTab].image}
                                        alt={tabs[activeTab].title}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="w-full h-full object-cover object-left-top absolute top-0 left-0"
                                    />
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
