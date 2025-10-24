import Image from "next/image";
import React from "react";

const Performance = () => {
  return (
    <div className="">
      <div className="container mx-auto py-10 lg:py-14">
        <h1 className="text-[64px] leading-tight font-normal mb-[25px]">
          Performance
          <span className="bg-gradient-to-r from-black via-primary to-primary bg-clip-text text-transparent">
            Transformation
          </span>{" "}
        </h1>

        <p className="text-[22px] text-hero-text max-w-4xl text-[#6A6A6A]">
          Measurable improvements with Baselinq intelligence
        </p>

        <div className="design w-full relative mt-[100px]">
          <img src="/images/performance-img.png" alt="Logo" />
        </div>

        <div className="bg-[#FAFAFA]/10 backdrop-blur-sm border-border py-9 px-8 text-white border border-[#AAAAAA] shadow-[12px_15px_0_0_rgba(188,188,188,0.25)] mt-[75px]">
          <div className="text-center">
            <h2 className="text-[35px] font-bold text-[#10B981] mb-2">340%</h2>
            <h4 className="text-base font-medium text-[#10B981] mb-1">
              AVERAGE ROI
            </h4>

            <p className="text-[16px] text-black mb-2">
              Return on investment within 12 months
            </p>

            <div className="flex justify-center items-center gap-2 my-[18px] w-full">
              <div className="w-[37px] h-2 bg-[#EF4444] rounded-full"></div>
              <div className="w-[56px] h-2 bg-[#F59E0B] rounded-full"></div>
              <div className="w-[75px] h-2 bg-[#10B981] rounded-full"></div>
            </div>

            <div className="flex justify-center gap-8 text-[14px] text-black">
              <span>Month 1-3</span>
              <span>Month 4-8</span>
              <span>Month 9-12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
