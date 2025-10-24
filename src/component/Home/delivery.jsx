import React from "react";

const items = [
  {
    id: 1,
    title: "INGEST & UNDERSTAND",
    image: "/images/Overlay.png",
    description:
      "Our AI reads and comprehends your contracts, drawings, and specifications to understand project requirements and constraints.",
    features: [
      "Contract clause extraction",
      "Drawing analysis",
      "Specification parsing",
      "Legal requirement mapping",
    ],
  },
  {
    id: 2,
    title: "MONITOR & CONNECT",
    image: "/images/Overlay-1.png",
    description:
      "Real-time monitoring connects every action to relevant contract clauses, ensuring operational compliance.",
    features: [
      "Real-time compliance checking",
      "Automatic clause linking",
      "Workflow monitoring",
      "Risk identification",
    ],
  },
  {
    id: 3,
    title: "PREDICT & ACT",
    image: "/images/Overlay-2.png",
    description:
      "Predictive intelligence identifies potential issues before they become problems and suggests corrective actions.",
    features: [
      "Risk prediction",
      "Impact analysis",
      "Automated routing",
      "Proactive alerts",
    ],
  },
  {
    id: 4,
    title: "EVIDENCE BY DESIGN",
    image: "/images/Overlay-3.png",
    description:
      "Every interaction creates legally defensible evidence, building an unbreakable audit trail for dispute prevention.",
    features: [
      "Automated documentation",
      "Legal evidence collection",
      "Audit trail creation",
      "Dispute prevention",
    ],
  },
];

const Delivery = () => {
  return (
    <div className="bg-[rgba(28,28,30,0.06)]">
      <div className="container mx-auto py-10 lg:py-14">
        <h1 className="text-[64px] leading-tight font-normal mb-[25px]">
          How Our AI Transforms Project Delivery
        </h1>
        <p className="text-[22px] text-hero-text max-w-4xl text-[#6A6A6A]">
          Four pillars of intelligence that revolutionize construction project
          management
        </p>

        <div className="items grid grid-cols-1 md:grid-cols-2 gap-10 mt-28">
          {items.map((item) => {
            const { id, title, description, features, image } = item;
            return (
              <div
                key={id}
                className="item py-6 px-[30px] bg-[#F9FAFB] border border-dashed border-[rgba(0,0,0,0.39)]">
                <div className="flex gap-3.5">
                  <div className="icon-box mb-[29px] flex justify-center">
                    <img src={image} alt={title} />
                  </div>
                  <h3 className="text-[18px] mb-[29px] text-[#0D0F11]">
                    {title}
                  </h3>
                </div>

                <p className="text-base text-[#0D0F11] mt-12">{description}</p>
                <ul className="flex flex-col gap-2 mt-12">
                  {features.map((feature, i) => (
                    <li
                      className="text-[16px] flex items-center gap-3 text-[#0D0F11]"
                      key={i}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED] flex-shrink-0 text-[#0D0F11]"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        {/* public/images/pipeline-bg.png */}
        <div className="pipeline py-12 px-4 bg-white mt-[80px] bg-[url('/images/pipeline-bg.png')] bg-cover bg-center bg-no-repeat">
          <p className="text-[18px] ml-10 mb-5">
            Document Intelligence Pipeline
          </p>
          <img src="/images/pipeline-img.png" alt="" className="w-full" />

          <div className="bg-[#FAFAFA] backdrop-blur-sm border-border py-4 px-5 text-white border border-[#AAAAAA] shadow-[12px_15px_0_0_rgba(188,188,188,0.25)] mt-[75px] flex justify-between gap-5 flex-wrap">
            <div className="item text-center">
              <p className="text-2xl text-black font-semibold">247</p>
              <p className="text-[12px] text-[#4A5565]">Clauses Extracted</p>
            </div>
            <div className="item text-center">
              <p className="text-2xl text-black font-semibold">247</p>
              <p className="text-[12px] text-[#4A5565]">Clauses Extracted</p>
            </div>
            <div className="item text-center">
              <p className="text-2xl text-black font-semibold">247</p>
              <p className="text-[12px] text-[#4A5565]">Clauses Extracted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
