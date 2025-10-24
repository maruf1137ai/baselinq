import { AlertTriangle, CheckCircle2, CircleCheckBig } from "lucide-react";
import React from "react";

const items = [
  {
    title: "RFI & Variation Orders",
    image: "/images/platform-overlay.png",
    description:
      "Streamlined request management with automated routing, clause citations, and impact analysis.",
    features: [
      "Auto-route to relevant stakeholders [cite: 5]",
      "Contract clause citations [cite: 6]",
      "Impact analysis and timeline updates [cite: 7]",
      "Approval workflow automation [cite: 8]",
    ],
  },
  {
    title: "Drawings & Documents",
    image: "/images/platform-overlay-1.png",
    description:
      "Intelligent document control with version management, supersession alerts, and compliance checking.",
    features: [
      "Real-time version control [cite: 11]",
      "Supersession alerts [cite: 12]",
      "Drawing compliance verification [cite: 13]",
      "Automated distribution [cite: 14]",
    ],
  },
  {
    title: "Communications & Audit Trail",
    image: "/images/platform-overlay-2.png",
    description:
      "Complete communication logging with legal evidence collection and searchable audit trails.",
    features: [
      "Automated documentation [cite: 18]",
      "Legal evidence collection [cite: 19]",
      "Searchable communication history [cite: 20]",
      "Compliance verification [cite: 21]",
    ],
  },
  {
    title: "Delays & Claims",
    image: "/images/platform-overlay-3.png",
    description:
      "Proactive delay identification with automated evidence collection for claims prevention.",
    features: [
      "Early delay detection [cite: 25]",
      "Automated evidence linking [cite: 26]",
      "Claims impact analysis [cite: 27]",
      "Dispute prevention tools [cite: 28]",
    ],
  },
];

const Platform = () => {
  return (
    <section className="bg-black-dark text-white-light relative">
      <div className=" container mx-auto px-4 py-20 lg:pb-32 relative z-10">
        <h2 className="text-[64px] leading-tight font-normal text-section-title text-center mb-6 text-white">
          One Platform. Total Control.
        </h2>

        <p className="text-[22px] text-section-subtitle text-center mb-[100px]">
          Everything you need to manage construction projects intelligently
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Current Reality Card */}
          {items.map((item) => {
            const { id, title, image, description, features } = item;

            return (
              <div
                key={id}
                className="bg-[#FAFAFA]/10 backdrop-blur-sm border-border py-9 px-8 text-white border border-[#AAAAAA] shadow-[12px_15px_0_0_rgba(255,255,255,0.25)]">
                <div className="flex items-start gap-3.5">
                  <div className="icon-box mb-[29px] flex justify-center">
                    <img src={image} alt={title} />
                  </div>
                  <div className="">
                    <h3 className="text-[19px] mb-[15px]">{title}</h3>
                    <p className="text-base mb-[13px]">{description}</p>
                    <ul className="flex flex-col gap-2">
                      {features.map((feature, i) => (
                        <li
                          className="text-[13px] flex items-center gap-3"
                          key={i}>
                          <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <img
        src="/images/shadow.png"
        alt=""
        className="absolute bottom-0 z-1 max-h-[143px] w-full left-1/2 -translate-x-1/2"
      />
    </section>
  );
};

export default Platform;
