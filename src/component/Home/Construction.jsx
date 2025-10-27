import React from "react";

const items = [
  {
    id: 1,
    title: "Main Contractors",
    position: "Deliver on programme",
    image: "/images/construction-img-3.png",
    profile_img: "/images/construction-overlay.png",
    description:
      "Keep projects on track with intelligent workflow management, automated compliance checking, and real-time risk identification.",
    features: [
      "Reduce RFI cycle times by 70%",
      "Eliminate superseded drawing issues",
      "Automate compliance documentation",
      "Prevent costly delays and disputes",
    ],
  },
  {
    id: 2,
    title: "Professionals",
    position: "Contract-smart workflows",
    image: "/images/construction-img-1.png",
    profile_img: "/images/construction-overlay-1.png",
    description:
      "Empower architects, engineers, and consultants with AI-enhanced document control and intelligent compliance verification.",
    features: [
      "Automated clause citations in responses",
      "Real-time drawing version control",
      "Intelligent approval routing",
      "Complete professional liability protection",
    ],
  },
  {
    id: 3,
    title: "Owners & Developers",
    position: "Portfolio-wide clarity",
    image: "/images/construction-img-2.png",
    profile_img: "/images/construction-overlay-2.png",
    description:
      "Gain unprecedented visibility across your entire portfolio with intelligent reporting and proactive risk management.",
    features: [
      "Real-time portfolio dashboard",
      "Predictive risk identification",
      "Automated progress reporting",
      "Enhanced dispute prevention",
    ],
  },
];

const Construction = () => {
  return (
    <div className="">
      <div className="container mx-auto py-10 lg:py-14 px-4">
        <h1 className="sm:text-5xl text-4xl lg:text-[64px] leading-tight font-normal mb-[25px]">
          Built for Every Role in Construction
        </h1>
        <p className="text-xl md:text-[22px] text-hero-text max-w-4xl text-[#6A6A6A]">
          Tailored intelligence for every stakeholder in the construction
          process
        </p>

        <div className="items grid grid-cols-1 gap-9 mt-28">
          {items.map((item) => {
            const {
              id,
              title,
              description,
              features,
              image,
              position,
              profile_img,
            } = item;
            return (
              <div
                key={id}
                className="item py-6 px-[30px] bg-[#F9FAFB] border border-dashed border-[rgba(0,0,0,0.39)] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {id % 2 !== 0 && (
                  <div className="image-box w-full hidden md:block">
                    <img src={image} alt="" className="w-full" />
                  </div>
                )}

                <div className="">
                  <div className="flex items-center gap-3.5 mb-[27px]">
                    <div className="icon-box flex justify-center h-12 w-12">
                      <img
                        src={profile_img}
                        alt={title}
                        className="h-full w-full"
                      />
                    </div>
                    <div className="">
                      <h3 className="text-[22px] text-[#0D0F11]">{title}</h3>
                      <p className="text-base text-[#2F80ED]">{position}</p>
                    </div>
                  </div>

                  <p className="text-base text-[#0D0F11] mb-7">{description}</p>
                  <div className="flex flex-col gap-2">
                    {features.map((feature, i) => (
                      <div className="div" key={i}>
                        <div className="text-[16px] inline-block gap-3 text-[#0D0F11] py-4 px-8 border border-dashed border-[rgba(0,0,0,0.39)] rounded-full">
                          <span>{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {id % 2 === 0 && (
                  <div className="image-box w-full hidden md:block">
                    <img src={image} alt="" className="w-full" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Construction;
