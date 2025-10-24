import { ChevronsRight } from "lucide-react";
import React from "react";
import Intelligence from "./Intelligence";

const items = [
  {
    id: "01",
    title: "Connect Your Legal Framework",
    image: "/images/Background.png",
    description:
      "Upload your contracts, standards, and project documentation. Our AI learns your specific legal requirements.",
  },
  {
    id: "02",
    title: "Link Operations to the Contract",
    image: "/images/Background-1.png",
    description:
      "Every workflow, document, and communication is automatically linked to relevant contract clauses.",
  },
  {
    id: "03",
    title: "Automate Compliance & Approvals",
    image: "/images/Background-2.png",
    description:
      "AI validates all actions against contract requirements and automates approval workflows.",
  },
  {
    id: "04",
    title: "Prevent Disputes Before They Start",
    image: "/images/Background-3.png",
    description:
      "Complete audit trails and evidence collection prevent disputes and protect your interests.",
  },
];

const Works = () => {
  return (
    <div className="">
      <div className="container mx-auto py-10 lg:py-14">
        <h1 className="text-[64px] leading-tight font-normal mb-[25px]">
          How Baselinq Works
        </h1>

        <p className="text-[22px] text-hero-text max-w-4xl text-[#6A6A6A]">
          Four simple steps to transform your project delivery
        </p>

        <div className="items mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[22px]">
          {items.map((item) => {
            const { id, title, description, image } = item;
            return (
              <div
                key={id}
                className="item py-6 px-[30px] bg-[#FAFAFA] border border-[rgba(0,0,0,0.08)] text-center">
                <div className="icon-box mb-[29px] flex justify-center">
                  <img src={image} alt={title} />
                </div>
                <div className="flex items-center justify-center mb-[29px]">
                  <div className="border border-r-0 border-[#3A3A3E] rounded-l-[5px] h-[26px] w-8 flex items-center justify-center">
                    {id}
                  </div>
                  <div className="border border-[#3A3A3E] h-[26px] rounded-r-[5px] w-7 flex items-center justify-center">
                    <ChevronsRight className="text-[#8081F6]" />
                  </div>
                </div>

                <h3 className="text-[18px] mb-[29px] text-[#0D0F11]">
                  {title}
                </h3>
                <p className="text-sm text-[#0D0F11]">{description}</p>
              </div>
            );
          })}
        </div>

        <Intelligence />
      </div>
    </div>
  );
};

export default Works;
